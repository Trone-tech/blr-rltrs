import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Section2.css';

const Section2 = () => {
  // Use react-intersection-observer to detect when section is in view
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  // Animation variants for container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  // Animation variants for individual cards
  const cardVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 70,
        damping: 20
      }
    }
  };

  return (
    <div className="services-section" ref={ref}>
      <div className="services-container">
        <div className="services-content">
          <h2 className="services-title">Why we are the best choice ?</h2>
          
          <motion.div 
            className="services-grid"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {/* Card 1 */}
            <motion.div className="service-card" variants={cardVariants}>
              <div className="service-icon" style={{backgroundColor: '#57d8a6'}}>
                <div className="icon-home"></div>
              </div>
              <h3 className="card-title">Your Success, Our Mission</h3>
              <p className="card-text">Honest advice, Expert guidance. We value long-term relationships. Acting in your best interest so we can make your real estate successful.</p>
            </motion.div>
            
            {/* Card 2 */}
            <motion.div className="service-card" variants={cardVariants}>
              <div className="service-icon" style={{backgroundColor: '#5ecef9'}}>
                <div className="icon-building"></div>
              </div>
              <h3 className="card-title">Your Success, Our Mission</h3>
              <p className="card-text">Honest advice, Expert guidance. We value long-term relationships. Acting in your best interest so we can make your real estate successful.</p>
            </motion.div>
            
            {/* Card 3 */}
            <motion.div className="service-card" variants={cardVariants}>
              <div className="service-icon" style={{backgroundColor: '#fe9839'}}>
                <div className="icon-user"></div>
              </div>
              <h3 className="card-title">Your Success, Our Mission</h3>
              <p className="card-text">Honest advice, Expert guidance. We value long-term relationships. Acting in your best interest so we can make your real estate successful.</p>
            </motion.div>
            
            {/* Card 4 */}
            <motion.div className="service-card" variants={cardVariants}>
              <div className="service-icon" style={{backgroundColor: '#ff8967'}}>
                <div className="icon-chart"></div>
              </div>
              <h3 className="card-title">Your Success, Our Mission</h3>
              <p className="card-text">Honest advice, Expert guidance. We value long-term relationships. Acting in your best interest so we can make your real estate successful.</p>
            </motion.div>
          </motion.div>
        </div>
        
        <div className="building-image">
          {/* Building image */}
        </div>
      </div>
    </div>
  );
};

export default Section2;
