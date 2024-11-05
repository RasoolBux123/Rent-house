import React from 'react';
import { FaFacebook, FaInstagram, FaWhatsapp, FaLinkedin } from 'react-icons/fa';

// Sample images for agents
import agent1 from '../assets/agent1.jpg';
import agent2 from '../assets/agent2.jpg';
import agent3 from '../assets/agent3.jpg';
import agent4 from '../assets/agent4.jpg';
import agent5 from '../assets/agent5.jpg';
import agent6 from '../assets/agent6.jpg';

const FeaturedAgentsSection = () => {
  const agents = [
    { id: 1, name: 'John Doe', location: 'New York, USA', image: agent1 },
    { id: 2, name: 'Sarah Lee', location: 'Los Angeles, USA', image: agent2 },
    { id: 3, name: 'Alex Kim', location: 'London, UK', image: agent3 },
    { id: 4, name: 'Emma Wilson', location: 'Dubai, UAE', image: agent4 },
    { id: 5, name: 'Liam Chen', location: 'Tokyo, Japan', image: agent5 },
    { id: 6, name: 'Sophie Zhang', location: 'Paris, France', image: agent6 },
  ];

  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        {/* Title and Description */}
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-4">
          Featured Agents
        </h2>
        <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
          Discover our trusted agents who are ready to help you find your dream home in different locations.
        </p>

        {/* Agent Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {agents.map((agent) => (
            <div
              key={agent.id}
              className="bg-white rounded-lg shadow-lg p-6 text-center transition-transform duration-300 hover:scale-105"
            >
              <img
                src={agent.image}
                alt={agent.name}
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-lg font-semibold text-gray-700">{agent.name}</h3>
              <p className="text-gray-500">{agent.location}</p>

              {/* Social Media Icons */}
              <div className="flex justify-center space-x-4 mt-4 text-gray-600">
                <a href="#" aria-label="Facebook" className="hover:text-blue-500">
                  <FaFacebook size={20} />
                </a>
                <a href="#" aria-label="Instagram" className="hover:text-pink-500">
                  <FaInstagram size={20} />
                </a>
                <a href="#" aria-label="WhatsApp" className="hover:text-green-500">
                  <FaWhatsapp size={20} />
                </a>
                <a href="#" aria-label="LinkedIn" className="hover:text-blue-700">
                  <FaLinkedin size={20} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedAgentsSection;
