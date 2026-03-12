import React from 'react'
import{Swiper,SwiperSlide} from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import {portfolio} from '../../data';
import './Portfolio.css'; // ✅ Correct — inside the same folder
const Portfolio = () => {
  return (
    <section id="portfolio">
        <div className="portfolio-container">
            <div className="section-header">
                <h3>Our Portfolio</h3>
                <h2>Showcasing Innovative IT Solutions</h2>
            </div>
          <Swiper className="portfolio-wrapper" slidesPerView={3} 
          spaceBetween={30} 
          modules={[Autoplay]}
          autoplay={true}
            loop={true}
            speed={1000}
            grabCursor={true}
          breakPoints={{
            600: {slidesPerView: 2},
            900: {slidesPerView: 3},
          }}
          >
            {portfolio.map((list, index) => (
                <SwiperSlide className="portfolio" key={index}>
                    <div className="image-wrapper">
                        <img src={list.image} alt={list.title} />
                    </div>
                    <div className="content-wrapper">
                        <h3 className="title">{list.title}</h3>
                        <p className="description">{list.description}</p>
                    </div>
                </SwiperSlide>
            ))}
          </Swiper>
        </div>
    </section>
  )
}

export default Portfolio