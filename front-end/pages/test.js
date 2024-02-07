import React, { useState } from 'react';
import axios from 'axios';

const Search = () => {
  const [searchType, setSearchType] = useState('title');
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
        response = await axios.get('http://localhost:9876/ntuaflix_api/searchtitle', {
          params: { titlePart: searchQuery },
        });
      } else if (searchType === 'genre') {
        // Update this part as needed
        response = await axios.get('/api/searchgenre', {
          params: { genre: searchQuery },
        });
      } else if (searchType === 'actor') {
        // Update this part as needed
        response = await axios.get('/api/searchactor', {
          params: { actor: searchQuery },
        });
      }
      setSearchResults(response.data);
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
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <div>
        {Array.isArray(searchResults) && searchResults.map((result) => (
          <div key={result.originalTitle}>{result.originalTitle}</div>
        ))}
      </div>
    </div>
  );
};

export default Search;
