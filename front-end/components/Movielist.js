// components/BookList.js
import { useState } from 'react';
import { useRouter } from 'next/router';

const BookList = () => {
  const router = useRouter();
  const [searchTitle, setSearchTitle] = useState('');

  const handleSearch = async (event) => {
    event.preventDefault();

    try {
      // Make a request to the searchtitle API route
      const response = await fetch('/searchtitle', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ searchTitle }),
      });

      const data = await response.json();

      // Redirect to the search results page and pass search results as query parameter
      router.push({
        pathname: '/searchresults',
        query: { searchResults: JSON.stringify(data) },
      });
    } catch (error) {
      console.error('Error searching for titles:', error);
    }
  };

  return (
    <div>
      <h2>Όλα τα βιβλία</h2>
      <div className="search-bar">
        <form onSubmit={handleSearch}>
          <label htmlFor="search_title">Τίτλος:</label>
          <input
            type="text"
            id="search_title"
            name="search_title"
            value={searchTitle}
            onChange={(e) => setSearchTitle(e.target.value)}
          />
          <button type="submit">Αναζήτηση</button>
        </form>
      </div>
      {/* Other components or UI elements */}
    </div>
  );
};

export default BookList;