import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router'; // Import useRouter from next/router
import '../styles/globalstyles.css';
import Link from 'next/link';
import Cookies from 'js-cookie';

import Watchlist from './watchlist';

const Search = () => {
  const [searchType, setSearchType] = useState('title');
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [qgenre, setQGenre] = useState(''); // New state variable for genre field 1
  const [minrating, setMinRating] = useState(''); // New state variable for genre field 2
  const [yrFrom, setYrFrom] = useState('');
  const [yrTo, setYrTo] = useState('');
  const router = useRouter(); // Use useRouter hook from next/router
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSearchTypeChange = (e) => {
    setSearchType(e.target.value);
  };
  useEffect(() => {
    // Check if the user has a valid token (you can customize this logic)
    const token = localStorage.getItem('accessToken'); // Replace with your actual token storage key
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const isInWatchlist = (titleID) => {
    return Watchlist.some(movie => movie.titleID === titleID);
  };

  const handleLogout = async () => {
    try {
        await axios.get('http://localhost:9876/ntuaflix_api/logout');
        localStorage.removeItem(token);
        router.push('/new');
    } catch (error) {
        console.error('Logout failed:', error);
        // Handle any error appropriately
    }
};
  
  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      let response;
      if (searchType === 'title') {
        // Search by title
        response = await axios.get('http://localhost:9876/ntuaflix_api/searchtitles', {
          params: { titlePart: searchQuery },
        });
        console.log('Search response:', response.data);
        setSearchResults(response.data.data);
        router.push({
          pathname: '/search-results-log',
          query: { searchResults: JSON.stringify(response.data.data), titlePart: searchQuery }, // Pass searchResults as a query parameter
        });
      } else if (searchType === 'actor') {
        // Search by actor
        try {
          response = await axios.get('http://localhost:9876/ntuaflix_api/searchnames', {
            params: { namePart: searchQuery },
          });
          console.log('Search response:', response.data);
          setSearchResults(response.data.data);
          router.push({
            pathname: '/search-results-actor-log',
            query: { searchResults: JSON.stringify(response.data.data), namePart: searchQuery }, // Pass searchResults as a query parameter
          });
        } catch (error) {
          console.error('Error searching by actor:', error.message);
          // Handle the error case for actor search
          setSearchResults([]); // Set empty search results
          router.push({
            pathname: '/search-results-actor-log',
            query: {
              searchResults: '[]', // Pass empty search results as a string
              namePart: searchQuery,
              noResults: true, // Add a flag indicating no results found
            },
          });
        }
      } else if (searchType === 'genre') {
        // Check if required fields are filled
        if (qgenre && minrating) {
          // Construct query parameters object
          const queryParams = {
            qgenre,
            minrating,
          };
          if (yrFrom) queryParams.yrFrom = yrFrom;
          if (yrTo) queryParams.yrTo = yrTo;
          const additionalFields = Object.keys(queryParams).length - 2; // Subtracting the count of required fields
          console.log('Query Parameters:', queryParams);
  
          if (additionalFields > 4) {
            console.log('Please fill out only the required and optional fields.');
            return; // Stop execution or return an error message
          }
  
          try {
            response = await axios.get('http://localhost:9876/ntuaflix_api/bygenres', {
              params: queryParams,
            });
            console.log('Search response:', response.data);
            setSearchResults(response.data.data);
  
            if (response.data.data.length === 0) {
              // Redirect to the search-genre page with a message indicating no movies were found
              router.push({
                pathname: '/search-genre-log',
                query: { ...queryParams, message: 'No movies were found.' },
              });
            } else {
              // Redirect to the search-genre page without a message
              router.push({
                pathname: '/search-genre-log',
                query: queryParams,
              });
            }
          } catch (error) {
            console.error('Error searching by genre:', error.message);
            // Handle the error case for genre search
            setSearchResults([]); // Set empty search results
            router.push({
              pathname: '/search-genre-log',
              query: {
                ...queryParams,
                searchResults: '[]', // Pass empty search results as a string
                message: 'An error occurred while searching.', // Add an error message
              },
            });
          }
        } else {
          console.log('Please fill out required fields: Genre and Minimum Rating');
        }
      }
    } catch (error) {
      console.error('Search error:', error);
      // Handle the error case
      setSearchResults([]); // Set empty search results
      router.push({
        pathname: '/search-results-log',
        query: {
          searchResults: '[]', // Pass empty search results as a string
          titlePart: searchQuery,
          noResults: true, // Add a flag indicating no results found
        },
      });
    }
  };
  
  const handleWatchlistClick = (titleID) => {
    // Call the addToWatchlist function from the Watchlist component
    watchlistRef.current.addToWatchlist(titleID);
  };
    return (
      <div className="home-container">
      <div className="header">
        <h1 className="title">Ntuaflix</h1>
        <div>
      {searchType === "genre" ? (
        <form onSubmit={handleSearch}>
          <select value={searchType} onChange={handleSearchTypeChange}>
            <option value="title">Title</option>
            <option value="genre">Genre</option>
            <option value="actor">Actor</option>
          </select>
          <div>
            <label htmlFor="qgenre">Genre:</label>
            <input
              type="text"
              id="qgenre"
              value={qgenre}
              onChange={(e) => setQGenre(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="minrating">Minimum Rating:</label>
            <input
              type="number"
              id="minrating"
              value={minrating}
              onChange={(e) => setMinRating(e.target.value)}
              min="0"
              max="10"
              step="0.1"
              required
            />
          </div>
          <div>
            <label htmlFor="yrFrom">Year From:</label>
            <input
              type="number"
              id="yrFrom"
              value={yrFrom}
              onChange={(e) => setYrFrom(e.target.value)}
              min="1900"
              max="2024"
            />
          </div>
          <div>
            <label htmlFor="yrTo">Year To:</label>
            <input
              type="number"
              id="yrTo"
              value={yrTo}
              onChange={(e) => setYrTo(e.target.value)}
              min="1900"
              max="2024"
            />
          </div>
          <button type="submit">Search</button>
        </form>
      ) : (
        <form onSubmit={handleSearch}>
          <select value={searchType} onChange={handleSearchTypeChange}>
            <option value="title">Title</option>
            <option value="genre">Genre</option>
            <option value="actor">Actor</option>
          </select>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Enter search query"
          />
          <button type="submit">Search</button>
        </form>
      )}
      <div>
        {searchResults.map((result) => (
          <div key={result.id}>{result.title}</div>
        ))}
      </div>
    </div>
        <div className="auth-buttons">
          <Link href="/watchlist" style={{ textDecoration: 'none' }}>
            <div className="login-button">Watchlist</div>
          </Link>
          <Link href="/new" style={{ textDecoration: 'none' }}>
            <div className="login-button">Logout</div>
          </Link>
        </div>     
      </div>
      <p className="tagline">Immerse Yourself in Cinema. Search, Explore, Enjoy with Ntuaflix!</p>
      <p className="tagline">See the Top 10 rated movies <Link href="/toprated-log" style={{ textDecoration: 'none' }}>
    <strong style={{ color: 'black' }}>here</strong>
  </Link></p>
      <div className="additional-content">
        <img src="/images/myImage.jpg" className="additional-image" />
      </div>
      <style jsx>{`
      .tagline {
        color: black; /* or any color you prefer */
      }
        .select {
          padding: 12px;
          width: 100px;
          border: 2px solid #61006D;
          border-radius: 5px;
          margin-right: 10px;
          font-size: 14px;
        }
        .additional-content {
          margin-top: 20px;
          text-align: center;
        }
        .additional-image {
          max-width: 100%;
          height: auto;
          border-radius: 5px;
        }
        .tagline {
          font-size: 16px;
          color: #000000;
          text-align: center;
        }
      `}</style>
    </div>
  );
};

export default Search;
