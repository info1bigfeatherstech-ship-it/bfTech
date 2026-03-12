import React from 'react'
import './Hero.css';
import { NavLink} from 'react-router-dom';
import {convertHexToRgba} from '../../util';
import {FaArrowTrendUp} from 'react-icons/fa6';
import heroImage from '../../assets/hero.webp'; 
import BoxAnimation from '../../assets/BoxAnimation';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Hero = () => {
  return (
    <section id="hero">
      <BoxAnimation/>
        <div className="container"> 
            <div>
                <h4 className="text-primary hero-subtitle" style={{background:convertHexToRgba('--primary',0.2),Color:"#FFFFFF"}}>
                 <span className="text-color">Digital Innovation And Expansion </span> 
                  </h4>
                 <h1 className="hero-title">Building Brands with<br/><span className="primary-text">Digital Feathers</span> </h1>
            <p className="hero-description">BigFeather brings your ideas to life with custom  web, and mobile solutions. 
                From concept to launch, we drive your business forward.</p>
                <div className="buttons-wrapper">
                <NavLink to="service" smooth={true} className="btn primary">Get Started<FaArrowTrendUp/></NavLink>
                </div>
            </div>
            <div className="hero-image">
            <LazyLoadImage
  src={heroImage}
  alt="Hero"
  effect="opacity"
  className="hero-image"
/>
            </div>
        </div>
    </section>
  )
}

export default Hero;

