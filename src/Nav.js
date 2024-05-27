import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="shop-logo.png" alt="Shop Logo" />
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
      </div>
      <div className="menu-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;