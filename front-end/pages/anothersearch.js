/* i dont remember, but in the end it has some styles i used in the results.js with the booklist in case i forget them*/
import { useState } from 'react';
import Link from 'next/link'

const BookList = () => {
  const [searchTitle, setSearchTitle] = useState('');
  const [searchResults, setSearchResults] = useState([]);

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

      // Update the state with the search results
      setSearchResults(data);
    } catch (error) {
      console.error('Error searching for titles:', error);
    }
  };

  return (
    <div className="home-container">
      <div className="header">
      <Link href="/homepage"  style={{ textDecoration: 'none' }}>
        <h1 className="title">Ntuaflix</h1>
        </Link>
      <div className="search-bar">
        <form onSubmit={handleSearch}>
          <input
            type="text"
            id="search_title"
            placeholder="Search for movies: title, category, actor, or genre"
            value={searchTitle}
            onChange={(e) => setSearchTitle(e.target.value)}
          />
        </form>
        
      </div>
      <div className= "auth-buttons">
        <Link href="/login" style={{ textDecoration: 'none' }}>
          <div className="login-button">Login</div>
        </Link>
        <Link href="/signup" style={{ textDecoration: 'none' }}> 
          <div className="login-button">Sign up</div>
        </Link>
        </div>
      </div>
      <ul className="book-list">
        {searchResults.map((item, index) => (
          <a key={index} href={`http://127.0.0.1:5000/queries/query21/${item.id}`}>
            <div className="container">
              <li>
                <h3>{item.title}</h3>
                <h4>{item.genre}</h4>
                <img src={item.poster} alt={item.title} />
              </li>
            </div>
          </a>
        ))}
      </ul>
      <style jsx>{`
        .book-list {
          list-style-type: none;
          padding: 0;
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          justify-content: flex-start;
        }

        .book-list li {
          text-align: center;
          width: 200px;
          height: 320px;
          margin-right: 20px;
          margin-bottom: 20px;
        }

        .book-list li:last-child {
          margin-right: 0;
        }

        .book-list li h3 {
          margin: 0;
          font-size: 18px;
          cursor: pointer;
        }

        .book-list li img {
          width: 130px;
        }

        .container {
  max-width: 400px;
  margin: 10px;
  padding: 0; /* Set padding to 0 */
  background-color: #f0f0f0; /* White background */
  border-radius: 4px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1); /* Optional: Add a subtle box shadow */
}


        .search-bar {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-bottom: 20px;
        }

        .search-bar form {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .search-bar label {
          margin-bottom: 5px;
        }

        .search-bar input {
          padding: 5px;
          border: 1px solid #ccc;
          border-radius: 4px;
          margin-bottom: 10px;
        }

        .search-bar button {
          background-color: #14D0B2;
          color: white;
          padding: 10px 20px;
          border: none;
          cursor: pointer;
          font-size: 16px;
          border-radius: 4px;
        }
      `}</style>
    </div>
  );
};

export default BookList;

/*      <style jsx global>{`
        body {
          margin: 0;
          padding: 0;
        }
      `}</style>

      <style jsx>{`
      .auth-buttons {
        display: flex;
        align-items: center;
      }
      .auth-buttons .login-button {
        margin-right: 10px;
      }

        .home-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px;
        }

        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
          padding: 20px 0;
          background-color: #E0DFDF;
          font-family: 'Roboto', sans-serif;
        }

        .book-list {
            list-style-type: none;
            padding: 0;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: flex-start;
          }
  
          .book-list li {
            text-align: center;
            width: 200px;
            height: 320px;
            margin-right: 20px;
            margin-bottom: 20px;
          }
  
          .book-list li:last-child {
            margin-right: 0;
          }
  
          .book-list li h3 {
            margin: 0;
            font-size: 18px;
            cursor: pointer;
          }
  
          .book-list li img {
            width: 130px;
          }
  
          .container {
            max-width: 400px;
            margin: 10px;
            padding: 0; /* Set padding to 0 */
            /*background-color: #f0f0f0; /* White background 
            border-radius: 4px;
            box-shadow: 0 0 5px rgba(0, 0, 0, 0.1); /* Optional: Add a subtle box shadow */
       /* }
  
  
        .title {
          font-size: 2.5em;
          color: #333;
        }

        .search-bar {
          display: flex;
          align-items: center;
          margin-bottom: 0px;
        }

        input {
          padding: 12px;
          width: 320px;
          border: 2px solid #61006D;
          border-radius: 5px;
          margin-right: 10px;
          font-size: 14px;
        }
        .main-content {
          text-align: center;
          background-color: #ffffff; /* Set background color to white for the main content */
         /* padding: 20px; /* Add padding to the main content */
         /* border-radius: 5px; /* Add border-radius for a clean look */
       /* }

        button {
          padding: 12px 20px;
          cursor: pointer;
          background-color: #000000;
          color: #ffffff;
          border: none;
          border-radius: 5px;
          font-size: 14px;
          transition: background-color 0.3s ease;
        }

        button:hover {
          background-color: #0056b3;
        }

        .login-button {
          padding: 12px 20px;
          cursor: pointer;
          background-color: #0F4C49;
          color: #ffffff;
          border: none;
          border-radius: 5px;
          text-decoration: none;
          transition: background-color 0.3s ease;
        }

        .login-button:hover {
          background-color: #0056b3;
        }
      `}</style> 
      */ /* edw exw ta styles pou exoun xrisimopoiithei sto results.js gia na min ta xasw se periptwsi pou */