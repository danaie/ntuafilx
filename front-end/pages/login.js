import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import '../styles/globalstyles.css';
import { FaSearch } from 'react-icons/fa';

const Login = () => {
  const [searchType, setSearchType] = useState('title');
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [qgenre, setQGenre] = useState(''); // New state variable for genre field 1
  const [minrating, setMinRating] = useState(''); // New state variable for genre field 2
  const [yrFrom, setYrFrom] = useState('');
  const [yrTo, setYrTo] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleSearchTypeChange = (e) => {
    setSearchType(e.target.value);
  };
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
        const { token } = responseData; // Assuming backend returns userID
      
      // Store the user ID or token in localStorage
      localStorage.setItem('token', token); // You can use token instead if you prefer     
      // Redirect to homepage with user ID in the URL
      router.push(`/homepagewhenloggedin?token=${token}`);
      
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

  const handleSearchClick = () => {
    // Navigate to the /new page
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
          <h2>Login</h2>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
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
            <button onClick={handleLogin}>Login</button>
          </div>
          <div className="signup-text">
            <p>Don't have an account? <Link href="/signup">Sign Up</Link></p>
          </div>
        </div>
      </div>
      <style jsx>{`
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
        .error-message {
          color: red;
        }
      `}</style>
    </div>
  );
};

export default Login;
