import React from 'react';
import {FaHome} from 'react-icons/fa'
import {  FaBuilding, FaHotel, FaWarehouse, FaCity} from 'react-icons/fa';


const PropertySection = () => {
  const properties = [
    { id: 1, icon: <FaHome className="text-5xl text-blue-600" />, name: "Home", quantity: 120 },
    { id: 2, icon: <FaCity className="text-5xl text-green-600" />, name: "Villa", quantity: 45 },
 
    { id: 4, icon: <FaBuilding className="text-5xl text-yellow-600" />, name: "Office", quantity: 32 },
    { id: 5, icon: <FaWarehouse className="text-5xl text-orange-600" />, name: "Studio Apartment", quantity: 25 },
    { id: 6, icon: <FaHotel className="text-5xl text-pink-600" />, name: "Condo", quantity: 56 }
  ];

  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-center text-2xl md:text-3xl font-semibold text-gray-800 mb-8">
          Property Types
        </h2>
        
        {/* Property Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {properties.map((property) => (
            <div
              key={property.id}
              className="flex flex-col items-center justify-center bg-white rounded-lg shadow-lg p-6 text-center transition-transform duration-300 hover:scale-105"
            >
              {/* Icon */}
              <div className="mb-4">{property.icon}</div>
              
              {/* Name */}
              <h3 className="text-xl font-semibold text-gray-700">{property.name}</h3>
              
              {/* Quantity */}
              <p className="text-sm text-gray-500 mt-1">Available: {property.quantity}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PropertySection;
