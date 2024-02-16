import React, { useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import Link from 'next/link';
import '../styles/globalstyles.css';
import { FaSearch } from 'react-icons/fa';
import Watchlist from './watchlist'; // Import the Watchlist component



const SearchResultsPage = () => {
  const router = useRouter();
  const { searchResults, titlePart } = router.query;

  const handleAddToWatchlist = async (titleID) => {
    try {
      const token = localStorage.getItem('accessToken');
  
      // Check if the user is logged in (authenticated)
      if (!token) {
        console.error('User not authenticated. Please log in.');
        // You can redirect the user to the login page or display a login prompt.
        // For example, you can use the router to navigate to the login page:
        // router.push('/login');
        return;
      }
  
      const response = await axios.post(
        `http://localhost:9876/ntuaflix_api/watchlist/${titleID}`,
        null,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
  
      console.log('Response from backend:', response.data);
  
      // Assuming the backend returns some data, you can log it to check for success or any additional information.
      console.log(`Movie with titleID ${titleID} added to the watchlist`);
  
      fetchWatchlist(); // Fetch updated watchlist after adding a movie
    } catch (error) {
      console.error('Error adding to watchlist:', error);
    }
  };
  
  
  const handleMovieClick = async (titleID) => {
    try {
      let response;
      response = await axios.get(`http://localhost:9876/ntuaflix_api/title/${titleID}`);
      console.log('Movie data response:', response.data);
      //setMovieDetailsResults(response.data.data);
      router.push({
        pathname: '/movie-details2-log',
        query: { titleID: titleID }, // Pass titleID as a query parameter
      });
    } catch (error) {
      console.error('Error fetching movie data:', error);
    }
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

  const results = searchResults ? JSON.parse(searchResults) : [];
  const handleSearchClick = () => {
    // Navigate to the /new page
    router.push('/homepagewhenloggedin2');
  };
  return (
    <div className="home-container">
      <div className="header">
        <div className="search-icon" onClick={handleSearchClick}>
          <FaSearch style={{ fontSize: '26px' }} />
        </div>
        <div className="logo-container">
          <Link href="/homepagewhenloggedin2" style={{ textDecoration: 'none' }}>
            <h1 className="title">Ntuaflix</h1>
          </Link>
        </div>
        <div className="auth-buttons">
          <Link href="/watchlist" style={{ textDecoration: 'none' }}>
            <div className="login-button">Watchlist</div>
          </Link>
          <div className="login-button" onClick={handleLogout}>
      Logout
    </div>
        </div>    
      </div>
      <div>
        <h2 style={{ textAlign: 'center', fontWeight: 'normal' }}>
          Search Results for <span style={{ fontWeight: 'bold' }}>'{titlePart}'</span>
        </h2>
        {results.length > 0 ? (
  <ul style={{ listStyleType: 'none', padding: 0, display: 'flex', flexWrap: 'wrap' }}>
    {results.map((movie) => (
      <li key={movie.titleID} style={{ width: '220px', margin: '10px' }}>
        <div className="movie-container">
          <div className="movie-title">
            {movie.titleID && <span style={{ fontWeight: 'bold' }}>{movie.originalTitle}</span>}
          </div>
          <div className="movie-image">
            {movie.image ? (
              <img
                src={movie.image.replace('{width_variable}', 'w200')}
                alt={movie.originalTitle}
                style={{ width: '200px', height: '82%', objectFit: 'cover' }}
              />
            ) : (
              <div>No Image Available</div>
            )}
          </div>
          {/* Add the "Add to Watchlist" button here */}
          <button onClick={() => handleAddToWatchlist(movie.titleID)} className="add-to-watchlist-button">
            Add to Watchlist
          </button>
        </div>
      </li>
    ))}
  </ul>
) : (
  results.length === 0 ? (
    <p style={{ textAlign: 'center' }}>No movies found with the title '{titlePart}'</p>
  ) : (
    <p style={{ textAlign: 'center' }}>Invalid search query</p>
  )
)}

      </div>
      <style jsx>{`
      .add-to-watchlist-button {
        background-color: grey;
        color: white;
        border: 1px solid grey;
        padding: 5px 10px;
        cursor: pointer;
      }
      
      .add-to-watchlist-button {
        align-self: flex-end;
        margin-top: auto;
        margin-right: 40px; /* Push the button to the bottom */
      }
      
      .movie-container {
        width: 215px;
        height: 350px; /* Adjust height as needed */
        border: 1px solid #ccc;
        padding: 10px;
        text-align: center;
        display: flex;
        flex-direction: column;
      }
      .movie-title {
        font-weight: bold;
      }
      
      .movie-image {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      
      .movie-image img {
        max-width: 100%;
        max-height: 100%;
        object-fit: cover;
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
  )
};

export default SearchResultsPage;

/*return (
  <div>
    <h2>Search Results for {titlePart}</h2>
    <ul>
      {results.length > 0 ? (
        results.map((movie) => (
          <li key={movie.titleID} onClick={() => handleMovieClick(movie.titleID)}>
            {movie.titleID && <span>{movie.originalTitle}</span>}
          </li>
        ))
      ) : (
        <p>No movies with this title</p>
      )}
    </ul>
  </div>
);*/