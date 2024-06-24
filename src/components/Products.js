import React, { useState } from 'react';
import './Products.css';
import p1 from '../assets/p1.jpeg';
import p2 from '../assets/p2.jpeg';
import p3 from '../assets/p3.jpeg';
import Mentshirts from './Mentshirts.js';
import MenTshirts from './Mentshirts.js';
import MenBottomwear from './MenBottomwear.js';
import Womentshirt from './Womentshirt.js';
import WomenBottomwear from './WomenBottomwear.js';


const Products = () => {
  const [showMenDropdown, setShowMenDropdown] = useState(false);
  const [showWomenDropdown, setShowWomenDropdown] = useState(false);

  const toggleMenDropdown = () => setShowMenDropdown(!showMenDropdown);
  const toggleWomenDropdown = () => setShowWomenDropdown(!showWomenDropdown);

  return (
    <div className="products">
      <nav className="products-nav">
        <div className="logo">Ecart</div>
        <ul>
          <li onMouseEnter={toggleMenDropdown} onMouseLeave={toggleMenDropdown}>
            <a href="#men">Men</a>
            {showMenDropdown && (
              <ul className="dropdown">
                <li><a href="#men-tshirts">T-shirts</a></li>
                <li><a href="#men-bottomwear">Bottomwear</a></li>
              </ul>
            )}
          </li>
          <li onMouseEnter={toggleWomenDropdown} onMouseLeave={toggleWomenDropdown}>
            <a href="#women">Women</a>
            {showWomenDropdown && (
              <ul className="dropdown">
                <li><a href="#women-tshirts">T-shirts</a></li>
                <li><a href="#women-bottomwear">Bottomwear</a></li>
              </ul>
            )}
          </li>
        </ul>
      </nav>

      <div className='image'>
        <img src={p1} alt='p1' />
        <img src={p2} alt='p2' />
        <img src={p3} alt='p3' />
        <div className='image-text'>
        <h1>ECART- Fashion for the fearless</h1>
        </div>
      </div>

      <div className="products-content">
        <section id="men-tshirts">
          <h2>Men's T-shirts</h2>
          <MenTshirts />
        </section>
        <section id="men-bottomwear">
          <h2>Men's Bottomwear</h2>
          <MenBottomwear />
        </section>
        <section id="women-tshirts">
          <h2>Women's T-shirts</h2>
          <Womentshirt />
        </section>
        <section id="women-bottomwear">
          <h2>Women's Bottomwear</h2>
          <WomenBottomwear />
        </section>
      </div>
    </div>
  );
}

export default Products;
