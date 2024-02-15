import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import Link from 'next/link';
import '../styles/globalstyles.css';
import { FaSearch } from 'react-icons/fa';

const ActorDetails2 = () => {
  const router = useRouter();
  const { nameID } = router.query;
  const [actorData, setActorData] = useState(null);
  const [actorKnownMovies, setActorKnownMovies] = useState(null);
  const [loading, setLoading] = useState(true); // State to track loading state

  useEffect(() => {
    if (nameID) {
      fetchActorDetails(nameID);
      fetchKnownFor(nameID);
    }
  }, [nameID]);

  const handleLogout = async () => {
    try {
        await axios.get('http://localhost:9876/ntuaflix_api/logout');
        localStorage.removeItem(token);
        router.push('/new');
    } catch (error) {
        console.error('Logout failed:', error);
        // Handle any error appropriately
    }
};

  const fetchActorDetails = async (nameID) => {
    try {
      const response = await axios.get(`http://localhost:9876/ntuaflix_api/name/${nameID}`);
      console.log('Name data response:', response.data);
      // Check if the response contains a 'nameObject' property
      if (response.data.success && response.data.nameObject) {
        const actorDetails = response.data.nameObject;
        setActorData(actorDetails);
        setLoading(false); // Set loading state to false after fetching data
      } else {
        console.error('Error fetching actor data:', response.data); // Log the response for debugging
        setLoading(false); // Ensure loading state is set to false in case of error
      }
    } catch (error) {
      console.error('Error fetching actor data:', error);
      setLoading(false); // Ensure loading state is set to false in case of error
    }
  };

  const fetchKnownFor = async (nameID) => {
    try {
      const response = await axios.get(`http://localhost:9876/ntuaflix_api/knownfor/${nameID}`);
      console.log('Name data response:', response.data);
      // Extract actor data from the response
      const actorknown = response.data.data;
      setActorKnownMovies(actorknown);
    } catch (error) {
      console.error('Error fetching actor data:', error);
    }
  };

  const handleMovieClick = async (titleID) => {
    try {
      let response;
      response = await axios.get(`http://localhost:9876/ntuaflix_api/title/${titleID}`);
      console.log('Movie data response:', response.data);
      //setMovieDetailsResults(response.data.data);
      router.push({
        pathname: '/movie-details2-log',
        query: { titleID: titleID }, // Pass titleID as a query parameter
      });
    } catch (error) {
      console.error('Error fetching movie data:', error);
    }
  };

  const handleSearchClick = () => {
    // Navigate to the /new page
    router.push('/homepagewhenloggedin2');
  };

  return (
    <div className="home-container">
      <div className="header">
        <div className="search-icon" onClick={handleSearchClick}>
          <FaSearch style={{ fontSize: '26px' }} />
        </div>
        <div className="logo-container">
          <Link href="/homepagewhenloggedin2" style={{ textDecoration: 'none' }}>
            <h1 className="title">Ntuaflix</h1>
          </Link>
        </div>
        <div className="auth-buttons">
          <Link href="/watchlist" style={{ textDecoration: 'none' }}>
            <div className="login-button">Watchlist</div>
          </Link>
          <div className="login-button" onClick={handleLogout}>
      Logout
    </div>
        </div>  
      </div>
      <div>
        {loading ? (
          <p>Loading...</p>
        ) : actorData ? (
          <div>
            <div style={{ textAlign: 'center' }}>
              {actorData.image ? (
                <img
                  src={actorData.image.replace('{width_variable}', 'w200')}
                  alt={actorData.primaryName}
                  style={{ width: '200px', height: '88%', objectFit: 'cover' }}
                />
              ) : (
                <div>No Image Available</div>
              )}
              <p><strong>Name:</strong> {actorData.primaryName}</p>
              <p><strong>Birth Year:</strong> {actorData.birthYear}</p>
              {actorData.deathYear && <p><strong>Death Year:</strong> {actorData.deathYear}</p>}
              <p><strong>Primary Profession:</strong> {actorData.primaryProfession}</p>
            </div>
          </div>
        ) : (
          <p>No actor data available</p>
        )}
      </div>
      {actorKnownMovies && actorKnownMovies.length > 0 && (
      <div style={{ textAlign: 'center', marginTop: '30px' }}>      <h3>Known For Movies:</h3>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
  {actorKnownMovies.map((movie, index) => (
    <li key={index} onClick={() => handleMovieClick(movie.titleID)} style={{ marginBottom: '10px', cursor: 'pointer' }}>
      <strong>{movie.primaryTitle}</strong>
      {movie.image && (
        <div>
          <img
            src={movie.image.replace('{width_variable}', 'w500')}
            alt={movie.primaryTitle}
            style={{ width: '200px', height: 'auto' }} // Set the desired width here
          />
        </div>
      )}
    </li>
  ))}
</ul>
        </div>
      )}

      {!actorKnownMovies || actorKnownMovies.length === 0 && (
                <div style={{ textAlign: 'center' }}>
                <p>No known movies for this actor.</p> </div>
      )}    </div>
  );
};

export default ActorDetails2;
