import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import logo from '../assets/logo.png';
import '../styles/Section6.css';

const Section6 = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="section6">
      <div className="footer-content">
        <div className="footer-logo">
          <img src={logo} alt="Bangalore Realtors Logo" className="footer-logo-img" />
        </div>
        
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#services">Services</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        
        <div className="footer-contact">
          <h3>Contact</h3>
          <p><a href="mailto:trone@tronechtechnologies.in">trone@tronechtechnologies.in</a></p>
          <p><a href="tel:+919513758888">+91 95137 58888</a></p>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p className="copyright">©{currentYear} TroneTechnologies. All rights reserved.</p>
        <div className="social-icons">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Section6;
