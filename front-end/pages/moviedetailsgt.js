// Import necessary modules
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FaUser, FaSearch } from 'react-icons/fa';
import axios from 'axios'; // Api requests
import '../styles/globalstyles.css';

// MovieDetails component
const MovieDetailsGT = () => {
  const [loggedIn, setLoggedIn] = useState(true);
  const [username, setUsername] = useState('');
  const [movieDetails, setMovieDetails] = useState(null);
  const router = useRouter();

  // Fetch username on component mount
  useEffect(() => {
    // API call for username
    axios.get('/api/getUsername')
      .then(response => {
        setUsername(response.data.username);
      })
      .catch(error => {
        console.error('Error fetching username:', error);
      });

    // Fetch movie details based on router query (assuming titleID is passed in the query)
    const { titleID } = router.query;
    if (titleID) {
      // API call to fetch movie details
      axios.get(`http://localhost:9876/ntuaflix_api/title/${titleID}`)
        .then(response => {
          setMovieDetails(response.data); // Assuming the response is the movie details
          console.log('Movie Details:', response.data);
        })
        .catch(error => {
          console.error('Error fetching movie details:', error);
        });
    }
  }, [router.query]);

  // Logout functionality
  const handleLogout = () => {
    setLoggedIn(false);
    router.push('/searchresults');
  };

  // Handle profile button click
  const handleProfileClick = () => {
    router.push('/profile');
  };

  return (
    <div className="home-container">
      {/* Header Section */}
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
          <button className="btn btn-secondary profile-button" onClick={handleProfileClick}>
            <FaUser style={{ marginRight: '5px' }} /> Profile
          </button>
          <button className="btn btn-primary" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>

      {/* Movie Details Section */}
      <div className="movie-details">
        {movieDetails ? (
          <>
            <h2>{movieDetails.originalTitle}</h2>
            {/* Display other movie details here */}
          </>
        ) : (
          <p>Loading movie details...</p>
        )}
      </div>
    </div>
  );
};

export default MovieDetailsGT;
