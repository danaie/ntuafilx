//Liked movies page 

/*Info: accesible from home page when user logged in */



import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FaUser, FaSearch } from 'react-icons/fa'; // Import FaSearch icon
import '../styles/globalstyles.css'; // Assuming Tailwind CSS is included here

const liked_movies = () => {
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
      <div className="header" style={{ backgroundColor: '#add8e6', padding: '1rem', width: '100%', margin: '0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link href="/homepage" style={{ textDecoration: 'none', flex: '1' }}>
          <h1 className="title" style={{ margin: '0', fontSize: '1.5rem' }}>Ntuaflix</h1>
        </Link>
        <div className="search-bar" style={{ flex: '2', display: 'flex', alignItems: 'center' }}>
          <input type="text" placeholder="Search for movies: title, category, actor, or genre" style={{ width: '100%', padding: '0.5rem', marginRight: '1rem' }} />
          <button className="btn btn-primary" style={{ width: 'auto', display: 'flex', alignItems: 'center' }}>
            <FaSearch style={{ marginRight: '5px' }} /> Search
          </button>
        </div>
        <div className="user-actions" style={{ display: 'flex', alignItems: 'center', flex: '1', justifyContent: 'flex-end' }}>
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

export default liked_movies;