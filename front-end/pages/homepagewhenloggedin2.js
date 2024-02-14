
// //search: 
// // http://localhost:3000/homepagewhenloggedin
// // HomeLoggedIn.js
// import { useState, useEffect } from 'react';
// import Link from 'next/link';
// import { FaUser, FaSearch } from 'react-icons/fa';
// import axios from 'axios';
// import '../styles/globalstyles.css';
// import { useRouter } from 'next/router';

// const HomeLoggedIn = () => {
//   const [loggedIn, setLoggedIn] = useState(true);
//   const [username, setUsername] = useState('');
//   const [movies, setMovies] = useState([]);
//   const router = useRouter();

//   useEffect(() => {
//     // Retrieve user ID from the URL parameters
//     const { userID } = router.query;

//     if (userID) {
//       // Fetch watchlist data for the user with the provided userID
//       fetchWatchlist(userID);
//     }
//   }, [router.query]);

//   const handleLogout = () => {
//     setLoggedIn(false);
//     router.push('/new');
//   };

//   const handleProfileClick = () => {
//     router.push('/profile');
//   };

//   const addMovieToWatchlist = async (userID, titleID) => {
//     try {
//       const response = await fetch(`http://localhost:9876/ntuaflix_api/postMovie/${titleID}`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ userID }),
//       });
      
//       if (response.ok) {
//         console.log('Movie added to watchlist successfully');
//         // Optionally, you can perform some action after the movie is added successfully
//       } else {
//         const responseData = await response.json();
//         console.error('Failed to add movie to watchlist:', responseData.error);
//         // Handle error
//       }
//     } catch (error) {
//       console.error('Error adding movie to watchlist:', error);
//       // Handle error
//     }
//   };  
  
//   return (
//     <div className="home-container">
//       <div className="header">
//         <div className="title-container">
//           <Link href="/homepage" as="/">
//             <div className="title">Ntuaflix</div>
//           </Link>
//         </div>
//         <div className="search-bar">
//           <input type="text" placeholder="Search for movies: title, category, actor, or genre" />
//           <button className="btn btn-primary">
//             <FaSearch style={{ marginRight: '5px' }} /> Search
//           </button>
//         </div>
//         <div className="user-actions">
//           <button className="btn btn-secondary profile-button" onClick={handleProfileClick}>
//             <FaUser style={{ marginRight: '5px' }} /> Profile
//           </button>
//           <button className="btn btn-primary" onClick={handleLogout}>
//             Logout
//           </button>
//         </div>
//       </div>

//       <div className="nav-links">
//         <Link href="/watchlist" as="/watchlist">
//           <span className="nav-link">Watchlist</span>
//         </Link>
//       </div>


//       <div className="main-content">
//       <h2>Movies from Backend</h2>
//   {movies && movies.length > 0 ? (
//     <ul className="movie-list">
//       {movies.map(movie => (
//         <li key={movie.id} onClick={() => handleMovieClick(movie.id)}>
//           <div>
//             <p>{movie.originalTitle}</p>
//             <img src={movie.titlePoster} alt={movie.title} />
//             <button onClick={(e) => handleAddToWatchlist(e, movie.id)}>Add to Watchlist</button>
//           </div>
//         </li>
//       ))}
//     </ul>
//   ) : (
//     <p>No movies available</p>
//   )}
// </div>

//       <style jsx>{`
//         .home-container {
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//           padding: 20px;
//         }

//         .header {
//           display: flex;
//           justify-content: space-between;
//           align-items: center;
//           width: 100%;
//           margin-bottom: 20px;
//         }

//         .title-container {
//           font-size: 24px;
//           font-weight: bold;
//         }

//         .search-bar {
//           display: flex;
//           align-items: center;
//         }

//         .search-bar input {
//           margin-right: 10px;
//           padding: 5px;
//         }

//         .user-actions button {
//           margin-left: 10px;
//         }

//         .nav-links {
//           margin-bottom: 20px;
//         }

//         .movie-list {
//           list-style: none;
//           padding: 0;
//         }

//         .movie-list li {
//           cursor: pointer;
//           margin-bottom: 10px;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default HomeLoggedIn;
