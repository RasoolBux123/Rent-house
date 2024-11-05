import React from 'react';
import img from '../assets/home1.jpg'
const Home = () => {
  return (
    <div
      className="relative h-screen bg-cover bg-center flex items-center justify-center text-white"
      style={{ backgroundImage: `url(${img})` }} // Replace with your actual image URL
    >
      {/* Overlay for darkening the background image */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-semibold mb-4">
          Search your Next Home
        </h1>
        
        {/* Subtitle */}
        <p className="text-lg mb-8">
          Find new featured property located in your local city
        </p>
        
        {/* Search Form */}
        <div className="bg-white bg-opacity-90 p-6 rounded-md shadow-lg max-w-xl mx-auto text-black">
          <form className="grid grid-cols-1 gap-y-4 md:grid-cols-2 md:gap-x-4">
            {/* Location Input */}
            <div>
              <label className="block text-gray-700 text-sm font-semibold mb-1">Location</label>
              <input
                type="text"
                placeholder="Enter location"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            {/* Property Type */}
            <div>
              <label className="block text-gray-700 text-sm font-semibold mb-1">Property Type</label>
              <select
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select type</option>
                <option value="apartment">Apartment</option>
                <option value="house">House</option>
                <option value="villa">Villa</option>
                {/* Add more property types as needed */}
              </select>
            </div>
            
            {/* Price Range */}
            <div className="col-span-1 md:col-span-2">
              <label className="block text-gray-700 text-sm font-semibold mb-1">Price Range</label>
              <input
                type="text"
                placeholder="Enter price range"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            {/* Advanced Filter */}
            <div className="col-span-1 md:col-span-2">
              <label className="block text-gray-700 text-sm font-semibold mb-1">Advanced Filter</label>
              <select
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select filter</option>
                <option value="furnished">Furnished</option>
                <option value="pool">Swimming Pool</option>
                <option value="garden">Garden</option>
                <option value="parking">Parking</option>
                {/* Add more advanced filters as needed */}
              </select>
            </div>
            
            {/* Submit Button */}
            <div className="col-span-1 md:col-span-2">
              <button
                type="submit"
                className="w-full py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-300"
              >
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;
