// components/Home.js

import Link from 'next/link';
import '../styles/globalstyles.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="header">
      <Link href="/homepage"  style={{ textDecoration: 'none' }}>
        <h1 className="title">Ntuaflix</h1>
        </Link>
        <div className="search-bar">
          <input type="text" placeholder="Search for movies: title, category, actor, or genre" />
          <button>Search</button>
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
      <div className="main-content">
        {/* Other main content goes here */}
      </div>
    </div>
  );
};

export default Home;
