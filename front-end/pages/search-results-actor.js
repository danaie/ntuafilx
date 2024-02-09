import React, { useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

const SearchResultsPage = () => {
  const router = useRouter();
  const { searchResults } = router.query;

  const handleMovieClick = async (nameID) => {
    try {
      let response;
      response = await axios.get(`http://localhost:9876/ntuaflix_api/name/${nameID}`);
      console.log('Movie data response:', response.data);
      //setMovieDetailsResults(response.data.data);
      router.push({
        pathname: '/actor-details2',
        query: { nameID: nameID }, // Pass titleID as a query parameter
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
            <li key={movie.basicsID} onClick={() => handleMovieClick(movie.basicsID)}>
              {movie.basicsID && <span>{movie.primaryName}</span>}
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