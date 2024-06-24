import React from 'react';
import './App.css';
import Home from './components/Home';
import LoginSignup from './components/LoginSignup';
import Products from './components/Products';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Cart from './components/Cart';
import { CartProvider } from './components/CartContext';


function App() {
  
  return (
    <div className="App">
      <CartProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login-signup" element={<LoginSignup />} />
            <Route path='/Products' element={<Products />} />
            <Route path='/About' element={<About />} />
            <Route path='/Contact' element={<Contact />} />
            <Route path="/Cart" element={<Cart />} />
          </Routes>
        </Router>
      </CartProvider>
    </div>
  );
}

export default App;
