// File: src/components/PortfolioSection.jsx
import React from "react";
import "./PortfolioSection.css";
import image1 from "../assets/portfolio-1.jpg";
import image15 from "../assets/portfolio-5.png";
   



const items = [
    {
        id: 1,
        title: "Fashion Website",
        img: image1,
        cta: "Go Live Now",
         href: "https://grey-dinosaur-487902.hostingersite.com/"
    },
    {
        id: 2,
        title:"Thinkbot AI",
        img:image15,
        cta: "Go Live Now",
        href: "https://67f3a22f9c7c328ee543e644--leafy-alfajores-01c46d.netlify.app/"
    },
   
     {
        id: 3,
        title: "Modern Shop",
        img:image1,
        cta: "Go Live Now",
        href: "https://chocolate-elk-365561.hostingersite.com/"
    },
     {
        id: 4,
        title: "Home Decor",
        img:image1,
        cta: "Go Live Now",
        href: "https://antiquewhite-fly-132206.hostingersite.com/"
    },
     {
        id: 5,
        title: "Indian Spices & Food",
        img:image1,
        cta: "Go Live Now",
        href: "https://lightgrey-ferret-638950.hostingersite.com/"
    },
   
    
     {
        id: 6,
        title: "Real Estate ",
        img:image1,
        cta: "Go Live Now",
        href: "https://cyan-woodcock-703242.hostingersite.com/"
    },

     {
        id: 7,
        title: "Digital Marketing",
        img:image1,
        cta: "Go Live Now",
        href: "https://maroon-alpaca-550410.hostingersite.com/"
    },

     {
        id: 8,
        title: "IT Company",
        img:image1,
        cta: "Go Live Now",
        href: "https://lawngreen-okapi-479197.hostingersite.com/"
    },

     {
        id: 9,
        title: "Animated & Modern Website ",
        img:image1,
        cta: "Go Live Now",
        href: "https://lemonchiffon-nightingale-566117.hostingersite.com/"
    },

      {
        id: 10,
        title: "Interior & Construction",
        img:image1,
        cta: "Go Live Now",
        href: "https://slateblue-bat-209473.hostingersite.com/"
    },
    

    {
        id: 11,
        title: "Photography Company ",
        img:image1,
        cta: "Go Live Now",
        href: "https://lime-jellyfish-757730.hostingersite.com/"
    },

     {
        id: 12,
        title: "Law & Legal",
        img:image1,
        cta: "Go Live Now",
        href: "https://lavenderblush-heron-638150.hostingersite.com/"
    },

      {
        id: 13,
        title: "Beauty & MakeOver ",
        img:image1,
        cta: "Go Live Now",
        href: "https://deepskyblue-boar-649611.hostingersite.com/"
    },

      {
        id: 14,
        title: "Cosmetics",
        img:image1,
        cta: "Go Live Now",
        href: "https://deeppink-caribou-743292.hostingersite.com/"
    },

     {
        id: 15,
        title: "Art & Craft ",
        img:image1,
        cta: "Go Live Now",
        href: "https://mediumorchid-locust-282251.hostingersite.com/"
    },

     {
        id: 16,
        title: "Blogger ",
        img:image1,
        cta: "Go Live Now",
        href: "https://cornflowerblue-turkey-362644.hostingersite.com/"
    },

      {
        id: 17,
        title: "Medical ",
        img:image1,
        cta: "Go Live Now",
        href: "https://maroon-pony-771360.hostingersite.com/"
    },

    {
        id: 18,
        title: "Music Production House",
        img:image1,
        cta: "Go Live Now",
        href: "https://steelblue-cobra-492811.hostingersite.com/"
    },

     {
        id: 19,
        title: "VFX Studio",
        img:image1,
        cta: "Go Live Now",
        href: "https://linen-finch-450850.hostingersite.com/"
    },

    //  {
    //     id: 20,
    //     title: "Fitness",
    //     img:image26,
    //     cta: "Go Live Now",
    //     href: "https://linen-finch-450850.hostingersite.com/"
    // },
];


export default function UXdesign() {
    return (
        <section className="portfolio2" aria-labelledby="portfolio-heading">
            <div className="portfolio__header">
                <h2 id="portfolio-heading">UI/UX Design</h2>
                <p>Selected work showcasing UI, performance, and clean code.</p>
            </div>


            <div className="portfolio__grid">
                {items.map((item, i) => (
                    <article className="card fade-up" style={{ "--delay": `${i * 80}ms` }} key={item.id}>
                        <a className="card__link" href={item.href} aria-label={item.title}>
                            <div className="card__media">
                                <img loading="lazy" src={item.img} alt={item.title} />
                            </div>
                        </a>
                        <div className="card__body">
                            <h3 className="card__title">{item.title}</h3>
                            <a className="card__btn" href={item.href}>{item.cta}</a>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}