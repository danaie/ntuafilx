import React, { useState, useEffect } from 'react';
import { fetchData } from './api.js';
import { useRouter } from 'next/router';

const MovieDetails = () => {
  const router = useRouter();
  const { titleID } = router.query;
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await fetchData(`http://localhost:9876/ntuaflix_api/title/${titleID}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const data = await response.json();
        setMovieDetails(data.data);
      } catch (error) {
        console.error(`Error fetching movie details for titleID ${titleID}:`, error);
      }
    };

    if (titleID) {
      fetchMovieDetails();
    }
  }, [titleID]);

  if (!movieDetails) {
    return (
      <div className="home-container">
        {/* Other code... */}
      </div>
    );
  }

  return (
    <div className="home-container">
      {/* Other code... */}
    </div>
  );
};

export default MovieDetails;
