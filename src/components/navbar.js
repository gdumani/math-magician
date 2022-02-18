import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <div>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/calc">Calculator</Link>
    </li>
    <li>
      <Link to="/quote">Quotes</Link>
    </li>
  </div>
);
export default NavBar;
