import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { fetchData } from './api.js';
import '../styles/globalstyles.css';

const ActorDetails = () => {
  const router = useRouter();
  const { nameID } = router.query;
  const [actorDetails, setActorDetails] = useState(null);

  useEffect(() => {
    const fetchActorDetails = async () => {
      try {
        const response = await fetchData(`/name/${nameID}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        const data = await response.json();
        setActorDetails(data);
      } catch (error) {
        console.error(`Error fetching actor details for nameID ${nameID}:`, error);
      }
    };

    if (nameID) {
      fetchActorDetails();
    }
  }, [nameID]);

  /*if (!actorDetails) {
    // Loading state or error handling
    return <div>Loading...</div>;
  }, not a fan of this */

  return (
    <div className="home-container">
    <div className="header">
      <Link href="/homepage" style={{ textDecoration: 'none' }}>
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
          <button type="submit">Search</button>
        </form>
      </div>
      <div className="auth-buttons">
        <Link href="/login" style={{ textDecoration: 'none' }}>
          <div className="login-button">Login</div>
        </Link>
        <Link href="/signup" style={{ textDecoration: 'none' }}>
          <div className="login-button">Sign up</div>
        </Link>
      </div>
      </div>
      <h1>Actor Details</h1>
      <div className="actor-details-container">
        <h2>{actorDetails.name}</h2>
        <img src={actorDetails.namePoster} alt={actorDetails.name} />

        <div className="details-section">
          <h3>Basic Information</h3>
          <p>Name ID: {actorDetails.nameID}</p>
          <p>Birth Year: {actorDetails.birthYr}</p>
          <p>Death Year: {actorDetails.deathYr}</p>
          <p>Profession: {actorDetails.profession}</p>
        </div>

        <div className="details-section">
          <h3>Name Titles</h3>
          <ul>
            {actorDetails.nameTitles.map((title) => (
              <li key={title.titleID}>
                {title.titleID} ({title.category})
              </li>
            ))}
          </ul>
        </div>
      </div>

      <style jsx>{`
        h1 {
          text-align: center;
        }

        .actor-details-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-top: 20px;
        }

        .details-section {
          margin-top: 20px;
        }

        h2 {
          color: #333;
          font-size: 2rem;
        }

        ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        li {
          margin-bottom: 5px;
        }
      `}</style>
    </div>
  );
};

export default ActorDetails;