import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/Section4.css';

// Import all images
import img1 from '../assets/1.png';
import img2 from '../assets/2.png';
import img3 from '../assets/3.png';
import img4 from '../assets/4.png';
import img5 from '../assets/5.png';

const Section4 = () => {
  // State to track if component is in view to start animations
  const [isInView, setIsInView] = useState(false);
  
  // Set isInView to true after component mounts with a slight delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsInView(true);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);
  
  // Semi-circle path animation - draws the orange arc over time
  const pathVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        duration: 2.5,
        ease: "easeInOut"
      }
    }
  };
  
  return (
    <section className="section4">
      <div className="circle-container">
        {/* Center logo - Bangalore Realtors */}
        <div className="center-logo">
          <span className="logo-text">
            <span className="city-name">Bangalore</span>
            <span className="realtors">Realtors</span>
          </span>
        </div>
        
        {/* SVG for the semi-circle arc */}
        <svg className="circle-svg" viewBox="0 0 600 400">
          {/* Semi-circle arc path */}
          <motion.path
            d="M 150 200 A 150 150 0 1 1 450 200"
            stroke="#FF7F00"
            strokeWidth="3"
            fill="transparent"
            variants={pathVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          />
        </svg>
        
        {/* Find A Tenant - Top position */}
        <motion.div
          className="service-item tenant"
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <div className="service-icon">
            <img src={img1} alt="Find A Tenant" />
          </div>
          <div className="service-name">Find A Tenant</div>
        </motion.div>
        
        {/* Financing - Top right position */}
        <motion.div
          className="service-item financing"
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ delay: 1.0, duration: 0.5 }}
        >
          <div className="service-icon">
            <img src={img2} alt="Financing" />
          </div>
          <div className="service-name">Financing</div>
        </motion.div>
        
        {/* Property Registration - Bottom right position */}
        <motion.div
          className="service-item registration"
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ delay: 1.5, duration: 0.5 }}
        >
          <div className="service-icon">
            <img src={img3} alt="Property Registration" />
          </div>
          <div className="service-name">Property Registration</div>
        </motion.div>
        
        {/* Property Agreement - Bottom left position */}
        <motion.div
          className="service-item agreement"
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ delay: 2.0, duration: 0.5 }}
        >
          <div className="service-icon">
            <img src={img4} alt="Property Agreement" />
          </div>
          <div className="service-name">Property Agreement</div>
        </motion.div>
        
        {/* Find A Dream Home - Top left position */}
        <motion.div
          className="service-item dream-home"
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ delay: 2.5, duration: 0.5 }}
        >
          <div className="service-icon">
            <img src={img5} alt="Find A Dream Home" />
          </div>
          <div className="service-name">Find A Dream Home</div>
        </motion.div>
      </div>
    </section>
  );
};

export default Section4;