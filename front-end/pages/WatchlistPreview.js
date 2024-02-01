import { useState, useEffect } from 'react';
import axios from 'axios';

const WatchlistPreview = () => {
  const [watchlist, setWatchlist] = useState([]);

  useEffect(() => {
    // Fetch watchlist data from the backend
    axios.get('/api/watchlist') // Replace with the actual API endpoint for watchlist
      .then(response => {
        setWatchlist(response.data);
      })
      .catch(error => {
        console.error('Error fetching watchlist:', error);
      });
  }, []);

  return (
    <div>
      <h2>Watchlist</h2>
      <div style={{ display: 'flex', overflowX: 'auto' }}>
        {watchlist.map(movie => (
          <div key={movie.titleID} style={{ marginRight: '10px' }}>
            <img src={movie.image} alt={movie.primaryTitle} style={{ width: '150px', height: '200px' }} />
            <p>{movie.primaryTitle}</p>
          </div>
        ))}
        {watchlist.length === 0 && <p>No movies in watchlist.</p>}
      </div>
    </div>
  );
};

export default WatchlistPreview;
