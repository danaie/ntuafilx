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
  const handleSearchClick = () => {
    // Navigate to the /new page
    router.push('/homepagewhenloggedin2');
  };

  const handleLogout = async () => {
    try {
        await axios.get('http://localhost:9876/ntuaflix_api/logout');
        localStorage.removeItem('accessToken');
        router.push('/new');
    } catch (error) {
        console.error('Logout failed:', error);
        // Handle any error appropriately
    }
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
        <FaSearch style={{ fontSize: '26px' }} /> 
      </div>
      <div className="logo-container">
        <Link href="/homepagewhenloggedin2" style={{ textDecoration: 'none' }}>
          <h1 className="title">Ntuaflix</h1>
        </Link>
      </div>
      <div className="auth-buttons">
          <Link href="/login" style={{ textDecoration: 'none' }}>
            <div className="login-button">Watchlist</div>
          </Link>
          <div className="login-button" onClick={handleLogout}>
      Logout
    </div>
        </div>    
        </div>
    <div>
    <h2 style={{ textAlign: 'center', fontWeight: 'normal' }}>
        Search Results for <span style={{ fontWeight: 'bold' }}>'{qgenre}'</span>
      </h2>

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
              src={movie.image.replace('{width_variable}', 'w200')} // Adjusted width to fit the box
              alt={movie.originalTitle}
              style={{ width: '200px', height: '88%', objectFit: 'cover' }} // Set the desired width here
            />
          ) : (
            <div>No Image Available</div>
          )}
        </div>
        <button onClick={(e) => { e.stopPropagation(); addToWatchlist(movie.titleID); }} className="add-to-watchlist-button">
    Add to Watchlist
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
        color: white; /* Set text color to black */
        border: 1px solid grey;
        padding: 5px 10px;
        cursor: pointer;
    }
    
    .add-to-watchlist-button:hover {
        background-color: darkgrey; /* Darken color on hover */
        color: white; /* Change text color on hover */
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

/* enallaktiko font gia to add-to-watchlist button:

.add-to-watchlist-button {
        background-color: transparent;
        color: grey;
        border: 1px solid grey;
        padding: 5px 10px;
        cursor: pointer;
      }
      
      .add-to-watchlist-button:hover {
        background-color: grey;
        color: white;
      }
*/