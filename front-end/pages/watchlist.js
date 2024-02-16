import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import Link from 'next/link';
import '../styles/globalstyles.css';

const Watchlist = () => {
  const [watchlist, setWatchlist] = useState([]);
  const router = useRouter();

  useEffect(() => {
    // Fetch the user's watchlist when the component mounts
    fetchWatchlist();
  }, []);

  const fetchWatchlist = async () => {
    try {
      const response = await fetch('http://localhost:9876/ntuaflix_api/watchlist');
      const data = await response.json();
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

      // Refresh watchlist data after removing a movie
      fetchWatchlist();
    } catch (error) {
      console.error('Error removing from watchlist:', error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    router.push('/new'); // Navigate to the 'new.js' page on logout
  };

  const handleAddToWatchlist = async (titleID) => {
    try {
      await axios.post(`http://localhost:9876/ntuaflix_api/watchlist/${titleID}`);
      fetchWatchlist();
    } catch (error) {
      console.error('Error adding to watchlist:', error);
      // Μπορείτε να προσθέσετε κάποια λειτουργία αντιμετώπισης σφαλμάτων εδώ
    }
  };

  return (
    <div className="home-container">
      <div className="header" style={{ backgroundColor: '#add8e6', padding: '1rem', width: '100%', margin: '0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1 className="title">Ntuaflix</h1>
        <div className="auth-buttons">
          <button className="btn btn-secondary profile-button" onClick={() => router.push('/profile')}>
            Profile
          </button>
          <button className="btn btn-secondary" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
      <div className="main-content">
        <h2>My Watchlist</h2>
        <ul>
          {Array.isArray(watchlist) && watchlist.length > 0 ? (
            watchlist.map((movie) => (
              <li key={movie.titleID}>
                {movie.title && <span>{movie.title}</span>}
                <button onClick={() => removeFromWatchlist(movie.titleID)}>Remove</button>
              </li>
            ))
          ) : (
            <p>No movies in the watchlist</p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Watchlist;
