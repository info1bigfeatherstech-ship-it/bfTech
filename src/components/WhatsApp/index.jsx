import React from 'react'
import WhatsAppImg from "../../assets/whatsapp.png";
import "./WhatsApp.css";
const WhatsApp = () => {
  return (
    <>
    <div className="whatsapp-fixed">
      <a href="https://wa.me/918690720398?text=Hello How Can I help you ?" target="_blank" rel="noopener noreferrer">
        <span className="whatsapp-text">Hello! How can I help you?</span>
        <img className="whatsApp-img" src={WhatsAppImg} alt="WhatsApp Img" />
      </a>
    </div>
    
    </>
  )
}

export default WhatsApp