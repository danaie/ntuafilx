import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router'; // Import useRouter from next/router

const Search = () => {
  const [searchType, setSearchType] = useState('title');
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [qgenre, setQGenre] = useState(''); // New state variable for genre field 1
  const [minrating, setMinRating] = useState(''); // New state variable for genre field 2
  const [yrFrom, setYrFrom] = useState('');
  const [yrTo, setYrTo] = useState('');
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
      else if (searchType === 'genre') {
        // Check if required fields are filled
        if (qgenre && minrating) {
          // Optional fields
          const queryParams = {};
          if (yrFrom) queryParams.yrFrom = yrFrom;
          if (yrTo) queryParams.yrTo = yrTo;
  
          response = await axios.get('http://localhost:9876/ntuaflix_api/bygenres', {
            params: { qgenre, minrating, ...queryParams },
          });
          console.log('Search response:', response.data);
          setSearchResults(response.data.data);
          router.push({
            pathname: '/search-genre',
            query: {
              qgenre,
              minrating,
              ...queryParams
            },
          });
        } else {
          console.log('Please fill out required fields: Genre and Minimum Rating');
        }
      }
    } catch (error) {
      console.error('Error searching:', error.message);
    }
  };
  
  return (
    <div>
      {searchType === "genre" ? (
        <form onSubmit={handleSearch}>
          <div>
            <label htmlFor="qgenre">Genre:</label>
            <input
              type="text"
              id="qgenre"
              value={qgenre}
              onChange={(e) => setQGenre(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="minrating">Minimum Rating:</label>
            <input
              type="number"
              id="minrating"
              value={minrating}
              onChange={(e) => setMinRating(e.target.value)}
              min="0"
              max="10"
              step="0.1"
              required
            />
          </div>
          <div>
            <label htmlFor="yrFrom">Year From:</label>
            <input
              type="number"
              id="yrFrom"
              value={yrFrom}
              onChange={(e) => setYrFrom(e.target.value)}
              min="1900"
              max="2024"
            />
          </div>
          <div>
            <label htmlFor="yrTo">Year To:</label>
            <input
              type="number"
              id="yrTo"
              value={yrTo}
              onChange={(e) => setYrTo(e.target.value)}
              min="1900"
              max="2024"
            />
          </div>
          <button type="submit">Search</button>
        </form>
      ) : (
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
      )}
      <div>
        {searchResults.map((result) => (
          <div key={result.id}>{result.title}</div>
        ))}
      </div>
    </div>
  );
};

export default Search;