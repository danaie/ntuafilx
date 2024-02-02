/* here will be the details of the movie that is selected through 'show movie details' 
diladi otan exoume ta results kapou kai dialeksoume na emfanistoun ta movie details tis ekastote tainias*/

import React, { useState, useEffect } from 'react';
//import { useParams } from 'react-router-dom';
import { fetchData } from './api.js';
import '../styles/globalstyles.css';
import Link from 'next/link';
import { useRouter } from 'next/router';



const MovieDetails = () => {
  const { titleID } = useRouter().query;
  const [movieDetails, setMovieDetails] = useState(null);
    const [searchTitle, setSearchTitle] = useState('');
    const [resultsWithPosters, setResultsWithPosters] = useState([]);
    const [topRatedMovies, setTopRatedMovies] = useState([]);
    const [actorresult, setActorresultinfo] = useState([]);
    const [topratedmoviesofactor, setTopRatedMoviesOfActor] = useState([]);
    const [mostrecentmoviesofactor, setmostrecentmovies] = useState([]);
    const [searchCategory, setSearchCategory] = useState(''); 
    
    const categoryRoutes = {
      title: '/searchtitle',
      actor: '/searchactor',
      genre: '/searchgenre',
      releaseYear: '/searchrelyear',
    };
  
    const fetchTopRatedMovies = async () => {
      try {
        const response = await fetchData('/topratedmovies', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
  
        const data = await response.json();
  
        setTopRatedMovies(data);
      } catch (error) {
        console.error('Error fetching top-rated movies:', error);
      }
    };
  
    const fetchactorresult = async () => {
      try {
        const response = await fetchData('/actorinfo', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        
        const data = await response.json();
  
        setActorresultinfo(data);
      } catch (error) {
        console.error('Error fetching actor indo:', error);
      }
    };
  
    const fetchtopratedmoviesofactor = async() => {
      try {
        const response = await fetchData('/topratedofactor', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
  
        const data = await response.json();
  
        setTopRatedMoviesOfActor(data);
      } catch(error){
        console.error('Error fetching top rated movies of actor:', error);
      }
    };
  
    const fetchmostrecentmoviesofactor = async() => {
      try {
        const response = await fetchData('/mostrecentactor', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
  
        const data = await response.json();
  
        setmostrecentmovies(data);
      } catch(error) {
        console.error('error fetching recent movies:', error);
      }
    };
  
    const handleSearch = async (event) => {
      event.preventDefault();
  
      try {
        const apiRoute = getApiRoute(searchCategory);
  
        const response = await fetchData(apiRoute, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ query: searchTerm }), // Remove this line for GET, but if post to ksanavlepw
        });
  
        const data = await response.json();
  
        if (searchCategory === 'actor') {
          fetchactorresult();
          fetchtopratedmoviesofactor();
          fetchmostrecentmoviesofactor();
        } else if (searchCategory === 'genre') {
          fetchTopRatedMovies(data);
        }
  
        fetchPosters(data);
        setResultsWithPosters(data);
  
        router.push({
          pathname: '/results',
          query: { searchResults: data }, // Consider passing specific properties instead of the entire object
        });
      } catch (error) {
        console.error(`Error searching for ${searchCategory}s:`, error);
      }
    };
  
    const getApiRoute = (searchCategory) => {
      const categoryRoutes = {
        title: '/searchtitle',
        actor: '/searchactor',
        genre: '/searchgenre',
        releaseYear: '/searchrelyear',
      };
  
      return categoryRoutes[searchCategory] || '/searchtitle'; // Default to 'searchtitle' if category is not found
    };
  
    const fetchPosters = async (results) => {
      const resultsWithPosters = [];
  
      for (const item of results) {
        const posterURL = await fetchPoster(item.titleID);
        resultsWithPosters.push({ ...item, titlePoster: posterURL });
      }
  
      setResultsWithPosters(resultsWithPosters);
    };
  
    const fetchPoster = async (titleID) => {
      try {
        const response = await fetch(`/title/${titleID}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
  
        const data = await response.json();
        return data.poster;
      } catch (error) {
        console.error('Error fetching poster for titleID:', titleID, error);
        return '';
      }
    };
    useEffect(() => {
      const fetchMovieDetails = async () => {
        try {
          const response = await fetchData(`/title/${titleID}`, {
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
    
      if (titleID) {
        fetchMovieDetails();
      }
    }, [titleID]);

  if (!movieDetails) {
    // If movieDetails is still null, return a loading state or null
    return     <div className="home-container">
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
    </div>;
  }

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
           //</form> 
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
      <h2>{movieDetails.titleID}</h2>
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
            <Link href={`/genre/${encodeURIComponent(genre.genreTitle)}`}>
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
             <Link href={`/actor/${encodeURIComponent(principal.name)}`}>
               <a>{principal.name} ({principal.category})</a>
             </Link>
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
