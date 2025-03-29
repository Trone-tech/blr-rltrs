import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import CountUp from './CountUp';
import '../styles/Section3.css';

const Section3 = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  return (
    <section className="section3" ref={ref}>
      <div className="stats-container">
        <div className="stat-box">
          <div className="stat-number">
            <CountUp
              from={0}
              to={30}
              separator=""
              direction="up"
              duration={1}
              className="count-up-text"
              startWhen={inView}
            />+
          </div>
          <div className="stat-label">years of experience</div>
        </div>
        <div className="stat-box">
          <div className="stat-number">
            <CountUp
              from={0}
              to={50}
              separator=""
              direction="up"
              duration={1}
              className="count-up-text"
              startWhen={inView}
            />+
          </div>
          <div className="stat-label">successful transactions</div>
        </div>
        <div className="stat-box">
          <div className="stat-number">
            <CountUp
              from={0}
              to={75}
              separator=""
              direction="up"
              duration={1}
              className="count-up-text"
              startWhen={inView}
            />+
          </div>
          <div className="stat-label">satisfied clients</div>
        </div>
      </div>

      <div className="about-content">
        <h2>ABOUT US</h2>
        <div className="about-container">
          <div className="about-text">
            <div className="highlight-text">Experienced. Connected. Trusted.</div>
            <p>
              At bangalore Realtors, we bring over 30 years of experience to the real
              estate market. With presence in each and every corner of
              Bangalore — from bustling commercial hubs to serene residential
              neighborhoods.
            </p>
            <p>
              We are partnered with high-profile clients, ensuring that property goals
              are achieved efficiently. Our approach is personalized, professional,
              and friendly, believing that strong relationships build the best results.
            </p>
            <div className="commitment-section">
              <div className="highlight-text">Our commitment:</div>
              <p>
                Expert guidance, seamless transactions, and your success — every step
                of the way.
              </p>
            </div>
          </div>
          <div className="about-image">
            {/* Placeholder div with styling to represent an executive image */}
            <div className="executive-placeholder">
              <div className="placeholder-text">Executive Image</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section3;
