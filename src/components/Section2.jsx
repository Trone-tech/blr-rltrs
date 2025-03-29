import React from 'react';
import './Section2.css';

const Section2 = () => {
  return (
    <div className="services-section">
      <div className="services-container">
        <div className="services-content">
          <h2 className="services-title">Why we are the best choice ?</h2>
          
          <div className="services-grid">
            {/* Card 1 */}
            <div className="service-card">
              <div className="service-icon" style={{backgroundColor: '#57d8a6'}}>
                <div className="icon-home"></div>
              </div>
              <h3 className="card-title">Your Success, Our Mission</h3>
              <p className="card-text">Honest advice, Expert guidance. We value long-term relationships. Acting in your best interest so we can make your real estate successful.</p>
            </div>
            
            {/* Card 2 */}
            <div className="service-card">
              <div className="service-icon" style={{backgroundColor: '#5ecef9'}}>
                <div className="icon-building"></div>
              </div>
              <h3 className="card-title">Your Success, Our Mission</h3>
              <p className="card-text">Honest advice, Expert guidance. We value long-term relationships. Acting in your best interest so we can make your real estate successful.</p>
            </div>
            
            {/* Card 3 */}
            <div className="service-card">
              <div className="service-icon" style={{backgroundColor: '#fe9839'}}>
                <div className="icon-user"></div>
              </div>
              <h3 className="card-title">Your Success, Our Mission</h3>
              <p className="card-text">Honest advice, Expert guidance. We value long-term relationships. Acting in your best interest so we can make your real estate successful.</p>
            </div>
            
            {/* Card 4 */}
            <div className="service-card">
              <div className="service-icon" style={{backgroundColor: '#ff8967'}}>
                <div className="icon-chart"></div>
              </div>
              <h3 className="card-title">Your Success, Our Mission</h3>
              <p className="card-text">Honest advice, Expert guidance. We value long-term relationships. Acting in your best interest so we can make your real estate successful.</p>
            </div>
          </div>
        </div>
        
        <div className="building-image">
          {/* Building image */}
        </div>
      </div>
    </div>
  );
};

export default Section2;
