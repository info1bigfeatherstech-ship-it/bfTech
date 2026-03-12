import React from 'react';
import './IgniteLogo.css';
import logoImage from '../../assets/logo.png';
function IgniteLogo () {
  return (
    <div className="logo"> 
      <img src={logoImage} alt="Ignite Logo" />
    </div>
  )
}

export default  IgniteLogo; 