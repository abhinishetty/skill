import React, { useState } from 'react';
import './App.css';
import Navbar from './Navbar';
import ProductList from './ProductList';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="App">
      <Navbar />
      <ProductList addToCart={addToCart} />
      <div className="cart">
        <h2>Shopping Cart</h2>
        <ul>
          {cart.map((item, index) => (
            <li key={index}>{item.name} - ${item.price}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
