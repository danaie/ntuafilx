import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import Link from 'next/link';
import '../styles/globalstyles.css';

const ActorDetails2 = () => {
  const router = useRouter();
  const { nameID } = router.query;
  const [actorData, setActorData] = useState(null);
  const [actorKnownMovies, setActorKnownMovies] = useState(null);

  useEffect(() => {
    if (nameID) {
      fetchActorDetails(nameID);
      fetchKnownFor(nameID);
    }
  }, [nameID]);

  const fetchActorDetails = async (nameID) => {
    try {
      const response = await axios.get(`http://localhost:9876/ntuaflix_api/name/${nameID}`);
      console.log('Name data response:', response.data);
      // Extract actor data from the response
      const actorDetails = response.data.data;
      setActorData(actorDetails);
    } catch (error) {
      console.error('Error fetching actor data:', error);
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
        pathname: '/movie-details2',
        query: { titleID: titleID }, // Pass titleID as a query parameter
      });
    } catch (error) {
      console.error('Error fetching movie data:', error);
    }
  };


  return (
    <div className="home-container">
      <div className="header">
      <Link href="/new" style={{ textDecoration: 'none' }}>
          <h1 className="title">Ntuaflix</h1>
        </Link>
        <div className="auth-buttons">
          <Link href="/login" style={{ textDecoration: 'none' }}>
            <div className="login-button">Login</div>
          </Link>
          <Link href="/signup" style={{ textDecoration: 'none' }}>
            <div className="login-button">Sign up</div>
          </Link>
        </div>     
      </div>
      <div>
      {actorData && (
        <div>
          <div style={{ textAlign: 'center' }}>
          {actorData.image ? (
              <img
                src={actorData.image.replace('{width_variable}', 'w200')} // Adjusted width to fit the box
                alt={actorData.primaryName}
                style={{ width: '200px', height: '88%', objectFit: 'cover' }} // Set the desired width here
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
      )}
    </div>
    {actorKnownMovies && actorKnownMovies.length > 0 && (
      <div style={{ textAlign: 'center', marginTop: '30px' }}> {/* Added marginTop style here */}          <h3>Known For Movies:</h3>
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
      )}
    </div>
  );
};

export default ActorDetails2;
