import React from 'react';
import buildingsImage from '../../buildings_image.png';

const HeroSection = () => {
  return (
    <div className="relative h-screen w-full">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img 
          src={buildingsImage} 
          alt="Real Estate Property" 
          className="w-full h-full object-cover"
        />
        {/* Overlay with slight darkening */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center px-8 md:px-16">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
          Real Estate Made Easy
        </h1>
        <p className="text-xl md:text-2xl lg:text-3xl font-light text-white italic mb-8">
          Buy, Sell, Rent with <span className="text-orange-500 font-semibold not-italic">Bangalore Realtors!</span>
        </p>
        <div>
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full uppercase text-sm font-medium tracking-wider">
            ENQUIRE NOW
          </button>
        </div>
      </div>

      {/* Chat button in bottom right */}
      <div className="absolute bottom-4 right-4 w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-lg z-20">
        <div className="w-8 h-8 rounded-full bg-green-500"></div>
      </div>
    </div>
  );
};

export default HeroSection;
