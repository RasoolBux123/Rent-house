import React from 'react';
import usaImage from '../assets/usa.jpeg';
import newYorkImage from '../assets/newyork.jpeg';
import dubaiImage from '../assets/dubai.jpeg';
import londonImage from '../assets/london.jpeg';
import parisImage from '../assets/paris.jpeg';
import tokyoImage from '../assets/tokyo.jpeg';

const ExploreSection = () => {
  // Sample location data
  const locations = [
    { id: 1, name: 'USA', description: 'Apartments', image: usaImage },
    { id: 2, name: 'New York', description: 'City Center', image: newYorkImage },
    { id: 3, name: 'Dubai', description: 'Luxury Apartments', image: dubaiImage },
    { id: 4, name: 'London', description: 'Historic Homes', image: londonImage },
    { id: 5, name: 'Paris', description: 'Charming Flats', image: parisImage },
    { id: 6, name: 'Tokyo', description: 'Modern Studios', image: tokyoImage },
  ];

  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        {/* Title and Description */}
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-4">
          Explore by Location
        </h2>
        <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
          Discover beautiful properties around the world. Choose from popular locations and find your ideal home.
        </p>

        {/* Location Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {locations.map((location) => (
            <div
              key={location.id}
              className="relative bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105"
            >
              <img src={location.image} alt={location.name} className="w-full h-48 object-cover" />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-50 text-white">
                <h3 className="text-lg font-semibold">{location.name}</h3>
                <p className="text-sm">{location.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExploreSection;
