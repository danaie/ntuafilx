import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { FaSearch } from 'react-icons/fa';
import '../styles/globalstyles.css';

const Watchlist = () => {
  const [watchlist, setWatchlist] = useState([]);
  const router = useRouter();

  useEffect(() => {
    fetchWatchlist();
  }, []);

  const fetchWatchlist = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        console.error('User not authenticated. Please log in.');
        router.push('/login');
        // Handle the case where the user is not authenticated
        return;
      }
    
      const response = await fetch('http://localhost:9876/ntuaflix_api/watchlist', {
        headers: {
          'X-OBSERVATORY-AUTH': token,
        },
      });
    
      if (response.status === 401) {
        console.error('User not authenticated. Redirecting to login page.');
        router.push('/login');
        return;
      }
    
      const responseData = await response.json();
      const data = responseData.data; // Access the 'data' property from the response JSON
    
      setWatchlist(data); // Make sure data is an array of objects
    } catch (error) {
      console.error('Error fetching watchlist:', error);
    }
  };

  const removeFromWatchlist = async (titleID) => {
    try {
      await fetch(`http://localhost:9876/ntuaflix_api/watchlist/${titleID}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      fetchWatchlist();
    } catch (error) {
      console.error('Error removing from watchlist:', error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    router.push('/new'); // Navigate to the 'new.js' page on logout
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

  const addToWatchlist = async (titleID) => {
    try {
      const token = localStorage.getItem('accessToken');
      if (!token) {
        console.error('User not authenticated. Please log in.');
        return;
      }

      await axios.post(`http://localhost:9876/ntuaflix_api/watchlist/${titleID}`, null, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      fetchWatchlist(); // Refresh watchlist data after adding a movie
    } catch (error) {
      console.error('Error adding to watchlist:', error);
    }
  };

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
          My Watchlist
        </h2>
  {Array.isArray(watchlist) && watchlist.length > 0 ? (
    <ul style={{ listStyleType: 'none', padding: 0, display: 'flex', flexWrap: 'wrap' }}>
      {watchlist.map((movie) => (
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
                  style={{ width: '200px', height: '88%', objectFit: 'cover' }}
                />
              ) : (
                <div>No Image Available</div>
              )}
            </div>
            <button onClick={(event) => {
              event.stopPropagation();
              removeFromWatchlist(movie.titleID);
            }}>Remove</button>
          </div>
        </li>
      ))}
    </ul>
  ) : (
    <p>No movies in the watchlist</p>
  )}
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
  );
};

export default Watchlist;