import React, { useState } from 'react';

const products = [
  { id: 1, name: ' water bottle', price: 19.99, img: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2F0ZXIlMjBib3R0bGV8ZW58MHx8MHx8fDA%3D', rating: 4 },
  { id: 2, name: 'Mobile cover', price: 24.99, img: 'https://images.unsplash.com/photo-1563299585-548ccb637e5e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1vYmlsZSUyMGNvdmVyfGVufDB8fDB8fHww', rating: 5 },
  { id: 3, name: 'College bags', price: 29.99, img: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YmFnc3xlbnwwfHwwfHx8MA%3D%3D', rating: 3 },
];

function ProductList({ addToCart }) {
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="product-list">
      {products.map((product) => (
        <div className="product-card" key={product.id}>
          <img 
            src={product.img} 
            alt={product.name} 
            width="200" // Adjust the width attribute to make the image smaller
            height="300" // Adjust the height attribute to make the image smaller
          />
          <h3>{product.name}</h3>
          <p>Price: ${product.price}</p>
          <p>Rating: {product.rating}</p>
          <div className="quantity">
            <button onClick={handleDecrement}>-</button>
            <input type="text" value={quantity} readOnly />
            <button onClick={handleIncrement}>+</button>
          </div>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
