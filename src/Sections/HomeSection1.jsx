import React from 'react';
import './HomeSection1.css';

// ✅ Correct relative imports (inside src/)
import VRImage from '../assets/vr.png';
import PersonImage from '../assets/pic-1.png';
import { whyChooseUs, ourApproaches } from '../data'; // data/index.js
import { convertHexToRgba, cssPerfectShape } from '../util';
import { NavLink } from 'react-router-dom';
import Achievement from '../segments/Achievement';
const HomeSection1 = () => {
  return (
    <>
<Achievement/>
    <section id="about">
        <div className="container" style={{marginTop:"35px",marginBottom:"-50px"}}>
            <div className="left-column">
                 <div className="spotlight"/>
                 <div className="vision-container">
                    <div className="vision-item">
                        <div className="vision-content">
                            <h2>Our Vision</h2>
                            <h4 className="title">Transforming Technology into Progress</h4>
                            <p className="description"> Our vision is to empower businesses with practical,
                         cutting-edge IT solutions that drive growth, streamline processes, and enhance competitiveness.</p>
                        </div>
                        <div className="image-container">
                            <img src={VRImage} alt="" />
                        </div>
                    </div>

                    <div className="vision-item">
                        <div className="spotlight"/>
                        <div className="vision-content">
                            <h2>Who We Are</h2>
                            <h4 className="title">Your Trusted Technology Partner </h4>
                            <p className="description"> We are experienced IT professionals delivering
                                 tailored tech solutions to meet each client’s unique goals.</p>
                        </div>
                        <div className="image-container">
                            <img src={PersonImage} alt="" />
                        </div>
                    </div>
                 </div>

                <div className="why-choose-us-container">
                {whyChooseUs.map((list,index)=>(
                    <div className="blur why-choose-us" style={{background:convertHexToRgba('--bg-secondry',0.3)}} key={index}>
                        <div className="icon"> 
                            <img src={list.imageIcon} alt="" />
                        </div>
                        <h3 className="title">
                            {list.title}
                        </h3>
                        <p className="description">
                            {list.description}
                        </p>
                    </div>

                ))}
                </div>

            </div>
            <div className="right-column">
                <h2 className="title" style={{fontSize: "35px",textAlign: "center",marginTop: "-12px", color:"#FFFFFF"}}>Our Approach</h2>
                <div className="boxes-wrapper"> 
                {ourApproaches.map((approach, index) => (
                    <div className="approach" key={index}>
                        <div className="icon" style={{...cssPerfectShape(50,50), background: convertHexToRgba('--primary', 0.1)}}> 
                            <approach.icon />
                        </div>
                        <div>
                        <h3 className="title">{approach.title}</h3>
                        <p className="description">{approach.description}</p>

                        </div>
                    </div>
                ))}
                 <div className="contact-us ">
                    <h2 className="title">
                         Reach Out to see how our IT solutions can transform your business success.
                    </h2>
                    <NavLink to="/contact" className="btn primary" smooth={true}>Contact Us</NavLink>
                 </div>
                </div>
            </div>
        </div>
                
    </section>
    </>
  )
}

export default HomeSection1;