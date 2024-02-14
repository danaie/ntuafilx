// pages/results.js
import { useRouter } from 'next/router';
import Link from 'next/link';
import { fetchData } from './api';
import React, { useState, useEffect } from 'react';
import '../styles/globalstyles.css';

const ResultsPage = () => {
  const router = useRouter();
  const { searchResults } = router.query;
  const [searchTitle, setSearchTitle] = useState('');
  const [resultsWithPosters, setResultsWithPosters] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [actorresult, setActorresultinfo] = useState([]);
  const [topratedmoviesofactor, setTopRatedMoviesOfActor] = useState([]);
  const [mostrecentmoviesofactor, setmostrecentmovies] = useState([]);
  const [searchCategory, setSearchCategory] = useState(''); 
  
  const categoryRoutes = {
    title: 'http://localhost:9876/ntuaflix_api/searchtitle',
    actor: '/searchname',
    genre: '/searchgenre',
    releaseYear: '/searchrelyear',
  };

  useEffect(() => {
    const fetchDataForResultPage = async () => {
      try {
        const apiRoute = getApiRoute(searchCategory); // Use searchCategory instead of searchResults
  
        const response = await fetchData(apiRoute, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
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
      } catch (error) {
        console.error(`Error fetching data for ${searchCategory}:`, error);
      }
    };
  
    if (searchCategory) {
      fetchDataForResultPage();
    }
  }, [searchCategory]);

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
        body: JSON.stringify({
          titlePart: searchCategory === 'title' ? searchTerm : '', // Include titlePart only for title search
          namePart: searchCategory === 'actor' ? searchTerm : '', // Include namePart only for actor search
        }),
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
        query: { searchResults: data, searchCategory }, // Pass searchCategory in the query
      });
    } catch (error) {
      console.error(`Error searching for ${searchCategory}s:`, error);
    }
  };

  const getApiRoute = (searchCategory) => {
    const categoryRoutes = {
      title: '/searchtitle',
      actor: '/searchname',
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
      const response = await fetchData(`/title/${titleID}`, {
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
            <Link href="/movie-details/[titleID]" as={`/movie-details/${item.titleID}`}> Show Movie Details </Link>
          </li>
          </div>
        ))}
      </ul>
      {searchCategory === categoryRoutes['genre'] && (
        <div className="top-rated-movies">
          <h2>Top 10 Rated Movies</h2>
          <ul className="book-list">
            {topRatedMovies.map((item, index) => (
                <li>
                  <div className="container" key={index}>
                  <h3>{item.title}</h3>
                  <img src= {item.titlePoster} alt={item.title} />
                  <Link href="/movie-details" style={{ textDecoration: 'none' }}> Show Movie Details </Link>
                  </div>
                </li>
            ))}
          </ul>
        </div>
      )}
      {searchCategory == categoryRoutes['actor'] && (
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
                  <Link href="/movie-details" style={{ textDecoration: 'none' }}>Show Movie Details </Link>
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
                  <Link href="/movie-details" style={{ textDecoration: 'none' }}> Show Movie Details </Link>
                  </div>
                </li>
            ))}
          </ul>
        )}
      {resultsWithPosters.length === 0 && topRatedMovies.length === 0 && (
        <div>No results found.</div>
      )}
    </div>
  );
};

export default ResultsPage;
