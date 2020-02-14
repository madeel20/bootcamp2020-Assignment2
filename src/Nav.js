import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';


function Nav() {
    const navStyle= {
        color: 'white',
        textDecoration:'none'
      }
  return (
    <nav >
      <h2> Nav Bar</h2>
      <ul className="nav-links">
          <Link style={navStyle} to="/about">
            <li>About</li>
          </Link>
          <Link style={navStyle} to="/contact">
            <li>Contact</li>
          </Link>
          <Link style={navStyle} to="/posts">
            <li> Shop</li>
          </Link>
          </ul>
    </nav>
  );
}

export default Nav;
