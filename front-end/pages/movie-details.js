/* here will be the details of the movie that is selected through 'show movie details' */
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchData } from './api.js';
import '../styles/globalstyles.css';

const MovieDetails = () => {
  const { titleID } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await fetchData(`/title/${titleID}`, { /*here is the api route i will use */
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const data = await response.json();
        setMovieDetails(data);
      } catch (error) {
        console.error(`Error fetching movie details for titleID ${titleID}:`, error);
      }
    };

    fetchMovieDetails();
  }, [titleID]);

  if (!movieDetails) {
    // Loading state or error handling
    return <div>Loading...</div>;
  } /* not sure if it is needed*/

  return (
    <div className="home-container">
      <div className="header">
        <Link href="/homepage" style={{ textDecoration: 'none' }}>
          <h1 className="title">Ntuaflix</h1>
        </Link>
        <div className="search-bar">
          <form onSubmit={handleSearch}>
            <input
              type="text"
              id="search_title"
              placeholder="Search for movies: title, category, actor, or genre"
              value={searchTitle}
              onChange={(e) => setSearchTitle(e.target.value)}
            />
            <button type="submit">Search</button>
          </form>
        </div>
        <div className="auth-buttons">
          <Link href="/login" style={{ textDecoration: 'none' }}>
            <div className="login-button">Login</div>
          </Link>
          <Link href="/signup" style={{ textDecoration: 'none' }}>
            <div className="login-button">Sign up</div>
          </Link>
        </div>
        </div>
    <div className="details-container">
      <h2>{movieDetails.originalTitle}</h2>
      <img src={movieDetails.titlePoster} alt={movieDetails.originalTitle} />
      <div className="details-section">
        <h3>Basic Information</h3>
        <p>Type: {movieDetails.type}</p>
        <p>Start Year: {movieDetails.startYear}</p>
        <p>End Year: {movieDetails.endYear}</p>
      </div>
      <div className="details-section">
        <h3>Genres</h3>
        <ul>
          {movieDetails.genres.map((genre) => (
            <li key={genre.genreTitle}>
            <Link href={`/genre/${genre.genreTitle}`}>
              {genre.genreTitle}
            </Link>
          </li>
        ))}
        </ul>
      </div>
      <div className="details-section">
        <h3>Title Akas</h3>
        <ul>
          {movieDetails.titleAkas.map((aka) => (
            <li key={aka.akaTitle}>{aka.akaTitle}</li>
          ))}
        </ul>
      </div>
      <div className="details-section">
        <h3>Principals</h3>
        <ul>
          {movieDetails.principals.map((principal) => (
            <li key={principal.nameID}>
              {principal.name} ({principal.category})
            </li>
          ))}
        </ul>
      </div>
      <div className="details-section">
        <h3>Rating</h3>
        <p>Average Rating: {movieDetails.rating.avRating}</p>
        <p>Number of Votes: {movieDetails.rating.nVotes}</p>
      </div>
      </div>
      <style jsx>{`
        .details-container {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh; /* 100% of the viewport height */
        }
          
        .big-rectangle {
            max-width: 800px;
            padding: 20px;
            border: 2px solid #333;
            border-radius: 10px;
            background-color: #f0f0f0;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
        }
          
        .details-section {
            margin-top: 20px;
        }
          
        .details-section h3 {
            color: #333;
            font-size: 1.5rem;
            margin-bottom: 10px;
        }   
      `}</style>
    </div>
  );
};

export default MovieDetails;
