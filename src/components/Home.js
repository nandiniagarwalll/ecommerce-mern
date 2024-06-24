import React ,{useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import './Home.css';
import logo from '../assets/logo-removebg-preview.png';
import image from '../assets/combined.jpg';
import LoginSignup from './LoginSignup';

const Home = () => {
  const navigate = useNavigate();

  const handleLoginSignupClick = () => {
    navigate('/login-signup');
  };


  return (
    <div className='home'>
      <div className='header'>
        <div className='logo'>
          <img src={logo} alt='company logo' />
        </div>
        <button className='login-signup-button' onClick={handleLoginSignupClick}>
          Login/SignUp
        </button>
      </div>
      <div className='content'>
        <div className='left-section'>
          <div className='websitename'>
            <h1>ECART</h1>
            <p>Your one stop online shopping platform for the modern GENZ looks</p>
          </div>
          <div className='nav'>
            <ul>
              <li><Link to="/">HOME</Link></li>
              <li><Link to="About">ABOUT US</Link></li>
              <li><Link to="Products">PRODUCTS</Link></li>
              <li><Link to="/Cart">VIEW CART</Link></li>
              <li><Link to="Contact">CONTACT US</Link></li>
            </ul>
          </div>
        </div>
        <div className='imagesection'>
          <img src={image} alt='combined' />
        </div>
      </div>
    </div>
  );
}

export default Home;
