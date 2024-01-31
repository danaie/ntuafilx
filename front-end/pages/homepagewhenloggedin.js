
//search: 
// http://localhost:3000/homepagewhenloggedin


import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FaUser, FaSearch } from 'react-icons/fa';
import axios from 'axios'; //Api requests
import '../styles/globalstyles.css';

const HomeLoggedIn = () => {
  const [loggedIn, setLoggedIn] = useState(true);
  const [username, setUsername] = useState('');
  const router = useRouter();


  useEffect(() => {
    //API call for username 
    axios.get('/api/getUsername') // Replace with actual API endpoint for username
      .then(response => {
        setUsername(response.data.username);
      })
      .catch(error => {
        console.error('Error fetching username:', error);
      });
  }, []); 

  const handleLogout = () => {
    // Placeholder for logout functionality
    // You should implement your actual logout logic here
    setLoggedIn(false);

    // Navigate to /searchresults after logout
    router.push('/searchresults');
  };

  const handleProfileClick = () => {
    // Handle profile button click
    router.push('/profile');
  };

  return (
    <div className="home-container">
      <div className="header" style={{ backgroundColor: '#add8e6', padding: '1rem', width: '100%', margin: '0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div className="title-container" style={{ flex: '1' }}>
          <Link href="/homepage" as="/">
            <h1 className="title" style={{ margin: '0', fontSize: '1.5rem', textDecoration: 'none', color: 'white' }}>Ntuaflix</h1>
          </Link>
        </div>
        <div className="search-bar" style={{ flex: '2', display: 'flex', alignItems: 'center' }}>
          <input type="text" placeholder="Search for movies: title, category, actor, or genre" style={{ width: '100%', padding: '0.5rem', marginRight: '1rem' }} />
          <button className="btn btn-primary" style={{ width: 'auto', display: 'flex', alignItems: 'center' }}>
            <FaSearch style={{ marginRight: '5px' }} /> Search
          </button>
        </div>
        <div className="user-actions" style={{ display: 'flex', alignItems: 'center', flex: '1', justifyContent: 'flex-end' }}>
          {/* Replace the Link component with a button element */}
          <button className="btn btn-secondary profile-button" onClick={handleProfileClick}>
            <FaUser style={{ marginRight: '5px' }} /> Profile
          </button>
          <button className="btn btn-primary" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
      {/* Navigation Links */}
      <div className="nav-links" style={{ padding: '1rem', backgroundColor: '#ffffff' }}>
        <Link href="/watchlist" as="/watchlist" style={{ textDecoration: 'none', marginBottom: '1rem', display: 'block' }}>
          <span className="nav-link">Watchlist</span>
        </Link>
        <Link href="/liked_movies" as="/liked_movies" style={{ textDecoration: 'none', display: 'block' }}>
          <span className="nav-link">Liked Movies</span>
        </Link>
      </div>
      <div className="main-content">
        {/* Other main content for logged-in users goes here */}
      </div>
    </div>
  );
};

export default HomeLoggedIn;
