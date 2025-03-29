import React from 'react';
import './Section1.css';

const Section1 = () => {
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
      <nav className="navbar">
        <div className="logo-container">
          <div className="logo-icon">
            <div className="logo-inner"></div>
          </div>
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
          <button className="enquire-button">
            ENQUIRE NOW
          </button>
        </div>
      </div>

      {/* Chat button in bottom right */}
      <div className="chat-button">
        <div className="chat-icon"></div>
      </div>
    </div>
  );
};

export default Section1;
