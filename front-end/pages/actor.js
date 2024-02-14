/* edw an patisoume sto movie details
to onoma kapoiou contributor tha emfanistoun
ayta pou emfanizontai otan ton kanoume search */
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { fetchData } from './api.js';
import '../styles/globalstyles.css';

const ActorPage = () => {
    const router = useRouter();
    const { name } = router.query;
    const [actorresult, setActorresultinfo] = useState([]);
    const [topratedmoviesofactor, setTopRatedMoviesOfActor] = useState([]);
    const [mostrecentmoviesofactor, setmostrecentmovies] = useState([]);
    const [resultsWithPosters, setResultsWithPosters] = useState([]);
  
    useEffect(() => {
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
  
      const fetchAllMovies = async () => {
        try {
          const response = await fetchData(`/searchactor/${name}`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          });
  
          const data = await response.json();
          fetchPosters(data);
          setResultsWithPosters(data);
        } catch (error) {
          console.error(`Error fetching all movies for genre ${name}:`, error);
        }
      };
  
      if (genreTitle) {
        fetchactorresult();
        fetchtopratedmoviesofactor();
        fetchmostrecentmoviesofactor();
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
       <ul classname= "book-list">
        {actorresult.map ((item, index) => (
          <li>
            <h3>{item.name}</h3>
            <img src={item.namePoster} alt = {item.name} />
            <Link href={`/actor-details/${item.actorID}`}> <a>Show Actor Details</a></Link>
          </li>
      ))}
      </ul>,
        <ul className="book-list">
            {topratedmoviesofactor.map((item, index) => (
                <li>
                  <div className="container" key={index}>
                  <h3>{item.title}</h3>
                  <img src= {item.titlePoster} alt={item.title} />
                  <Link to={{ pathname: '/movie-details', state: { movie: item } }}> Show Movie Details </Link>
                  </div>
                </li>
            ))}
          </ul>,
          <ul className="book-list">
            {mostrecentmoviesofactor.map((item, index) => (
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
      )
  };
  export default ActorPage;
