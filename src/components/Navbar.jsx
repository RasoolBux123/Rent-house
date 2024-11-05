import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          
          {/* Left Side - Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="/" className="text-2xl font-bold text-blue-600">
              Rent-House
            </a>
          </div>
          
          {/* Center - Navigation Links */}
          <div className="hidden md:flex md:space-x-8 md:items-center">
            <a href="#home" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
              Home
            </a>
            <a href="#service" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
              About
            </a>
            <a href="#product" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
              Property  
            </a>
            <a href="#career" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
              Serivice 
            </a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
              Contact
            </a>
          </div>
          
          {/* Right Side - Sign Up and Login Buttons */}
          <div className="flex items-center space-x-4">
            <a
              href="#signup"
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300"
            >
              Sign Up
            </a>
            <a
              href="#login"
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-blue-500 transition duration-300"
            >
              Login
            </a>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu (Optional) */}
      {/* You can implement a mobile menu toggle here if needed */}
    </nav>
  );
};

export default Navbar;
