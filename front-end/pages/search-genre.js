import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

const SearchResultsPage = () => {
  const router = useRouter();
  const { qgenre, minrating, yrFrom, yrTo } = router.query; // Destructure query parameters directly

  const [movieData, setMovieData] = useState(null);

  const handleMovieClick = async (titleID) => {
    try {
      let response;
      response = await axios.get(`http://localhost:9876/ntuaflix_api/title/${titleID}`);
      console.log('Movie data response:', response.data);
      //setMovieDetailsResults(response.data.data);
      router.push({
        pathname: '/movie-details2',
        query: { titleID: titleID }, // Pass titleID as a query parameter
      });
    } catch (error) {
      console.error('Error fetching movie data:', error);
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
      } catch (error) {
        console.error('Error fetching movies by genre:', error);
      }
    };

    if (qgenre && minrating) {
      fetchMoviesByGenre();
    }
  }, [qgenre, minrating, yrFrom, yrTo]);

  return (
    <div>
      <h2>Search Results</h2>
      <ul>
        {movieData && movieData.length > 0 ? (
          movieData.map((movie) => (
            <li key={movie.titleID} onClick={() => handleMovieClick(movie.titleID)}>
              {movie.originalTitle && <span>{movie.originalTitle}</span>}
            </li>
          ))
        ) : (
          <p>No movies found</p>
        )}
      </ul>
    </div>
  );
};

export default SearchResultsPage;
