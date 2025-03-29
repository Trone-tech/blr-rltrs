import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import '../styles/Section5.css';

const Section5 = () => {
  // Settings for the slider
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      }
    ]
  };

  // Testimonial data
  const testimonials = [
    {
      id: 1,
      content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet ex labore id beatae molestiae, libero quis eum nam voluptates quidem.",
      name: "Jane Doe",
      position: "Land Broker"
    },
    {
      id: 2,
      content: "Working with Bangalore Realtors was a seamless experience. Their knowledge of the market and attention to detail helped us find our dream home quickly.",
      name: "John Smith",
      position: "Home Owner"
    },
    {
      id: 3,
      content: "The team at Bangalore Realtors went above and beyond to meet our property needs. Their professionalism and commitment to excellence is unmatched.",
      name: "David Kumar",
      position: "Property Investor"
    },
    {
      id: 4,
      content: "As a first-time buyer, I was nervous about the process. Bangalore Realtors guided me every step of the way, making it stress-free and enjoyable.",
      name: "Priya Sharma",
      position: "First-time Buyer"
    }
  ];

  return (
    <section className="section5">
      <div className="container">
        <div className="section-title">
          <h2>Happy Clients</h2>
          <div className="section-borders">
            <span></span>
            <span className="black-border"></span>
            <span></span>
          </div>
        </div>
        
        <div className="testimonial-slider-container">
          <Slider {...settings} className="testimonial-slider">
            {testimonials.map(testimonial => (
              <div key={testimonial.id}>
                <div className="single-testimonial-item">
                  <div className="quote-icon">
                    <FontAwesomeIcon icon={faQuoteRight} />
                  </div>
                  <p>{testimonial.content}</p>
                  <h3>
                    {testimonial.name} <span>{testimonial.position}</span>
                  </h3>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Section5;
