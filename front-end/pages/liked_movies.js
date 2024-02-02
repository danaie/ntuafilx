//Liked movies page 

/*Info: accesible from home page when user logged in */



import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaUser, FaSearch } from 'react-icons/fa';
import axios from 'axios';
import '../styles/globalstyles.css';

const LikedMovies = () => {
  const [loggedIn, setLoggedIn] = useState(true);
  const [likedMovies, setLikedMovies] = useState([]);
  const router = useRouter();

  useEffect(() => {
    // Fetch liked movies data from the backend
    axios.get('/api/likedmovies') // Replace with the actual API endpoint for liked movies
      .then(response => {
        setLikedMovies(response.data);
      })
      .catch(error => {
        console.error('Error fetching liked movies:', error);
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
        <h2>Liked Movies</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {likedMovies.map(movie => (
            <div key={movie.titleID} style={{ marginRight: '10px', marginBottom: '20px' }}>
              <img src={movie.image} alt={movie.primaryTitle} style={{ width: '150px', height: '200px' }} />
              <p>{movie.primaryTitle}</p>
            </div>
          ))}
        </div>
        {likedMovies.length === 0 && <p>No liked movies.</p>}
      </div>
    </div>
  );
};

export default LikedMovies;
