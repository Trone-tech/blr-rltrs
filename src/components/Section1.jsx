import React, { useState, useEffect } from 'react';
import './Section1.css';
import logo from '../assets/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

const Section1 = () => {
  // State to track if user has scrolled down
  const [scrolled, setScrolled] = useState(false);
  const [showTopButton, setShowTopButton] = useState(false);

  // Add scroll event listener to handle navbar stickiness and back-to-top button visibility
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      // If scrolled more than 100px, apply sticky class
      if (scrollPosition > 100) {
        setScrolled(true);
        setShowTopButton(true);
      } else {
        setScrolled(false);
        setShowTopButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Clean up event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Function to scroll back to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="hero-section">
      {/* Background Image */}
      <div className="hero-background">
        <img 
          src="/buildings_image.png" 
          alt="Real Estate Property" 
        />
        <div className="hero-overlay"></div>
      </div>
      
      {/* Navbar */}
      <nav className={`navbar ${scrolled ? 'navbar-sticky' : ''}`}>
        <div className="logo-container">
          <img src={logo} alt="Bangalore Realtors Logo" className="navbar-logo" />
          <span className="logo-text">
            <span className="logo-text-white">Bangalore </span>
            <span className="logo-text-orange">Realtors</span>
          </span>
        </div>
        <div className="nav-links">
          <a href="#about" className="nav-link">About</a>
          <a href="#contact" className="nav-link">Contact</a>
          <a href="#testimonials" className="nav-link">Testimonials</a>
        </div>
      </nav>
      
      {/* Content */}
      <div className="hero-content">
        <h1 className="hero-title">
          Real Estate Made Easy
        </h1>
        <p className="hero-subtitle">
          Buy, Sell, Rent with <span className="hero-subtitle-highlight">Bangalore Realtors!</span>
        </p>
        <div>
          <button className="enquire-button" onClick={() => window.location.href = '/contact'}>
            ENQUIRE NOW
          </button>
        </div>
      </div>

      {/* Back to Top button */}
      {showTopButton && (
        <button 
          className="back-to-top-button"
          onClick={scrollToTop}
          aria-label="Back to top"
        >
          <FontAwesomeIcon icon={faArrowUp} />
        </button>
      )}
    </div>
  );
};

export default Section1;
