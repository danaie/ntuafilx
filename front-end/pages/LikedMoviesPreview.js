import { useState, useEffect } from 'react';
import axios from 'axios';

const LikedMoviesPreview = () => {
  const [likedMovies, setLikedMovies] = useState([]);

  useEffect(() => {
    // Fetch liked movies data from the backend
    axios.get('/api/likedMovies') // Replace with the actual API endpoint for liked movies
      .then(response => {
        setLikedMovies(response.data);
      })
      .catch(error => {
        console.error('Error fetching liked movies:', error);
      });
  }, []);

  return (
    <div>
      <h2>Liked Movies</h2>
      <div style={{ display: 'flex', overflowX: 'auto' }}>
        {likedMovies.map(movie => (
          <div key={movie.titleID} style={{ marginRight: '10px' }}>
            <img src={movie.image} alt={movie.primaryTitle} style={{ width: '150px', height: '200px' }} />
            <p>{movie.primaryTitle}</p>
          </div>
        ))}
        {likedMovies.length === 0 && <p>No liked movies.</p>}
      </div>
    </div>
  );
};

export default LikedMoviesPreview;
