//mono to search bar
import { useState } from 'react';
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
        response = await axios.get('http://localhost:9876/ntuaflix_api/searchtitle', {
          params: { titlePart: searchQuery }, // Use 'titlepart' instead of 'titlePart'
        });
        setSearchResults(response.data);
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
      <div>
    {searchResults.map((result) => (
    <div key={result.id}>{result.title}</div>
    ))}
    </div>
    </div>
  );
};

export default Search;
