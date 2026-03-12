import React from 'react'
import Hero from './segments/Hero'
import HomeSection1 from './Sections/HomeSection1'
import ServiceSection1 from './Sections/ServiceSection1'
import 'swiper/css';
import Portfolio from './segments/Portfolio';
import WhatsApp from './components/WhatsApp';
const Home = () => {
  return (
    <>
    <Hero/>
    <HomeSection1/>
    <ServiceSection1/>
    <Portfolio/>
    <WhatsApp/>
    </>
  )
}

export default Home