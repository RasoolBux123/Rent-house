import React from 'react';
import Home from './Home';
import PropertySection from './PropertySection';
import RecentPropertiesSection from './RecentPropertiesSection';
import ExploreSection from './ExploreSection';
import FeaturedAgentsSection from './FeaturedAgentsSection';
import Footer from './Footer';
import { Link } from 'react-scroll';

const MainPage = () => {
  return (
    <>
      <header className="bg-white shadow-md p-4">
        {/* Navigation links for sections */}
        <nav className="flex justify-center space-x-4">
          <Link to="home" smooth={true} duration={500} className="cursor-pointer">
            Home
          </Link>
          <Link to="about" smooth={true} duration={500} className="cursor-pointer">
            About
          </Link>
          <Link to="services" smooth={true} duration={500} className="cursor-pointer">
            Services
          </Link>
          <Link to="properties" smooth={true} duration={500} className="cursor-pointer">
            Properties
          </Link>
          <Link to="agents" smooth={true} duration={500} className="cursor-pointer">
            Agents
          </Link>
          <Link to="contact" smooth={true} duration={500} className="cursor-pointer">
            Contact
          </Link>
        </nav>
      </header>

      {/* Sections with IDs */}
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <PropertySection />
      </section>
      <section id="services">
        <RecentPropertiesSection />
      </section>
      <section id="properties">
        <ExploreSection />
      </section>
      <section id="agents">
        <FeaturedAgentsSection />
      </section>
      <section id="contact">
        <Footer />
      </section>
    </>
  );
};

export default MainPage;
