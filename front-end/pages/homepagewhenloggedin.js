
//search: 
// http://localhost:3000/homepagewhenloggedin

// components/HomeLoggedIn.js

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FaUser } from 'react-icons/fa';
import axios from 'axios'; // for API requests
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

  return (
    <div className="home-container">
      <div className="header" style={{ backgroundColor: '#add8e6', padding: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link href="/homepage" style={{ textDecoration: 'none' }}>
          <h1 className="title">Ntuaflix</h1>
        </Link>
        <div className="search-bar">
          <input type="text" placeholder="Search for movies: title, category, actor, or genre" />
          <button className="btn btn-primary">Search</button>
        </div>
        <div className="user-actions" style={{ display: 'flex', alignItems: 'center' }}>
          {/* Display the username instead of "Profile" */}
          <span style={{ marginRight: '10px', fontWeight: 'bold' }}>{username}</span>
          <button className="btn btn-primary" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
      <div className="main-content">
        {/* Other main content for logged-in users goes here */}
      </div>
    </div>
  );
};

export default HomeLoggedIn;
