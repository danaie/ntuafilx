import { useState } from 'react';
import  fetchData  from './api.js';
import Link from 'next/link';
import '../styles/globalstyles.css';


const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      // Send the credentials to the server for validation
      const response = await fetchData('http://localhost:3000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify({ username, password }),
      });
  
      if (response.ok) {
        // Server returns OK status (e.g., 200)
        const responseData = await response.json();
        const { token, role } = responseData;
  
        // Store the access token provided by the backend response
        setAccessToken(token);
  
        if (role === 'user') {
          router.push('/user-home');
          console.log('Login successful for user');
        } else if (role === 'admin') {
          router.push('/admin-home');
          console.log('Login successful for admin');
        } else {
          console.error('Unknown role. Login failed');
        }
      } else if (response.status === 401) {
        // Server returns a 401 status (Unauthorized)
        setErrorMessage('Invalid credentials. Please try again.');
      } else if (response.status === 404) {
        // Server returns a 404 status (Not Found), indicating incorrect username
        setErrorMessage('Username not found. Please sign up or create an account.');
      } else {
        // Handle other error statuses
        console.error('Login failed with status:', response.status);
      }
    } catch (error) {
      // Handle network or other errors
      console.error('Error during login:', error);
    }
  };

  return (
    <div className="home-container">
      <div className="header">
        <Link href="/searchresults"  style={{ textDecoration: 'none' }}>
        <h1 className="title">Ntuaflix</h1>
        </Link>
        <div className="search-bar">
          <input type="text" placeholder="Search for movies: title, category, actor, or genre" />
          <button>Search</button>
        </div>
        <div className="auth-buttons">
          <Link href="/login"  style={{ textDecoration: 'none' }}>
            <div className="login-button">Login</div>
          </Link>
          <Link href="/signup"  style={{ textDecoration: 'none' }}>
            <div className="login-button">Sign up</div>
          </Link>
        </div>
      </div>
      <div className="main-content">
        <div className="login-form">
          <h2>Login</h2> {/* New label for the login form */}
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="button-container">
            <button onClick={handleLogin}>Login</button>
          </div>
          <div className="signup-text">
            <p>Don't have an account? <Link href="http://localhost:3000/signup">Sign Up</Link></p>
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
      `}</style>
    </div>
  );
};

export default Login;