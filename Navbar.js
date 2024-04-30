import React from 'react';

function Navbar() {
  return (
    <nav>
      <div className="container">
        <h1>My Shop</h1>
        <form className="search-form">
          <input type="text" placeholder="Search..." />
          <button type="submit">Search</button>
        </form>
      </div>
    </nav>
  );
}

export default Navbar;
