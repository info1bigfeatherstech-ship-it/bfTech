import React from 'react'
import WhatsAppImg from "../../assets/whatsapp.png";
import "./WhatsApp.css";
const WhatsApp = () => {
  return (
    <>
    <div className="whatsapp-fixed">
      <a
        className="whatsapp-link"
        href="https://wa.me/918690720398?text=Hello%20How%20can%20I%20help%20you%3F"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <span className="whatsapp-text">Hello! How can I help you?</span>
        <img className="whatsApp-img" src={WhatsAppImg} alt="" />
      </a>
    </div>
    
    </>
  )
}

export default WhatsApp