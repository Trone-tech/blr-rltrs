import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import '../styles/WhatsAppButton.css';

const WhatsAppButton = () => {
  const phoneNumber = "919513758888";
  
  return (
    <a 
      href={`https://wa.me/${phoneNumber}`} 
      className="whatsapp-button"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact us on WhatsApp"
    >
      <FontAwesomeIcon icon={faWhatsapp} />
    </a>
  );
};

export default WhatsAppButton;
