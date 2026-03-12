import React from 'react';
import BoxAnimation from '../assets/BoxAnimation';
import AboutSectionImage from '../assets/logo.png';
import { convertHexToRgba } from '../util';
import './AboutSection.css';
const AboutSection = () => {
  return (
    <>
    <section id="hero" >
    <BoxAnimation/>
      <div className="container"> 
          <div>
              <h4 className="text-primary hero-subtitle" style={{background:convertHexToRgba('--primary',0.2)}}>
           <span className="about-text-color">About Us</span>   
                </h4>
               <h1 className="hero-title">Welcome To <br/><span className="primary-text">Big Feathers</span></h1>
          <p className="hero-description">A creative and tech-driven IT Company committed to transforming ideas into Digital Experiences.
             We specialize in delivering complete online solutions—from Website Development and
             E-commerce Stores to Digital Marketing, Logo Design, and Graphics—crafted for startups, firms, social media influencers, and established Businesses.</p>
          </div>
          <div className="hero-image">
            <img src={AboutSectionImage} alt="" style={{borderRadius:"20px"}} />
          </div>
      </div>
   
  </section>
  
     </>
  )
}

export default AboutSection;