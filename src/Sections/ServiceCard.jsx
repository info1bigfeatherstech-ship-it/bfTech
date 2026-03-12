import React from 'react';
import './ServiceCard.css'; // <- if this is the correct file
import { FaCode, FaPalette, FaBullhorn, FaMobileAlt, FaSearch, FaCloud, FaCogs, FaShieldAlt } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const cardData = [
     {
    icon: <FaCode />,
    title: "Website & E-Commerce Development",
    description: "Fast, Secure, and Beautifully Designed Websites that Showcase your Services and Expertise."
  },
  {
    icon: <FaCode />,
    title: "Static Business Websites",
    description: "We craft responsive, tailor-made websites that reflect your brand and drive results — built for speed, UX, and scalability."
  },
  {
    icon: <FaPalette />,
    title: "UI/UX & Graphic Design",
    description: "We design seamless Digital Experiences that combine Intuitive Navigation with Clean, Modern Esthetics."
  },
  {
    icon: <FaPalette />,
    title: "Logo Design & Brand Identity",
    description: "Make a lasting first impression with a memorable Logo and a cohesive visual identity tailored to your Brand."
  },
  {
    icon: <FaPalette />,
    title: "Shopify Store Setup & Customization",
    description: "Get a stunning Shopify store,fully customized to match your Brand, with smooth product setup and payment integration."
  },
  {
    icon: <FaBullhorn />,
    title: "Digital Marketing Services",
    description: "Targeted ad campaigns that drive clicks, leads, and sales using Meta’s powerful audience and retargeting tools."
  },
  {
    icon: <FaBullhorn />,
    title: "Marketing Graphics & Visual Assets",
    description: "Eye-catching visuals for social media, ads, and web — designed to captivate, communicate, and convert."
  },
  {
    icon: <FaMobileAlt />,
    title: "Google Ads (PPC Campaigns)",
    description: "Get instant visibility and ROI-focused results with smart, budget-optimized Google Search and Display ads."
  },
  {
    icon: <FaSearch />,
    title: "Email Marketing & Automation",
    description: "Convert leads into customers with personalized email campaigns, newsletters, and automated follow-ups."
  },
  {
    icon: <FaCloud />,
    title: "Content Marketing",
    description: "Engage your audience with high-quality content — from blog posts to social media — that builds trust and boosts SEO."
  },
  {
    icon: <FaCogs />,
    title: "Social Media Marketing",
    description: "Grow your online presence with consistent, engaging content and strategic management across all key platforms."
  },
  {
    icon: <FaShieldAlt />,
    title: "Whats App Marketing",
    description: "We ensure your digital assets are protected and compliant with industry standards."
  }
];

const SectionCard = () => {
  return (
    <section className="cards-section" style={{marginTop:"100px"}}>
      <div className="cards-header">
        <h2 className="cards-header__title">Our Services</h2>
        <p className="cards-header__subtitle">
          Empowering Your Business with Tailored IT Solutions
        </p>
      </div>
      <div className="cards-container">
        {cardData.map((card, index) => (
          <div className="card-box" key={index}>
            <div className="card-icon">{card.icon}</div>
            <h3 className="card-box__title">{card.title}</h3>
            <p className="card-desc">{card.description}</p>
            <NavLink to="/contact" className="card-btn">
              Explore <span aria-hidden="true">→</span>
            </NavLink>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SectionCard;
