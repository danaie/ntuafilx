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
  const [minRating, setMinRating] = useState('');
  const [fromYear, setFromYear] = useState('');
  const [toYear, setToYear] = useState('');
  const [resultsWithPosters, setResultsWithPosters] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [actorresult, setActorResultInfo] = useState([]);
  const [topRatedMoviesOfActor, setTopRatedMoviesOfActor] = useState([]);
  const [mostRecentMoviesOfActor, setMostRecentMovies] = useState([]);
  

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
      let apiRoute = '';
      let params = {};

      if (searchCategory === 'title') {
        apiRoute = '/searchtitle';
        params = {
          titlepart: searchTerm,
        };
      } else if (searchCategory === 'actor') {
        apiRoute = '/searchname';
        params = {
          namepart: searchTerm,
        };
      } else if (searchCategory === 'genre') {
        apiRoute = '/bygenre'; // Update the API route here
        params = {
          qgenre: searchTerm, // Assuming you want to use the searchTerm for the genre
          minrating: minRating, // Use minRating here
          yrFrom: fromYear, // Use fromYear here
          toyrTo: toYear, // Use toYear here
        };
      }

      const response = await fetchData(apiRoute, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(params),
      });

      const data = await response.json();

      // Rest of your code...
    } catch (error) {
      console.error(`Error searching for ${searchCategory}s:`, error);
    }
  };
  

  const getApiRoute = (searchCategory) => {
    // Map search categories to corresponding API routes
    const categoryRoutes = {
      title: '/searchtitle', //returns the movies related to the title we searched
      actor: '/searchname', //returns the movies the contributor has played and also the top 10 rated, the most recent and the person
      genre: '/searchgenre', /*returns the movies of the genre we search and maybe the top 10 rated too?? otherwise we will have a different route for the top 10 rated i will make the different routes edition but if i want to keep the one then i will just keep it as it is*/
  };

    return categoryRoutes[searchCategory] || '/searchtitle'; // Default to 'searchtitle' if category is not found
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
            </select>   
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
