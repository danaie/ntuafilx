import React, { useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import Link from 'next/link';
import '../styles/globalstyles.css';
import { FaSearch } from 'react-icons/fa';


const SearchResultsPage = () => {
  const router = useRouter();
  const { searchResults, namePart } = router.query;

  const handleMovieClick = async (nameID) => {
    try {
      let response;
      response = await axios.get(`http://localhost:9876/ntuaflix_api/name/${nameID}`);
      console.log('Movie data responsee:', response.data);
      //setMovieDetailsResults(response.data.data);
      router.push({
        pathname: '/actor-details-log',
        query: { nameID: nameID }, // Pass titleID as a query parameter
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

  const handleSearchClick = () => {
    // Navigate to the /new page
    router.push('/homepagewhenloggedin2');
  };
  const results = searchResults ? JSON.parse(searchResults) : [];

  /*return (
    <div>
      <h2>Search Results</h2>
      <ul>
        {results.length > 0 ? (
          results.map((movie) => (
            <li key={movie.basicsID} onClick={() => handleMovieClick(movie.basicsID)}>
              {movie.basicsID && <span>{movie.primaryName}</span>}
            </li>
          ))
        ) : (
          <p>No movies with this title</p>
        )}
      </ul>
    </div>
  );*/
  return (
    <div className="home-container">
        <div className="header">
        <div className="search-icon" onClick={handleSearchClick}>
        <FaSearch style={{ fontSize: '26px' }} /> {/* Use the imported search icon component */}
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
          Search Results for <span style={{ fontWeight: 'bold' }}>'{namePart}'</span>
        </h2>
        <ul style={{ listStyleType: 'none', padding: 0, display: 'flex', flexWrap: 'wrap' }}>
        {results.length > 0 ? (
    results.map((actor) => (
      <li key={actor.basicsID} style={{ width: '220px', margin: '10px' }}>
        <div className="movie-container" onClick={() => handleMovieClick(actor.basicsID)}>
          <div className="movie-title">
            {actor.basicsID && <span style={{ fontWeight: 'bold' }}>{actor.primaryName}</span>}
          </div>
          <div className="movie-image">
            {actor.image ? (
              <img
                src={actor.image.replace('{width_variable}', 'w200')} // Adjusted width to fit the box
                alt={actor.primaryName}
                style={{ width: '200px', height: '77%', objectFit: 'cover' }} // Set the desired width here
              />
            ) : (
              <div>No Image Available</div>
            )}
          </div>
        </div>
      </li>
    ))
  ) :  (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
    <p>No principal found with this name '{namePart}'</p>
  </div>
  )}
  </ul> 
   </div>
        <style jsx>{`
        .no-results-message {
          text-align: center;
        }
        .movie-container {
          width: 225px;
          height: 320px; /* Adjust height as needed */
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