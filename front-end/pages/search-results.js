/*import React from 'react';
import { useRouter } from 'next/router';

const SearchResultsPage = () => {
  const router = useRouter();
  const { searchResults } = router.query;

  const results = searchResults ? JSON.parse(searchResults) : [];

  return (
    <div>
      <h2>Search Results</h2>
      <ul>
        {results.length > 0 ? (
          results.map((movie) => (
            <li key={movie.titleID}>
              {movie.titleID && <span>{movie.originalTitle}</span>}
            </li>
          ))
        ) : (
          <p>No movies with this title</p>
        )}
      </ul>
    </div>
  );
};

export default SearchResultsPage;*/

import React, { useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

const SearchResultsPage = () => {
  const router = useRouter();
  const { searchResults } = router.query;

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

  const results = searchResults ? JSON.parse(searchResults) : [];

  return (
    <div>
      <h2>Search Results</h2>
      <ul>
        {results.length > 0 ? (
          results.map((movie) => (
            <li key={movie.titleID} onClick={() => handleMovieClick(movie.titleID)}>
              {movie.titleID && <span>{movie.originalTitle}</span>}
            </li>
          ))
        ) : (
          <p>No movies with this title</p>
        )}
      </ul>
    </div>
  );
};

export default SearchResultsPage;