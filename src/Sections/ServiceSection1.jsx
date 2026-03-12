import React from 'react'
import './ServiceSection.css';
import { services} from '../data';
import { convertHexToRgba, cssPerfectShape  } from '../util';
import {NavLink} from 'react-router-dom';
import {FaArrowRightLong} from 'react-icons/fa6'; 

const ServiceSection1 = () => {
  return (
    <>
     <section id="services" style={{marginTop:"35px"}}>
            <div className="spotlight"/>
            <div className="container">
                <div className="section-header">
                    <h3>Our Services</h3>
                    <h2>Empowering Your Business with Tailored IT Solutions</h2>
                </div>
                <div className="services">
                    {services.map((service, index) => (
                        <div className="blur service"
                            style={{background:convertHexToRgba('--bg-secondry',0.3)}}                 
                               key={index}>
                            <div className="icon" style={{...cssPerfectShape(70, 70), background: convertHexToRgba('--primary', 0.1)}}>
                                <service.icon />
                            </div>
                            <div className="middle">
                                <h3 className="title">{service.title}</h3>
                                <p className="line-clamp-3 description">{service.description}</p>
                            </div>
                            <div className="bottom">
                                <NavLink to="/service" className="btn primary" smooth={true}>Explore<FaArrowRightLong/></NavLink>
                                </div> 
                        </div>
                    ))}
                </div>
            </div>  
            </section>
    </>
  )
}

export default ServiceSection1;