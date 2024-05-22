import React from 'react'
import Header from '../components/Header'
import HeroSection from '../components/HeroSection'
import AboutPAge from '../components/AboutPAge'
import ServicesPage from '../components/ServicesPage'

export default function LayoutPage() {
  return (
    <div className=''>
      <Header/>
      <HeroSection/>
      <AboutPAge/>
      <ServicesPage/>
    </div>
  )
}
