import React from "react";
// import "./PortfolioSection.css";
import ourwork1 from "../../assets/portfolio-1.jpg";
import "../OurWork/OurWork.css"



const items = [
    {
        id: 1,
        title: "Ecommerce Website",
        desc: "Discover premium products at unbeatable prices – all in one place. Shop smart, shop fast, shop with ease!",
        // img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop",
        img: ourwork1,
        cta: "Go Live Now",
         href: "https://toytingle.in/"
    },
    {
        id: 2,
        // title: "Home Decor Website",
        title:"Manufacturers Website",
        desc: "From design to delivery, we specialize in manufacturing solutions that power businesses with reliability and excellence.",
        // img:image2,
        img:ourwork1,
        cta: "Go Live Now",
        href: "https://okumaindia.com/"
    },
   
     {
        id: 3,
        title: "Laws & Legal Websites",
        desc: "Legal website provides trusted guidance, expert resources, and professional support to help you navigate complex legal matters with confidence.",
        img:ourwork1,
        cta: "Go Live Now",
        href: "https://vidhilegalpolicy.in/"
    },
     {
        id: 4,
        title: "Import Export Website",
        desc: "Your trusted partner in international trade, delivering products across borders with efficiency and integrity. Expanding businesses, globally.",
        img:ourwork1,
        cta: "Go Live Now",
        href: "https://mayaexportsltd.com/"
    },
     {
        id: 5,
        title: "Static IT Website",
        desc: "We build powerful digital solutions that help businesses grow and stay ahead in the tech-driven world.",
        img:ourwork1,
        cta: "Go Live Now",
        href: "https://kitaz.in/"
    },
     {
        id: 6,
        title: "Health & Care Website",
        desc: "Experience the difference of clean, safe, and healthy water — crafted to energize your day and nourish your life.",
        img:ourwork1,
        cta: "Go Live Now",
        href: "https://kangenagic.com/"
    },
];


export default function OurWork() {
    return (
        <section className="portfolioOurwork" aria-labelledby="portfolio-headingOurwork">
            <div className="portfolio__headerOurwork">
                <h2 id="portfolio-headingOurwork">Portfolio</h2>
                <p>Selected work showcasing UI, performance, and clean code.</p>
            </div>


            <div className="portfolio__gridOurwork">
                {items.map((item, i) => (
                    <article className="cardOurwork fade-upOurwork" style={{ "--delay": `${i * 80}ms` }} key={item.id}>
                        <a className="card__linkOurwork" href={item.href} aria-label={item.title}>
                            <div className="card__mediaOurwork">
                                <img loading="lazy" src={item.img} alt={item.title} />
                            </div>
                        </a>
                        <div className="card__bodyOurwork">
                            <h3 className="card__titleOurwork">{item.title}</h3>
                            <p className="card__descOurwork">{item.desc}</p>
                            <a className="card__btnOurwork" href={item.href}>{item.cta}</a>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}