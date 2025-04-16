import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import CountUp from './CountUp';
import '../styles/Section3.css';
import executiveImage from '../assets/executive-image.jpg';
import section4 from '../assets/section4.png';
const Section4 = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  return (
    <section className="section4" ref={ref}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <img style={{ width: '70%', height: 'auto' }} src={section4} alt="Section 4" />
        </div>
    </section>
  );
};

export default Section4;
