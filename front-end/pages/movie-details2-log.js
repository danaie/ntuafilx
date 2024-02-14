import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import Link from 'next/link'
import '../styles/globalstyles.css';
import { FaSearch } from 'react-icons/fa';

const MovieDetails2 = () => {
  const router = useRouter();
  const { titleID } = router.query;
  const [movieData, setMovieData] = useState(null);

  useEffect(() => {
    if (titleID) {
      fetchMovieDetails(titleID);
    }
  }, [titleID]);

  const fetchMovieDetails = async (titleID) => {
    try {
      const response = await axios.get(`http://localhost:9876/ntuaflix_api/title/${titleID}`);
      console.log('Movie data response:', response.data);
      // Extract movie data from the response
      const movieDetails = response.data.TitleObject;
      setMovieData(movieDetails);
    } catch (error) {
      console.error('Error fetching movie data:', error);
    }
  };
  const handlePrincipalClick = async (basicsID) => {
    try {
      router.push({
        pathname: '/actor-details2-log',
        query: { nameID: basicsID },
      });
    } catch (error) {
      console.error('Error navigating to actor details page:', error);
    }
  };
  const handleLogout = async () => {
    try {
        await axios.get('http://localhost:9876/ntuaflix_api/logout');
        localStorage.removeItem('accessToken');
        router.push('/new');
    } catch (error) {
        console.error('Logout failed:', error);
        // Handle any error appropriately
    }
};

  const handleSearchClick = () => {
    // Navigate to the /new page
    router.push('/homepagewhenloggedin2');
  };
  if (!movieData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="home-container">
      <div className="header">
      <div className="search-icon" onClick={handleSearchClick}>
        <FaSearch style={{ fontSize: '26px' }} /> {/* Use the imported search icon component */}
      </div>
      <div className="logo-container">
        <Link href="/homepagewhenloggedin2" style={{ textDecoration: 'none' }}>
          <h1 className="title">Ntuaflix</h1>
        </Link>
      </div>
      <div className="auth-buttons">
          <Link href="/login" style={{ textDecoration: 'none' }}>
            <div className="login-button">Watchlist</div>
          </Link>
          <div className="login-button" onClick={handleLogout}>
      Logout
    </div>
        </div>     
      </div>
    <div style={{ textAlign: 'center' }}>
    <h2>{movieData.titleInfo && movieData.titleInfo[0].originalTitle}</h2>
    
      {movieData.titleInfo && movieData.titleInfo[0].image && (
        <img
          src={movieData.titleInfo[0].image.replace('{width_variable}', 'w500')}
          alt={movieData.titleInfo[0].originalTitle}
          style={{ width: '200px', height: 'auto', margin: '0 auto' }}
        />
      )}

  <div style={{ textAlign: 'center' }}>
  <div style={{ textAlign: 'center', margin: '10px 20px', marginTop: '0px' }}>
  <p><span style={{ fontWeight: 'bold' }}>Type:</span> {movieData.titleInfo && movieData.titleInfo[0].titleType}</p>
  <p><span style={{ fontWeight: 'bold' }}>Start Year:</span> {movieData.titleInfo && movieData.titleInfo[0].startYear}</p>
  {movieData.titleInfo && movieData.titleInfo[0].endYear && (
    <p style={{ fontWeight: 'bold', margin: '5px 0' }}>End Year: {movieData.titleInfo[0].endYear}</p>
  )}
  
  <div style={{ textAlign: 'center', margin: '10px 0' }}>
    <p><span style={{ fontWeight: 'bold' }}>Genres:</span> {movieData.titleInfo && movieData.titleInfo[0].genres.split(',').join(', ')}</p>
  </div>

  {movieData.ratings && movieData.ratings.length > 0 && (
      <div>
        <p><span style={{ fontWeight: 'bold' }}>Average Rating:</span> {movieData.ratings[0].averageRating}</p>
        <p><span style={{ fontWeight: 'bold' }}>Number of Votes:</span> {movieData.ratings[0].numVotes}</p>
      </div>
    )}
    <button onClick={(e) => { e.stopPropagation(); addToWatchlist(movie.titleID); }} className="add-to-watchlist-button">
    Add to Watchlist
</button>
</div>

<div style={{ textAlign: 'center', margin: '10px 20px', marginTop: '25px' }}>
<h2>Alternate Titles:</h2>
  <ul style={{ listStyleType: 'none', padding: 0 }}>
    {movieData.titleAKAlist.map(title => (
      <li key={`${title.titleID}-${title.region}`} style={{ marginBottom: '5px' }}>
        <span style={{ display: 'inline-block', width: '10px', marginRight: '5px' }}>&#8226;</span>
        <span>{title.title} ({title.region})</span>
      </li>
    ))}
  </ul>
</div>

<h2>Principals:</h2>
<ul style={{ listStyleType: 'none', padding: 0 }}>
  {movieData.titlePrincipalsList.map(actor => (
    <li key={actor.basicsID} style={{ marginBottom: '5px', cursor: 'pointer' }} onClick={() => handlePrincipalClick(actor.basicsID)}>
      <span style={{ display: 'inline-block', width: '10px', marginRight: '5px' }}>&#8226;</span>
      <span>{actor.primaryName} - {actor.category}</span>
    </li>
  ))}
</ul>
    </div>
    </div>
    <style jsx>{`
    .add-to-watchlist-button {
        background-color: grey;
        color: white; /* Set text color to black */
        border: 1px solid grey;
        padding: 5px 10px;
        cursor: pointer;
    }
    
    .add-to-watchlist-button:hover {
        background-color: darkgrey; /* Darken color on hover */
        color: white; /* Change text color on hover */
    }
      .movie-container {
        width: 215px;
        height: 350px; /* Adjust height as needed */
        border: 1px solid #ccc;
        padding: 10px;
        text-align: center;
        display: flex;
        flex-direction: column;
      }
      
      .movie-title {
        font-weight: bold;
      }
      
      .movie-image {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      
      .movie-image img {
        max-width: 100%;
        max-height: 100%;
        object-fit: cover;
      }
      
       .select {
          padding: 12px;
          width: 100px;
          border: 2px solid #61006D;
          border-radius: 5px;
          margin-right: 10px;
          font-size: 14px;
        }
        .additional-content {
          margin-top: 20px;
          text-align: center;
        }
        .additional-image {
          max-width: 100%;
          height: auto;
          border-radius: 5px;
        }
        .tagline {
          font-size: 16px;
          color: #000000;
          text-align: center;
        }
      `}</style>
    </div>
  );
}
export default MovieDetails2;

//   return (
//     <div className="home-container">
//     <div className="header">
//     <Link href="/new" style={{ textDecoration: 'none' }}>
//         <h1 className="title">Ntuaflix</h1>
//       </Link>
//       <div className="auth-buttons">
//         <Link href="/login" style={{ textDecoration: 'none' }}>
//           <div className="login-button">Login</div>
//         </Link>
//         <Link href="/signup" style={{ textDecoration: 'none' }}>
//           <div className="login-button">Sign up</div>
//         </Link>
//       </div>     
//     </div>
//     <div style={{ textAlign: 'center' }}>
//   {movieData ? (
//     <div>
//       {Object.entries(movieData).map(([key, value]) => (
//         <div key={key}>
//           {key !== 'titleInfo' && <h3>{key === 'titleAKAlist' ? 'Also Known As:' : key}</h3>}
//           <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
//             {Array.isArray(value) ? (
//               value.map((item, index) => (
//                 <div key={index} style={{ marginBottom: '10px' }}>
//                   {/* Display originalTitle */}
//                   {item.originalTitle && <h4>{item.originalTitle}</h4>}
//                   {/* Display array items */}
//                   {Object.entries(item).map(([subKey, subValue]) => {
//                     if (subKey === 'originalTitle' || subKey === 'titleID' || subKey === 'image' || subKey === 'basicsID') {
//                       return null;  // Skip rendering these properties within the loop
//                     }
//                     // Modify the property names
//                     const modifiedSubKey = subKey === 'titleType' ? 'Type' :
//                                           subKey === 'startYear' ? 'Start Year' :
//                                           subKey === 'endYear' ? 'End Year' :
//                                           subKey === 'genres' ? 'Genres' :
//                                           subKey;
//                     // Hide the "End Year" property if it is null
//                     if (subKey === 'endYear' && subValue === null) {
//                       return null;
//                     }
//                     return (
//                       <div key={subKey} style={{ display: 'flex', alignItems: 'center' }}>
//                         <strong style={{ marginRight: '5px' }}>{modifiedSubKey}:</strong>
//                         <div>{subValue}</div>
//                       </div>
//                     );
//                   })}
//                   {/* Display image */}
//                   {item.image && (
//                     <div>
//                       <img
//                         src={item.image.replace('{width_variable}', 'w500')}
//                         alt={item.primaryTitle}
//                         style={{ width: '200px', height: 'auto' }} // Set the desired width here
//                       />
//                     </div>
//                   )}
//                   {/* Display Also Known As */}
//                   {item.titleAKAlist && (
//   <div style={{ display: 'flex', alignItems: 'flex-start' }}>
//     <strong style={{ marginRight: '5px' }}>Also Known As:</strong>
//     <ul>
//       {item.titleAKAlist.map((aka, index) => (
//         <li key={index}>{`${aka.title}, ${aka.region}`}</li>
//       ))}
//     </ul>
//   </div>
// )}</div>  
//               ))
//             ) : (
//               <div>
//                 {/* Display object properties */}
//                 {Object.entries(value).map(([subKey, subValue]) => {
//                   if (subKey === 'originalTitle' || subKey === 'titleID' || subKey === 'image' || subKey === 'basicsID') {
//                     return null;  // Skip rendering these properties within the loop
//                   }
//                   // Modify the property names
//                   const modifiedSubKey = subKey === 'titleType' ? 'Type' :
//                                         subKey === 'startYear' ? 'Start Year' :
//                                         subKey === 'endYear' ? 'End Year' :
//                                         subKey === 'genres' ? 'Genres' :
//                                         subKey;
//                   // Hide the "End Year" property if it is null
//                   if (subKey === 'endYear' && subValue === null) {
//                     return null;
//                   }
//                   return (
//                     <div key={subKey} style={{ display: 'flex', alignItems: 'center' }}>
//                       <strong style={{ marginRight: '5px' }}>{modifiedSubKey}:</strong>
//                       <div>{subValue}</div>
//                     </div>
//                   );
//                 })}
//                 {/* Display image */}
//                 {value.image && (
//                   <div>
//                     <img
//                      src={value.image.replace('{width_variable}', 'w500')}
//                       alt={value.primaryTitle}
//                       style={{ width: '200px', height: 'auto' }} // Set the desired width here
//                     />
//                   </div>
//                 )}
//                 {/* Display Also Known As */}
//                 {value.titleAKAlist && (
//                     <div style={{ display: 'flex', alignItems: 'flex-start' }}>
//                       <strong style={{ marginRight: '5px' }}>Also Known As:</strong>
//                       <ul>
//                         {value.titleAKAlist.map((aka, index) => (
//                           <li key={index}>{`${aka.title}, ${aka.region}`}</li>
//                         ))}
//                     </ul>
//                   </div>
//                 )}
//               </div>
//             )}
//           </div>
//         </div>
//       ))}
//     </div>
//   ) : (
//     <p>Loading...</p>
//   )}
// </div>
//     <style jsx>{`
//         .select {
//           padding: 12px;
//           width: 100px;
//           border: 2px solid #61006D;
//           border-radius: 5px;
//           margin-right: 10px;
//           font-size: 14px;
//         }
//         .additional-content {
//           margin-top: 20px;
//           text-align: center;
//         }
//         .additional-image {
//           max-width: 100%;
//           height: auto;
//           border-radius: 5px;
//         }
//         .tagline {
//           font-size: 16px;
//           color: #000000;
//           text-align: center;
//         }
//       `}</style>
//     </div>
//   ); 
//       };
