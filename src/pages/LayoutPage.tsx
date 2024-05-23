import React from 'react'
import Header from '../components/Header'
import HeroSection from '../components/HeroSection'
import AboutPAge from '../components/AboutPAge'
import ServicesPage from '../components/ServicesPage'
import WorksPage from '../components/WorksPage'
import FreeQuote from '../components/FreeQuote'
import Footer from '../components/Footer'

export default function LayoutPage() {
  return (
    <div className=''>
      <Header/>
      <HeroSection/>
      <AboutPAge/>
      <ServicesPage/>
      <WorksPage/>
      <FreeQuote/>
      <Footer/>

    </div>
  )
}
