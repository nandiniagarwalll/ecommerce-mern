import React, {useContext} from 'react';
import m1 from '../assets/mb1.jpg';
import m2 from '../assets/mb2.jpg';
import m3 from '../assets/mb3.jpg';
import m4 from '../assets/mb4.jpg';
import m5 from '../assets/mb5.jpg';
import m6 from '../assets/mb6.jpg';
import m7 from '../assets/mb7.jpg';
import m8 from '../assets/mb8.jpg';
import m9 from '../assets/mb9.jpg';
import m10 from '../assets/mb10.jpg';
import './MenBottomwear.css'; 
import { CartContext } from './CartContext';

const menTshirts = [
  { id: 1, name: 'Korean Style CReam Cargo Pant', price: 1999, sizes: ['30', '32', '34', '36'], image: m1 },
  { id: 2, name: 'Rustic Navy Cargo Pant', price: 1599, sizes: ['28', '30', '32', '34'], image: m2 },
  { id: 3, name: 'Cord Olive Corduroy Crgo Pant', price: 1199, sizes: ['30', '32', '34', '36'], image: m3 },
  { id: 4, name: 'Korean Style Olive Cargo', price: 1199, sizes: ['30', '32', '34', '36'], image: m4 },
  { id: 5, name: 'Void Olive Baggy Fit Jeans', price: 1799, sizes: ['30', '32', '34', '36'], image: m5 },
  { id: 6, name: 'Stiller Black Cargo Pant', price:  1699, sizes: ['30', '32', '34', '36'], image: m6 },
  { id: 7, name: 'Adventure Dark Brown Cargo Pant', price: 1999, sizes: ['28', '30', '32', '34'], image: m7 },
  { id: 8, name: 'Grey Cargo Pant', price: 1599, sizes: ['30', '32', '34', '36'], image: m8 },
  { id: 9, name: 'Urban Cord Maroon Corduroy Cargo Pant', price: 1599, sizes: ['30', '34', '36', '38'], image: m9 },
  { id: 10, name: 'Vertix Olive Cargo Pant', price:  1599, sizes: ['30', '34', '36', '38'], image: m10 },
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
