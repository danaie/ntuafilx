import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import Link from 'next/link';
import '../styles/globalstyles.css';
import { FaSearch } from 'react-icons/fa';

const SearchResultsPage = () => {
  const router = useRouter();
  const { qgenre, minrating, yrFrom, yrTo } = router.query; // Destructure query parameters directly
  const [errormessage, setErrorMessage] = useState('');

  const [movieData, setMovieData] = useState(null);

  const [watchlist, setWatchlist] = useState([]);

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

  const isInWatchlist = (titleID) => {
    return watchlist.some(movie => movie.titleID === titleID);
  };
 

  const addToWatchlist = async (titleID) => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        console.error('User not authenticated. Please log in.');
        return;
      }
 
      const response = await axios.post(
        `http://localhost:9876/ntuaflix_api/watchlist/${titleID}`,
        null,
        {
          headers: {
            'X-OBSERVATORY-AUTH': token,
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
      const token = localStorage.getItem('token'); // Retrieve access token from localStorage
      if (!token) {
        console.error('User not authenticated. Please log in.');
        return;
      }
 
      await axios.delete(`http://localhost:9876/ntuaflix_api/watchlist/${titleID}`, {
        headers: {
          'Content-Type': 'application/json',
          'X-OBSERVATORY-AUTH': token, // Include access token in the request headers
        },
      });
 
      // Filter out the removed movie from the watchlist state
      setWatchlist(prevWatchlist => prevWatchlist.filter(movie => movie.titleID !== titleID));
 
      // Print success message
      console.log('Movie removed successfully.');
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

  const handleSearchClick = () => {
    router.push('/homepagewhenloggedin2');
  };
  // Fetch movie data based on query parameters
  useEffect(() => {
    const fetchMoviesByGenre = async () => {
      try {
        let response = await axios.get('http://localhost:9876/ntuaflix_api/bygenres', {
          params: { qgenre, minrating, yrFrom, yrTo },
        });
        console.log('Search response:', response.data);
        setMovieData(response.data.data);

        if (response.data.data.length === 0) {
          setErrorMessage('No movies were found.');
        } else {
          setErrorMessage('');
        }
      } catch (error) {
        console.error('Error fetching movies by genre:', error);
      }
    };

    if (qgenre && minrating) {
      fetchMoviesByGenre();
    }
  }, [qgenre, minrating, yrFrom, yrTo]);

  return (
    <div className="home-container">
        <div className="header">
        <div className="search-icon" onClick={handleSearchClick}>
        <FaSearch style={{ fontSize: '26px' }} /> {/* Use the imported search icon component */}
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
        Search Results for <span style={{ fontWeight: 'bold' }}>'{qgenre}'</span></h2>
      {errormessage && <p>{errormessage}</p>}
      <ul style={{ listStyleType: 'none', padding: 0, display: 'flex', flexWrap: 'wrap' }}>
      {movieData && movieData.length > 0 ? (
  movieData.map((movie) => (
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
      <button
  onClick={(e) => {
    e.stopPropagation();
    isInWatchlist(movie.titleID) ? removeFromWatchlist(movie.titleID) : addToWatchlist(movie.titleID);
  }}
  className="add-to-watchlist-button"
  style={{ margin: '0 auto', width: 'fit-content' }}
>
  {isInWatchlist(movie.titleID) ? 'Remove from Watchlist' : 'Add to Watchlist'}
</button>


    </div>
  </li>
  ))
) : (
  <p style={{ textAlign: 'center' }}>No movies found </p>
)}
</ul>
      <style jsx>{`
      .add-to-watchlist-button {
        background-color: grey;
        color: white;
        border: 1px solid grey;
        padding: 5px 10px;
        cursor: pointer;
      }
     
      .add-to-watchlist-button {
        align-self: flex-end;
        margin-top: auto;
        margin-right: 40px; /* Push the button to the bottom */
      }
     
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
    </div>
  )
};
export default SearchResultsPage;
