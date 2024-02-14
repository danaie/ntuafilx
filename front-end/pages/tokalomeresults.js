/*import { useState } from 'react';
import axios from 'axios';

const Search = () => {
  const [searchType, setSearchType] = useState('title'); // Default to searching by title
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchTypeChange = (e) => {
    setSearchType(e.target.value);
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      let response;
      if (searchType === 'title') {
        response = await axios.get('http://localhost:9876/ntuaflix_api/searchtitles', {
          params: { titlePart: searchQuery },
        });
        console.log('Search response:', response.data); // Add this line to log the response
        setSearchResults(response.data.data); // Update this line
      } 
    } catch (error) {
      console.error('Error searching:', error.message);
    }
  };
  
  return (
    <div>
      <form onSubmit={handleSearch}>
        <select value={searchType} onChange={handleSearchTypeChange}>
          <option value="title">Title</option>
          <option value="genre">Genre</option>
          <option value="actor">Actor</option>
        </select>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)} // Update searchQuery state
          placeholder="Enter search query"
        />
        <button type="submit">Search</button>
      </form>
      <ul>
        {Array.isArray(searchResults) && searchResults.length > 0 ? (
          searchResults.map((movie) => (
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

export default Search;*/
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

const Search = () => {
  const [searchType, setSearchType] = useState('title');
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const router = useRouter();

  const handleSearchTypeChange = (e) => {
    setSearchType(e.target.value);
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      let response;
      if (searchType === 'title') {
        response = await axios.get('http://localhost:9876/ntuaflix_api/searchtitles', {
          params: { titlePart: searchQuery },
        });
        console.log('Search response:', response.data);
        setSearchResults(response.data.data);
        router.push({
          pathname: '/search-results',
          query: { searchResults: JSON.stringify(response.data.data) },
        });
      } 
    } catch (error) {
      console.error('Error searching:', error.message);
    }
  };

  const handleTitleClick = async (titleID) => {
    try {
      const response = await axios.get(`http://localhost:9876/ntuaflix_api/title/${titleID}`);
      console.log('Movie data:', response.data);
      // Handle the fetched movie data as needed (e.g., display details in a modal)
      // You can navigate to a new page with the movie details here
      router.push(`/movie/${titleID}`); // Example: navigating to a movie details page
    } catch (error) {
      console.error('Error fetching movie data:', error.message);
    }
  };
  
  return (
    <div>
      <form onSubmit={handleSearch}>
        <select value={searchType} onChange={handleSearchTypeChange}>
          <option value="title">Title</option>
          <option value="genre">Genre</option>
          <option value="actor">Actor</option>
        </select>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Enter search query"
        />
        <button type="submit">Search</button>
      </form>
      <ul>
        {Array.isArray(searchResults) && searchResults.length > 0 ? (
          searchResults.map((movie) => (
            <li key={movie.titleID}>
              <button onClick={() => handleTitleClick(movie.titleID)}> {/* Button with click handler */}
                {movie.titleID && <span>{movie.originalTitle}</span>}
              </button>
            </li>
          ))
        ) : (
          <p>No movies with this title</p>
        )}
      </ul>
    </div>
  );
};

export default Search;
