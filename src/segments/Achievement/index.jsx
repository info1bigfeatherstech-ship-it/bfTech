import React from 'react'
import Odometer from "react-odometerjs"; 
import "odometer/themes/odometer-theme-default.css";
import {useState,useEffect} from 'react';
import './Achievement.css';

const Achievement = () => {
    const [clients, setClients ] = useState(0);
    const [satisfaction, setSatisfaction ] = useState(0); 
    const [projects, setProjects ] = useState(0);
    useEffect(() => {
     const timeout = setTimeout(() => {
        setClients(100);
        setSatisfaction(99.99);
        setProjects(500);
      
     },2000)
    
      return () => clearTimeout(timeout);
    });
  return (
    <section id="achievement" >
        <div className="container">

        <div className="achievement">
            <p className="sub-title">Trusted By </p>
            <Odometer value={clients} className="title"/>
            <p className="sub-downtitle">Clients</p>
            <p className="description"> Building lasting partnerships through reliable IT services.</p>
        </div>

        <div className="achievement">
            <p className="sub-title">Clients With </p>
            <Odometer value={satisfaction} className="title"/>
            <p className="sub-downtitle">Percent Satisfaction</p>
            <p className="description"> Delivering IT solutions that boost productivity. </p>
        </div>

        <div className="achievement">
            <p className="sub-title">Deployed </p>
            <Odometer value={projects } className="title"/>
            <p className="sub-downtitle">IT Projects</p>
            <p className="description">  We focus on your goals and tailor solutions accordingly.</p>
        </div>

        </div>
        
    </section>
  )
}

export default Achievement ;