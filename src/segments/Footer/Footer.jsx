import React from 'react';
import './Footer.css';
import IgniteLogo from "../../components/IgniteLogo";
import Socials from "../../components/Socials";
import { footer ,contactInfo } from '../../data';
import {NavLink} from "react-router-dom";
const Footer = () => {
  return (
    <footer>
        <div className="container">
            <section className="box-wrapper">
              <div className="box">
              <IgniteLogo/>
              </div>
              <div className="box">
                <h3 className="title">Contact Details</h3>
                {contactInfo.map((info,index)=>(
                  <div className="route" key={index}>
                    <div className="icon">
                      <info.icon/>
                    </div>
                     <p className="contact-value">{info.value}</p>
                  </div>
                ))}
              </div>
               {footer.map((list,index)=>(
                <div className="box" key={index}>
                  <h3 className="title">{list.title}</h3>
                  <div className="routes">
                    {
                      list.subRoutes.map((route,index)=>(
                        <NavLink to={route.id} className="route" key={index}>{route.name}</NavLink>
                      ))
                    }
                  </div>
                </div>
              ))}
              {/* ✅ Box 4: Social Icons aligned right */}
  <div className="box socials-box">
    <div className="socials">
      <h1>Follow Us On</h1>
      <Socials />
    </div>
  </div>
            </section>
        </div>
        <div className="footer-bottom">
                &copy; {new Date().getFullYear()} <span className="copyright">Big Feathers </span>| Powered by <span className="copyright">Big Feathers</span> 
            </div>
    </footer>
  )
}

export default Footer