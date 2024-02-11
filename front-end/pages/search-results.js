/*import React from 'react';
import { useRouter } from 'next/router';

const SearchResultsPage = () => {
  const router = useRouter();
  const { searchResults } = router.query;

  const results = searchResults ? JSON.parse(searchResults) : [];

  return (
    <div>
      <h2>Search Results</h2>
      <ul>
        {results.length > 0 ? (
          results.map((movie) => (
            <li key={movie.titleID}>
              {movie.titleID && <span>{movie.originalTitle}</span>}
            </li>
          ))
        ) : (
          <p>No movies with this title</p>
        )}
      </ul>
    </div>
  );
};

export default SearchResultsPage;*/

import React, { useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import Link from 'next/link';
import '../styles/globalstyles.css';

const SearchResultsPage = () => {
  const router = useRouter();
  const { searchResults, titlePart } = router.query;
  
  const handleMovieClick = async (titleID) => {
    try {
      let response;
      response = await axios.get(`http://localhost:9876/ntuaflix_api/title/${titleID}`);
      console.log('Movie data response:', response.data);
      //setMovieDetailsResults(response.data.data);
      router.push({
        pathname: '/movie-details2',
        query: { titleID: titleID }, // Pass titleID as a query parameter
      });
    } catch (error) {
      console.error('Error fetching movie data:', error);
    }
  };

  const results = searchResults ? JSON.parse(searchResults) : [];
 
  return (
  <div className="home-container">
      <div className="header">
      <Link href="/new" style={{ textDecoration: 'none' }}>
          <h1 className="title">Ntuaflix</h1>
        </Link>
        <div className="auth-buttons">
          <Link href="/login" style={{ textDecoration: 'none' }}>
            <div className="login-button">Login</div>
          </Link>
          <Link href="/signup" style={{ textDecoration: 'none' }}>
            <div className="login-button">Sign up</div>
          </Link>
        </div>     
      </div>
      <div>
      <h2 style={{ textAlign: 'center', fontWeight: 'normal' }}>
        Search Results for <span style={{ fontWeight: 'bold' }}>'{titlePart}'</span>
      </h2>
      <ul style={{ listStyleType: 'none', padding: 0, display: 'flex', flexWrap: 'wrap' }}>
      {results.length > 0 ? (
  results.map((movie) => (
    <li key={movie.titleID} style={{ width: '220px', margin: '10px' }}>
      <div className="movie-container" onClick={() => handleMovieClick(movie.titleID)}>
        <div className="movie-title">
          {movie.titleID && <span style={{ fontWeight: 'bold' }}>{movie.originalTitle}</span>}
        </div>
        <div className="movie-image">
          {movie.image ? (
            <img
              src={movie.image.replace('{width_variable}', 'w200')} // Adjusted width to fit the box
              alt={movie.originalTitle}
              style={{ width: '200px', height: '88%', objectFit: 'cover' }} // Set the desired width here
            />
          ) : (
            <div>No Image Available</div>
          )}
        </div>
      </div>
    </li>
  ))
) : (
  <p>No movies with this title</p>
)}
</ul>

 </div>
      <style jsx>{`
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