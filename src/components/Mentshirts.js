import React, {useContext} from 'react';
import m1 from '../assets/m1.jpg';
import m2 from '../assets/m2.jpg';
import m3 from '../assets/m3.jpg';
import m4 from '../assets/m4.jpg';
import m5 from '../assets/m5.jpg';
import m6 from '../assets/m6.jpg';
import m7 from '../assets/m7.jpg';
import m8 from '../assets/m8.jpg';
import m9 from '../assets/m9.jpg';
import m10 from '../assets/m10.jpg';
import './Mentshirts.css'; 
import { CartContext } from './CartContext';

const menTshirts = [
  { id: 1, name: 'Zenlounge Black Graphic Oversized T-shirt', price:  1199 , sizes: ['S', 'M', 'L', 'XL'], image: m1 },
  { id: 2, name: 'Zenlounge White Graphic Oversized T-shirt', price:  1199 , sizes: ['S', 'M', 'L', 'XL'], image: m2 },
  { id: 3, name: 'Renegade Purple Oversized T-shirt', price:  1199 , sizes: ['S', 'M', 'L', 'XL'], image: m3 },
  { id: 4, name: 'Newblood Maroon Oversized T-shirt', price:  1199, sizes: ['S', 'M', 'L', 'XL'], image: m4 },
  { id: 5, name: 'AmIRetro Black Graphic Oversized T-shirt', price:  1199, sizes: ['S', 'M', 'L', 'XL'], image: m5 },
  { id: 6, name: 'Growing peach oversized T-shirt', price: 1199, sizes: ['S', 'M', 'L', 'XL'], image: m6 },
  { id: 7, name: 'Follow your art oversized T-shirt', price: 1199, sizes: ['S', 'M', 'L', 'XL'], image: m7 },
  { id: 8, name: 'Puzzle brown polo T-Shirt', price: 1199, sizes: ['S', 'M', 'L', 'XL'], image: m8 },
  { id: 9, name: 'Times like these oversized T-shirt', price: 1199, sizes: ['S', 'M', 'L', 'XL'], image: m9 },
  { id: 10, name: 'Color block oversized T-shirt', price: 1199, sizes: ['S', 'M', 'L', 'XL'], image: m10 },
];

const MenTshirts = () => {

  const { addToCart } = useContext(CartContext);

  return (
    <section id="men-tshirts">
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
