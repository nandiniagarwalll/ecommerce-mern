import React , {useContext}from 'react';
import w1 from '../assets/wb1.jpg';
import w2 from '../assets/wb2.jpg';
import w3 from '../assets/wb3.jpg';
import w4 from '../assets/wb4.jpg';
import w5 from '../assets/wb5.jpg';
import w6 from '../assets/wb6.jpg';
import w7 from '../assets/wb7.jpg';
import w8 from '../assets/wb8.jpg';
import w9 from '../assets/wb9.jpg';
import w10 from '../assets/wb10.jpg';
import './MenBottomwear.css'; 
import { CartContext } from './CartContext';

const menTshirts = [
  { id: 1, name: 'Beige Roma Cargo Pant', price:  1399, sizes: ['30', '32', '34', '36'], image: w1 },
  { id: 2, name: 'Six pocket cargo shorts', price:  1599, sizes: ['28', '30', '32', '34'], image: w2 },
  { id: 3, name: 'Navy Blue Crgo Pant', price:  1545, sizes: ['30', '32', '34', '36'], image: w3 },
  { id: 4, name: 'Six pocket cargo pants', price: 1899, sizes: ['30', '32', '34', '36'], image: w4 },
  { id: 5, name: 'White Twill Straught Fit Pants', price: 999, sizes: ['30', '32', '34', '36'], image: w5 },
  { id: 6, name: 'Olive Parachute Pants', price: 1699, sizes: ['30', '32', '34', '36'], image: w6 },
  { id: 7, name: 'White Parachute Pants', price: 1999, sizes: ['28', '30', '32', '34'], image: w7 },
  { id: 8, name: 'Signature black sweatpants', price: 1599, sizes: ['30', '32', '34', '36'], image: w8 },
  { id: 9, name: 'Mustarg relaxed fit Cargo Pant', price: 999, sizes: ['30', '34', '36', '38'], image: w9 },
  { id: 10, name: 'Ash grey cargo pants', price: 1599, sizes: ['30', '34', '36', '38'], image: w10 },
];

const MenTshirts = () => {

  const { addToCart } = useContext(CartContext);

  return (
    <section id="men-bottom">
      <div className="product-grid">
        {menTshirts.map(product => (
          <div key={product.id} className="product-card">
            <div className="product-image">
              <img src={product.image} alt={product.name} />
              <div className="overlay">
                <button onClick={() => addToCart(product)} className="add-to-cart">Add to Cart</button>
              </div>
            </div>
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <p>Sizes: {product.sizes.join(', ')}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default MenTshirts;
