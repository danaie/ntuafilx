
//search: 
// http://localhost:3000/homepagewhenloggedin

// components/HomeLoggedIn.js

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FaUser } from 'react-icons/fa';
import '../styles/globalstyles.css'; // Assuming Tailwind CSS is included here

const HomeLoggedIn = () => {
  const [loggedIn, setLoggedIn] = useState(true);
  const router = useRouter();

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
          {/* Add components or links specific to logged-in users */}
          <Link href="/profile" style={{ textDecoration: 'none', marginRight: '10px' }}>
            <button
              className="btn btn-secondary profile-button" // Added a specific class for the profile button
            >
              <FaUser style={{ marginRight: '5px' }} /> Profile
            </button>
          </Link>
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
