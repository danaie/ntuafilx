// pages/index.js
/*ousiastika edw ylopoieitai to search bar kai pairnei ti thesi tou homepage */
import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { fetchData } from './api';
import '../styles/globalstyles.css';

const BookList = () => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState('');
  const [searchCategory, setSearchCategory] = useState('title'); // Default search category
  const [resultsWithPosters, setResultsWithPosters] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [actorresult, setActorResultInfo] = useState([]);
  const [topRatedMoviesOfActor, setTopRatedMoviesOfActor] = useState([]);
  const [mostRecentMoviesOfActor, setMostRecentMovies] = useState([]);

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

  const fetchActorResult = async () => {
    try {
      const response = await fetchData('/actorinfo', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();

      setActorResultInfo(data);
    } catch (error) {
      console.error('Error fetching actor info:', error);
    }
  };

  const fetchTopRatedMoviesOfActor = async () => {
    try {
      const response = await fetchData('/topratedofactor', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();

      setTopRatedMoviesOfActor(data);
    } catch (error) {
      console.error('Error fetching top rated movies of actor:', error);
    }
  };

  const fetchMostRecentMoviesOfActor = async () => {
    try {
      const response = await fetchData('/mostrecentactor', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();

      setMostRecentMovies(data);
    } catch (error) {
      console.error('Error fetching recent movies:', error);
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
        fetchActorResult();
        fetchTopRatedMoviesOfActor();
        fetchMostRecentMoviesOfActor();
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
    // Map search categories to corresponding API routes
    const categoryRoutes = {
      title: '/searchtitle', //returns the movies related to the title we searched
      actor: '/searchname', //returns the movies the contributor has played and also the top 10 rated, the most recent and the person
      genre: '/searchgenre', /*returns the movies of the genre we search and maybe the top 10 rated too?? otherwise we will have a different route for the top 10 rated
      i will make the different routes edition but if i want to keep the one then i will just keep it as it is
      */
      releaseYear: '/searchrelyear', //returns the movies that were released the year we searched
    };

    return categoryRoutes[searchCategory] || '/searchtitle'; // Default to 'searchtitle' if category is not found
  };
  
  

  return (
    <div className="home-container">
      <div className="header">
        <Link href="/searchresults" style={{ textDecoration: 'none' }}>
          <h1 className="title">Ntuaflix</h1>
        </Link>
        <div className="search-bar">
          <form onSubmit={handleSearch}>
            <input
              type="text"
              id="search_term"
              placeholder="Search for movies: title, category, actor, or genre"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            /> 
            <select
              value={searchCategory}
              onChange={(e) => setSearchCategory(e.target.value)}
            >
              <option value="title">Title</option>
              <option value="actor">Actor</option>
              <option value="genre">Genre</option>
              <option value="releaseYear">Release</option>
            </select>   
            <Link href="/results" style={{ textDecoration: 'none' }}>
            <button type="submit">Search</button>
            </Link>
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
      <p className="tagline">Immerse Yourself in Cinema. Search, Explore, Enjoy with Ntuaflix!</p>
      <div className="additional-content">
        <img src="/images/myImage.jpg" className="additional-image" />
      </div>
      <style jsx>{`
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

export default BookList;

/* ayto mpainei an thelisoume na dialeksoume ti anazitisi tha kanoume kai tha to valoyme sto form, akrivws panw apo to submit
          */