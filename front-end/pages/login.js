import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const router = useRouter();

  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:9876/ntuaflix_api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        // Server returns OK status (e.g., 200)
        const responseData = await response.json();
        const { token } = responseData;

        // Store the access token provided by the backend response
        localStorage.setItem('accessToken', token);
        router.push('/homepagewhenloggedin');
        console.log('Login successful for user');
      } else if (response.status === 400) {
        // Server returns a 400 status (Bad Request), indicating invalid credentials
        setErrorMessage('Username does not exist');
      } else if (response.status === 404) {
        // Server returns a 404 status (Not Found), indicating incorrect username
        setErrorMessage('Username not found. Please sign up or create an account.');
      } else {
        // Handle other error statuses
        console.error('Login failed with status:', response.status);
        setErrorMessage('An unexpected error occurred. Please try again later.');
      }
    } catch (error) {
      // Handle network or other errors
      console.error('Error during login:', error);
      setErrorMessage('An unexpected error occurred. Please try again later.');
    }
  };

  return (
    <div className="home-container">
      <div className="header">
        <Link href="/searchresults" passHref style={{ textDecoration: 'none' }}>
          <h1 className="title">Ntuaflix</h1>
        </Link>
        <div className="search-bar">
          <input type="text" placeholder="Search for movies: title, category, actor, or genre" />
          <button>Search</button>
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
          <h2>Login</h2>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
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
            <p>Don't have an account? <Link href="/signup">Sign Up</Link></p>
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

        .error-message {
          color: red;
        }
      `}</style>
    </div>
  );
};

export default Login;
