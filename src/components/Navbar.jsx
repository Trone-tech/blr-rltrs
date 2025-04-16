import React, { useState } from "react";
import logo from "../assets/logo.png";
import "../styles/Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.classList.toggle("no-scroll", !isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.classList.remove("no-scroll");
  };

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className="logo-container">
          <img src={logo} alt="Bangalore Realtors Logo" className="logo" />
        </div>

        {/* Hamburger Menu Icon */}
        <div className="hamburger" onClick={toggleMenu}>
          <div className={`bar ${isMenuOpen ? "active" : ""}`}></div>
          <div className={`bar ${isMenuOpen ? "active" : ""}`}></div>
          <div className={`bar ${isMenuOpen ? "active" : ""}`}></div>
        </div>

        {/* Navigation Links */}
        <div className={`nav-links ${isMenuOpen ? "open" : ""}`}>
          <a href="#about" className="nav-link" onClick={closeMenu}>
            About
          </a>
          <a href="#contact" className="nav-link" onClick={closeMenu}>
            Contact
          </a>
          <a href="#testimonials" className="nav-link" onClick={closeMenu}>
            Testimonials
          </a>
        </div>

        {/* Mobile Drop Down Menu */}
        <div
          className={`mobile-dropdown ${isMenuOpen ? "open" : ""}`}
          onClick={(e) => {
            if (isMenuOpen) {
              e.stopPropagation();
              closeMenu();
            }
          }}
        >
          <ul>
            <li>
              <a href="#about" onClick={closeMenu}>
                About
              </a>
            </li>
            <li>
              <a href="#contact" onClick={closeMenu}>
                Contact
              </a>
            </li>
            <li>
              <a href="#testimonials" onClick={closeMenu}>
                Testimonials
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
