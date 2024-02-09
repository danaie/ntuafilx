import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

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

  const replaceWidthVariable = (imageUrl, width) => {
    return imageUrl.replace('{width_variable}', width);
  };

  return (
    <div>
      <h2>Actor Details</h2>
      {actorData ? (
        <div>
          {Object.entries(actorData).map(([key, value]) => (
            <div key={key}>
              <h3>{key}</h3>
              <ul>
                {Array.isArray(value) ? (
                  value.map((item, index) => (
                    <li key={index}>
                      {/* Display array items */}
                      {Object.entries(item).map(([subKey, subValue]) => (
                        <div key={subKey}>
                          <strong>{subKey}: </strong>
                          {subValue}
                        </div>
                      ))}
                    </li>
                  ))
                ) : (
                  <li>
                    {/* Display object properties */}
                    <div key={key}>
                      <strong>{key}: </strong>
                      {value}
                    </div>
                  </li>
                )}
              </ul>
            </div>
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    {actorKnownMovies ? (
        <div>
          <h2>Known For Movies</h2>
          <ul>
            {actorKnownMovies.map((movie, index) => (
              <li key={index}>
                <div>
                  <strong>Title ID: </strong> {movie.titleID}
                </div>
                <div>
                  <strong>Primary Title: </strong> {movie.primaryTitle}
                </div>
                {movie.image && (
                  <div>
                    <img src={movie.image} alt={movie.primaryTitle} />
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>Loading known for movies...</p>
      )}
    </div>
  );
};

export default ActorDetails2;
