// src/components/Navbar.js
import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css'; // Import Font Awesome

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Evento</div>
      <ul className="nav-links">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            <i className="fa fa-home" aria-hidden="true"></i>
            <span>Home</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/About" className="nav-link">
            <i className="fa fa-info-circle" aria-hidden="true"></i>
            <span>About</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/Contact" className="nav-link">
            <i className="fa fa-envelope" aria-hidden="true"></i>
            <span>Contact</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/Services" className="nav-link">
            <i className="fa fa-cogs" aria-hidden="true"></i>
            <span>Services</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/Signup">
            <button className="Signup">Signup</button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
