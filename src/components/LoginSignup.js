import React, { useState } from 'react';
import './LoginSignup.css';

const LoginSignup = () => {
  const [showLoginForm, setShowLoginForm] = useState(true);

  const handleToggleForm = () => {
    setShowLoginForm(!showLoginForm);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Implement your login logic here
    console.log('Logging in...');
  };

  const handleSignup = (e) => {
    e.preventDefault();
    // Implement your signup logic here
    console.log('Signing up...');
  };

  return (
    <div className='login-signup'>
      {showLoginForm ? (
        <form onSubmit={handleLogin}>
          <h2>Login</h2>
          <div>
            <label htmlFor='userID'>User ID:</label>
            <input type='text' id='userID' required />
          </div>
          <div>
            <label htmlFor='password'>Password:</label>
            <input type='password' id='password' required />
          </div>
          <button type='submit'>Login</button>
          <p onClick={handleToggleForm}>Don't have an account? Sign Up</p>
        </form>
      ) : (
        <form onSubmit={handleSignup}>
          <h2>Sign Up</h2>
          <div>
            <label htmlFor='email'>Email:</label>
            <input type='email' id='email' required />
          </div>
          <div>
            <label htmlFor='fullName'>Full Name:</label>
            <input type='text' id='fullName' required />
          </div>
          <div>
            <label htmlFor='gender'>Gender:</label>
            <input type='text' id='gender' required />
          </div>
          <div>
            <label htmlFor='username'>Username:</label>
            <input type='text' id='username' required />
          </div>
          <div>
            <label htmlFor='signupPassword'>Password:</label>
            <input type='password' id='signupPassword' required />
          </div>
          <button type='submit'>Sign Up</button>
          <p onClick={handleToggleForm}>Already have an account? Login</p>
        </form>
      )}
    </div>
  );
};

export default LoginSignup;
