import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

const MovieDetails2 = () => {
  const router = useRouter();
  const { titleID } = router.query;
  const [movieData, setMovieData] = useState(null);

  useEffect(() => {
    if (titleID) {
      fetchMovieDetails(titleID);
    }
  }, [titleID]);

  const fetchMovieDetails = async (titleID) => {
    try {
      const response = await axios.get(`http://localhost:9876/ntuaflix_api/title/${titleID}`);
      console.log('Movie data response:', response.data);
      // Extract movie data from the response
      const movieDetails = response.data.TitleObject;
      setMovieData(movieDetails);
    } catch (error) {
      console.error('Error fetching movie data:', error);
    }
  };

  return (
    <div>
      <h2>Movie Details</h2>
      {movieData ? (
        <div>
          {Object.entries(movieData).map(([key, value]) => (
            <div key={key}>
              <h3>{key}</h3>
              <ul>
                {Array.isArray(value) ? (
                  value.map((item, index) => (
                    <li key={index}>
                      {/* Display array items */}
                      {Object.entries(item).map(([subKey, subValue]) => (
                        <div key={subKey}>
                          <strong>{subKey}: </strong>
                          {subValue}
                        </div>
                      ))}
                    </li>
                  ))
                ) : (
                  <li>
                    {/* Display object properties */}
                    {Object.entries(value).map(([subKey, subValue]) => (
                      <div key={subKey}>
                        <strong>{subKey}: </strong>
                        {subValue}
                      </div>
                    ))}
                  </li>
                )}
              </ul>
            </div>
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default MovieDetails2;
