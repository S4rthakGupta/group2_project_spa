// Developer: Sarthak Gupta: 8971797.
import React from 'react';
import { Link } from 'react-router-dom';
import '../CSS/Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      {/* Giving our h1 className and giving it red colour for making it look different. */}
      <h1 className="logo">PS5 Game World</h1>
      <ul>
        {/* Adding all the links in the Navbar. */}
        <li><Link to="/">Home</Link></li>
        <li><Link to="/games">Games</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
