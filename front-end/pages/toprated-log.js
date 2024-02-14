import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import Link from 'next/link';
import '../styles/globalstyles.css';
import { FaSearch } from 'react-icons/fa';

const SearchResultsPage = () => {
  const router = useRouter();
  const [topRatedMovies, setTopRatedMovies] = useState([]);

  useEffect(() => {
    const fetchTopRatedMovies = async () => {
      try {
        const response = await axios.get('http://localhost:9876/ntuaflix_api/toprated');
        setTopRatedMovies(response.data.data);
      } catch (error) {
        console.error('Error fetching top rated movies:', error);
      }
    };

    fetchTopRatedMovies();
  }, []);
  
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
    router.push('/homepagewhenloggedin2');
  };
  
  const handleLogout = async () => {
    try {
        await axios.get('http://localhost:9876/ntuaflix_api/logout');
        localStorage.removeItem(token);
        router.push('/new');
    } catch (error) {
        console.error('Logout failed:', error);
        // Handle any error appropriately
    }
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
          <Link href="/login" style={{ textDecoration: 'none' }}>
            <div className="login-button">Watchlist</div>
          </Link>
          <div className="login-button" onClick={handleLogout}>Logout</div>
        </div>     
      </div>
      <div>
        <h2 style={{ textAlign: 'center', fontWeight: 'normal' }}>Top 10 Rated Movies</h2>
        <ul style={{ listStyleType: 'none', padding: 0, display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          {topRatedMovies.map((movie) => (
            <li key={movie.titleID} style={{ width: '220px', margin: '10px' }}>
              <div className="movie-container" onClick={() => handleMovieClick(movie.titleID)}>
                <div className="movie-title">{movie.originalTitle}</div>
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
                <p>Rating: {movie.averageRating}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <style jsx>{`
        .movie-container {
          width: 215px;
          height: 370px; /* Adjust height as needed */
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

export default SearchResultsPage;