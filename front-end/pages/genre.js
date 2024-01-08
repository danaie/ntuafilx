/* an patisoume sto movie details to genre
 edw tha epistrafoun oi tainies tou genre pou epilexthike
 kai tha ginoun return kai oi top 10 rated movies tou genre*/
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { fetchData } from './api.js';
import '../styles/globalstyles.css';

const GenrePage = () => {
    const router = useRouter();
    const { genreTitle } = router.query;
    const [topRatedMovies, setTopMovies] = useState([]);
    const [resultsWithPosters, setResultsWithPosters] = useState([]);
  
    useEffect(() => {
      const fetchTopMovies = async () => {
        try {
          const response = await fetchData(`/topratedmovies/${genreTitle}`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          });
  
          const data = await response.json();
          setTopMovies(data);
        } catch (error) {
          console.error(`Error fetching top movies for genre ${genreTitle}:`, error);
        }
      };
  
      const fetchAllMovies = async () => {
        try {
          const response = await fetchData(`/searchgenre/${genreTitle}`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          });
  
          const data = await response.json();
          fetchPosters(data);
          setResultsWithPosters(data);
        } catch (error) {
          console.error(`Error fetching all movies for genre ${genreTitle}:`, error);
        }
      };
  
      if (genreTitle) {
        fetchTopMovies();
        fetchAllMovies();
      }
    }, [genreTitle]);

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
          <ul className="book-list">
            {resultsWithPosters.map((item, index) => (
            <div className="container">
              <li key={index}>
                <h3>{item.title}</h3>
                <img src={item.titlePoster} alt={item.title} />
                <Link to={{ pathname: '/movie-details', state: { movie: item } }}> Show Movie Details </Link>
              </li>
              </div>
            ))}
          </ul>
          {searchResults == categoryRoutes['genre'] && (
            <div className="top-rated-movies">
              <h2>Top 10 Rated Movies of this genre: </h2>
              <ul className="book-list">
                {topRatedMovies.map((item, index) => (
                    <li>
                      <div className="container" key={index}>
                      <h3>{item.title}</h3>
                      <img src= {item.titlePoster} alt={item.title} />
                      <Link to={{ pathname: '/movie-details', state: { movie: item } }}> Show Movie Details </Link>
                      </div>
                    </li>
                ))}
              </ul>
            </div>
          )}
          </div>
      );
    };
    export default GenrePage;