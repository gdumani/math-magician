import React from 'react';
import { Link } from 'react-router-dom';
import '../style/navbar.css';

const NavBar = () => (
  <div className="nav">
    <h1>Math Magician</h1>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/calc">Calculator</Link>
      </li>
      <li>
        <Link to="/quote">Quotes</Link>
      </li>
    </ul>
  </div>
);
export default NavBar;
