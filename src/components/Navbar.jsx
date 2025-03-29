import React from 'react';
import logo from '../assets/logo.png';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src={logo} alt="Bangalore Realtors Logo" className="logo" />
      </div>
      <div className="nav-links">
        <a href="#about" className="nav-link">About</a>
        <a href="#contact" className="nav-link">Contact</a>
        <a href="#testimonials" className="nav-link">Testimonials</a>
      </div>
    </nav>
  );
};

export default Navbar;
