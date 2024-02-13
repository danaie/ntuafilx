import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import Link from 'next/link';
import '../styles/globalstyles.css';

const HomeWhenLoggedIn = () => {
  const [searchType, setSearchType] = useState('title');
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [qgenre, setQGenre] = useState('');
  const [minrating, setMinRating] = useState('');
  const [yrFrom, setYrFrom] = useState('');
  const [yrTo, setYrTo] = useState('');
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSearchTypeChange = (e) => {
    setSearchType(e.target.value);
  };

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    setIsLoggedIn(false);
    router.push('/new'); // Navigate to the 'new.js' page on logout
  };

  const handleProfileClick = () => {
    router.push('/profile');
  };

  const handleWatchlistClick = () => {
    router.push('/watchlist');
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
          pathname: '/search-results',
          query: { searchResults: JSON.stringify(response.data.data), titlePart: searchQuery },
        });
      } else if (searchType === 'actor') {
        // Search by actor
        response = await axios.get('http://localhost:9876/ntuaflix_api/searchnames', {
          params: { namePart: searchQuery },
        });
        console.log('Search response:', response.data);
        setSearchResults(response.data.data);
        router.push({
          pathname: '/search-results-actor',
          query: { searchResults: JSON.stringify(response.data.data), namePart: searchQuery },
        });
      } else if (searchType === 'genre') {
        // Check if required fields are filled
        if (qgenre && minrating) {
          // Construct query parameters object
          const queryParams = {
            qgenre,
            minrating,
          };

          // Add optional fields if they are filled
          if (yrFrom) queryParams.yrFrom = yrFrom;
          if (yrTo) queryParams.yrTo = yrTo;

          // Perform the search
          response = await axios.get('http://localhost:9876/ntuaflix_api/bygenres', {
            params: queryParams,
          });
          console.log('Search response:', response.data);
          setSearchResults(response.data.data);
          router.push({
            pathname: '/search-genre',
            query: queryParams,
          });
        } else {
          console.log('Please fill out required fields: Genre and Minimum Rating');
        }
      }
    } catch (error) {
      console.error('Search error:', error);
      setSearchResults([]);
      router.push({
        pathname: '/search-results',
        query: {
          searchResults: '[]',
          titlePart: searchQuery,
          noResults: true,
        },
      });
    }
  };

  return (
    <div className="home-container">
      <div className="header">
        <h1 className="title">Ntuaflix</h1>
        <div className="auth-buttons">
          <button className="btn btn-secondary profile-button" onClick={handleProfileClick}>
            Profile
          </button>
          <button className="btn btn-secondary" onClick={handleWatchlistClick}>
            Watchlist
          </button>
          <button className="btn btn-secondary" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
      <div>
        {searchType === 'genre' ? (
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
            {/* Add other genre search fields as needed */}
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
            {/* Add other search fields as needed */}
            <button type="submit">Search</button>
          </form>
        )}
        <div>
          {searchResults.map((result) => (
            <div key={result.id}>{result.title}</div>
          ))}
        </div>
      </div>
      <div className="tagline-container">
        <p className="tagline">Immerse Yourself in Cinema. Search, Explore, Enjoy with Ntuaflix!</p>
        <p className="tagline">
          See the Top 10 rated movies{' '}
          <Link href="/toprated" style={{ textDecoration: 'none' }}>
            <strong style={{ color: 'black' }}>here</strong>
          </Link>
        </p>
      </div>
      <div className="additional-content">
        <img src="/images/myImage.jpg" className="additional-image" />
      </div>
      <style jsx>{`
        /* Your existing styles remain unchanged */
      `}</style>
    </div>
  );
};

export default HomeWhenLoggedIn;
