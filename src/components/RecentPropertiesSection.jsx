import React from 'react';
import outImage from '../assets/out.jpg';
import frontImage from '../assets/front.jpg';
import homeImage from '../assets/home.jpg';
import home1Image from '../assets/home1.jpg';
import houseImage from '../assets/house.jpg';
import kitchenImage from '../assets/kitchen.jpg';

const RecentPropertiesSection = () => {
  const properties = [
    {
      id: 1,
      name: 'Cozy Family Home',
      location: 'Islamabad',
      area: '3000 sq/m',
      image: outImage,
    },
    {
      id: 2,
      name: 'Modern Villa',
      location: 'Islamabad Socity',
      area: '3500 sq/m',
      image: frontImage,
    },
    {
      id: 3,
      name: 'Luxury Apartment',
      location: 'Banglo',
      area: '2800 sq/m',
      image: homeImage,
    },
    {
      id: 4,
      name: 'Charming Cottage',
      location: 'Defence area ',
      area: '2500 sq/m',
      image: home1Image,
    },
    {
      id: 5,
      name: 'Stylish Studio',
      location: 'Cilftan',
      area: '2200 sq/m',
      image: houseImage,
    },
    {
      id: 6,
      name: 'Elegant Condo',
      location: 'Karachi',
      area: '3100 sq/m',
      image: kitchenImage,
    },
  ];

  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-semibold text-gray-800 text-center mb-4">
          Recent Properties Listed
        </h2>
        <p className="text-sm text-gray-600 text-center mb-8">
          Discover the latest properties available in your area. Find your dream home today!
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((property) => (
            <div
              key={property.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105"
            >
              <img src={property.image} alt={property.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-700">{property.name}</h3>
                <p className="text-gray-500">{property.location}</p>
                <p className="text-gray-500">{property.area}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentPropertiesSection;
