import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router'; // Import useRouter from next/router

const Search = () => {
  const [searchType, setSearchType] = useState('title');
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const router = useRouter(); // Use useRouter hook from next/router

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
          query: { searchResults: JSON.stringify(response.data.data) }, // Pass searchResults as a query parameter
        });
      }
      else if (searchType === 'actor') {
        response = await axios.get('http://localhost:9876/ntuaflix_api/searchnames', {
          params: { namePart: searchQuery },
        });
        console.log('Search response:', response.data);
        setSearchResults(response.data.data);
        router.push({
          pathname: '/search-results-actor',
          query: { searchResults: JSON.stringify(response.data.data) }, // Pass searchResults as a query parameter
        });
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
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Enter search query"
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default Search;
