// components/Signup.js
import { useState } from 'react';
import { useRouter } from 'next/router';
import { fetchData } from './api.js';
import Link from 'next/link';
import '../styles/globalstyles.css';
import { FaSearch } from 'react-icons/fa';


const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSignup = async () => {
    try {
      // Send the signup data to the server
      const response = await fetch(`http://localhost:9876/ntuaflix_api/usermod/${username}/${password}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        // Handle successful signup (e.g., redirect to login page)
        router.push('/login');
        console.log('Signup successful');
      } else if (response.status === 409) {
        // Server returns a 409 status (Conflict), indicating duplicate username
        setErrorMessage('Username already exists. Please choose a different username.');
      } else {
        // Handle other error statuses
        console.error('Signup failed with status:', response.status);
      }
    } catch (error) {
      // Handle network or other errors
      console.error('Error during signup:', error);
    }
  };

  const handleSearchClick = () => {
    router.push('/new');
  };

  return (
    <div className="home-container">
       <div className="header">
        <div className="search-icon" onClick={handleSearchClick}>
        <FaSearch style={{ fontSize: '26px' }} /> {/* Use the imported search icon component */}
      </div>
      <div className="logo-container">
        <Link href="/new" style={{ textDecoration: 'none' }}>
          <h1 className="title">Ntuaflix</h1>
        </Link>
      </div>
        <div className="auth-buttons">
          <Link href="/login" passHref  style={{ textDecoration: 'none' }}>
            <div className="login-button">Login</div>
          </Link>
          <Link href="/signup" passHref  style={{ textDecoration: 'none' }}>
            <div className="login-button">Sign up</div>
          </Link>
        </div>
      </div>
      <div className="main-content">
        <div className="login-form">
          <h2>Sign Up</h2>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{
              padding: '10px',
              width: '280px',
              border: '1px solid #ccc',
              borderRadius: '5px',
              marginRight: '10px'
            }}
          />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              padding: '10px',
              width: '280px',
              border: '1px solid #ccc',
              borderRadius: '5px',
              marginRight: '10px'
            }}
          />

          <div className="button-container">
            <button onClick={handleSignup}>Sign Up</button>
          </div>
          <div className="login-text">
            <p>Already have an account? <Link href="http://localhost:3000/login">Login</Link></p>
          </div>
        </div>
      </div>

      <style jsx>{`
      input {
        padding: 10px;
        width: 320px;
        border: 1px solid #ccc;
        border-radius: 5px;
        margin-right: 10px;
      }
      .login-form {
        text-align: center;
        margin-top: 20px;
      }

        .button-container {
          margin-top: 10px;
        }

        label {
          display: block;
          margin-bottom: 5px;
        }
    

        input {
          padding: 10px;
          width: 300px;
          margin-bottom: 10px;
        }
        .signup-form {
          text-align: center;
          margin-top: 20px;
        }

        .login-text {
          margin-top: 10px;
        }
      `}</style>
    </div>
  );
};

export default Signup;
