import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import PropertySection from './components/PropertySection'
import RecentPropertiesSection from './components/RecentPropertiesSection'
import ExploreSection from './components/ExploreSection'
import FeaturedAgentsSection from './components/FeaturedAgentsSection'
import Footer from './components/Footer'
import MainPage from './components/MainPage'


const  App =() => {
  return (

    
    <div>
      
         <Navbar /> 
         <Home />
         <PropertySection />
         <RecentPropertiesSection />
         <ExploreSection />
         <FeaturedAgentsSection />
         <Footer />
         <MainPage />
    </div>
  )
}

export default App
