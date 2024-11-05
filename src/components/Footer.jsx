import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Logo and Description */}
          <div>
            <h3 className="text-lg font-semibold mb-3">RentHouse</h3>
            <p className="text-gray-400">
              Your go-to platform to find the best rental properties. Discover homes, apartments, and commercial spaces in top locations.
            </p>
          </div>

          {/* Pages */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Pages</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#home" className="hover:text-white">Home</a></li>
              <li><a href="#services" className="hover:text-white">Services</a></li>
              <li><a href="#products" className="hover:text-white">property</a></li>
              <li><a href="#careers" className="hover:text-white">About</a></li>
              <li><a href="#contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Phone: 3063400025</li>
              <li>Email: support@renthouse.com</li>
              <li>Address: 123 Rent-house karachi </li>
            </ul>
          </div>

          {/* Search */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Search</h3>
            <div className="flex items-center">
              <input
                type="text"
                placeholder="Search..."
                className="w-full px-3 py-2 rounded-l bg-gray-800 text-white placeholder-gray-500 focus:outline-none"
              />
              <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-r">
                Go
              </button>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 mt-6 pt-4 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} RentHouse. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
