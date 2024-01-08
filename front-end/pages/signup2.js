/* enallaktiki an den theloume na kanoume search kai apo edw
an protimame na min exei search*/
import { useState } from 'react';
import { fetchData } from './api.js';
import Link from 'next/link';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async () => {
    try {
      // Send the credentials to the server for validation
      const response = await fetchData('http://localhost:3000/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify({ username, password }),
        /*
        "
        {
            "username": "hahfsdugahs",
            "password": "sdhfsudfgs"
        }
        "
        */
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
  

  return (
    <div className="home-container">
      <div className="header">
        <h1 className="title">Ntuaflix</h1>
      </div>
      <div className="main-content">
        <h1>Sign Up</h1>
        <div className="login-form">
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
            <button onClick={handleSignup}>Sign Up</button>
          </div>
          <div className="login-text">
            <p>Already have an account? <Link href="http://localhost:3000/login">Login</Link></p>
          </div>
        </div>
      </div>

      <style jsx>{`
      .auth-buttons {
        display: flex;
        align-items: center;
      }
      .auth-buttons .login-button {
        margin-right: 10px;
      }

        .home-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px;
        }

        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          text-align:center;
          margin-bottom: 20px;
          padding: 20px 0;
          background-color: #E0DFDF;
          font-family: 'Roboto', sans-serif;
        }

        .title {
          font-size: 2.5em;
          color: #333;
          margin: 0 auto;
        }

        .search-bar {
          display: flex;
          align-items: center;
          margin-bottom: 0px;
        }

        input {
          padding: 12px;
          width: 320px;
          border: 2px solid #61006D;
          border-radius: 5px;
          margin-right: 10px;
          font-size: 14px;
        }
        .main-content {
          text-align: center;
          background-color: #ffffff; /* Set background color to white for the main content */
          padding: 20px; /* Add padding to the main content */
          border-radius: 5px; /* Add border-radius for a clean look */
        }

        button {
          padding: 12px 20px;
          cursor: pointer;
          background-color: #000000;
          color: #ffffff;
          border: none;
          border-radius: 5px;
          font-size: 14px;
          transition: background-color 0.3s ease;
        }

        button:hover {
          background-color: #0056b3;
        }

        .login-button {
          padding: 12px 20px;
          cursor: pointer;
          background-color: #0F4C49;
          color: #ffffff;
          border: none;
          border-radius: 5px;
          text-decoration: none;
          transition: background-color 0.3s ease;
        }

        .login-button:hover {
          background-color: #0056b3;
        }
        
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