import React, {useContext} from 'react';
import w1 from '../assets/w1.jpg';
import w2 from '../assets/w2.jpg';
import w3 from '../assets/w3.jpg';
import w4 from '../assets/w4.jpg';
import w5 from '../assets/w5.jpg';
import w6 from '../assets/w6.jpg';
import w7 from '../assets/w7.jpg';
import w8 from '../assets/w8.jpg';
import w9 from '../assets/w9.jpg';
import w10 from '../assets/w10.jpg';
import './Mentshirts.css'; 
import { CartContext } from './CartContext';

const menTshirts = [
  { id: 1, name: 'Cherub Oversized T-shirt', price: 845, sizes: ['S', 'M', 'L', 'XL'], image: w1 },
  { id: 2, name: 'Cray Signature BabyT', price:  499, sizes: ['S', 'M', 'L', 'XL'], image: w2 },
  { id: 3, name: 'Pink body suit', price: 745, sizes: ['S', 'M', 'L', 'XL'], image: w3 },
  { id: 4, name: 'Orange BabyT', price: 1199, sizes: ['S', 'M', 'L', 'XL'], image: w4 },
  { id: 5, name: 'Cray Signature Sweatshirt', price: 1445, sizes: ['S', 'M', 'L', 'XL'], image: w5 },
  { id: 6, name: 'Post Malone Acid wah T-shhirt', price: 945, sizes: ['S', 'M', 'L', 'XL'], image: w6 },
  { id: 7, name: 'Days of thunder black', price: 499, sizes: ['S', 'M', 'L', 'XL'], image: w7 },
  { id: 8, name: 'Dream white Oversized Tshirt', price: 499, sizes: ['S', 'M', 'L', 'XL'], image: w8 },
  { id: 9, name: 'Basic crop top', price: 599, sizes: ['S', 'M', 'L', 'XL'], image: w9 },
  { id: 10, name: 'Red logo oversized T-shirt', price: 845, sizes: ['S', 'M', 'L', 'XL'], image: w10 },
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
