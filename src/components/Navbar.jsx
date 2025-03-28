import React from 'react';

const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 w-full flex justify-between items-center px-6 py-4 z-10">
      <div className="flex items-center">
        <div className="flex items-center space-x-1">
          <div className="w-5 h-5 bg-orange-500 flex items-center justify-center rounded-sm">
            <div className="w-3 h-3 bg-white"></div>
          </div>
          <span className="text-xl font-bold">
            <span className="text-white">Bangalore </span>
            <span className="text-orange-500">Realtors</span>
          </span>
        </div>
      </div>
      <div className="hidden md:flex gap-8">
        <a href="#about" className="text-white hover:text-orange-500 transition-colors">About</a>
        <a href="#contact" className="text-white hover:text-orange-500 transition-colors">Contact</a>
        <a href="#testimonials" className="text-white hover:text-orange-500 transition-colors">Testimonials</a>
      </div>
    </nav>
  );
};

export default Navbar;
