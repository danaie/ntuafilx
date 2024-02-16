import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import Link from 'next/link';
import { FaSearch } from 'react-icons/fa';
import '../styles/globalstyles.css';


const SearchResultsPage = () => {
  const router = useRouter();
  const { searchResults, titlePart } = router.query;
  const [watchlist, setWatchlist] = useState([]);

  useEffect(() => {
    fetchWatchlist();
  }, []);

  const fetchWatchlist = async () => {
    try {
      const response = await axios.get('http://localhost:9876/ntuaflix_api/watchlist');
      setWatchlist(response.data);
    } catch (error) {
      console.error('Error fetching watchlist:', error);
    }
  };

  const addToWatchlist = async (titleID) => {
    try {
      const token = localStorage.getItem('accessToken');
      if (!token) {
        console.error('User not authenticated. Please log in.');
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
  
      console.log('Added to watchlist:', response.data);
      fetchWatchlist(); // Refresh watchlist data after adding a movie
    } catch (error) {
      console.error('Error adding to watchlist:', error);
    }
  };
  

  const removeFromWatchlist = async (titleID) => {
    try {
      const token = localStorage.getItem('accessToken');
      if (!token) {
        console.error('User not authenticated. Please log in.');
        return;
      }
  
      const response = await axios.delete(`http://localhost:9876/ntuaflix_api/watchlist/${titleID}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
  
      console.log('Removed from watchlist:', response.data);
      fetchWatchlist(); // Refresh watchlist data after removing a movie
    } catch (error) {
      console.error('Error removing from watchlist:', error);
    }
  };
  

  const handleMovieClick = async (titleID) => {
    try {
      const response = await axios.get(`http://localhost:9876/ntuaflix_api/title/${titleID}`);
      console.log('Movie data response:', response.data);
      router.push({
        pathname: '/movie-details2-log',
        query: { titleID: titleID },
      });
    } catch (error) {
      console.error('Error fetching movie data:', error);
    }
  };

  const handleLogout = async () => {
    try {
      await axios.get('http://localhost:9876/ntuaflix_api/logout');
      localStorage.removeItem('accessToken');
      router.push('/new');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  const results = searchResults ? JSON.parse(searchResults) : [];

  const handleSearchClick = () => {
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
               <div className="movie-container" onClick={() => handleMovieClick(movie.titleID)}>
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
                  {/* Dynamically change the button text based on watchlist */}
                  <button
        onClick={() => addToWatchlist(movie.titleID)}
        className="add-to-watchlist-button"
      >
        {watchlist.some((watchlistMovie) => watchlistMovie.titleID === movie.titleID)
          ? 'Remove from Watchlist'
          : 'Add to Watchlist'}
      </button>


                </div>
              </li>
            ))}
          </ul>
        ) : results.length === 0 ? (
          <p style={{ textAlign: 'center' }}>No movies found with the title '{titlePart}'</p>
        ) : (
          <p style={{ textAlign: 'center' }}>Invalid search query</p>
        )}
      </div>
      <style jsx>{`
        .add-to-watchlist-button {
          background-color: grey;
          color: white;
          border: 1px solid grey;
          padding: 5px 10px;
          cursor: pointer;
          align-self: flex-end;
          margin-top: auto;
          margin-right: 40px;
        }

        .movie-container {
          width: 215px;
          height: 350px;
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
      `}</style>
    </div>
  );
};

export default SearchResultsPage;
