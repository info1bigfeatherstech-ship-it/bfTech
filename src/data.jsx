import { WiDayCloudyGusts } from "react-icons/wi";
import { BsShieldLock, } from "react-icons/bs";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaCode,
  FaHandshake,
  FaThreads,
  FaTwitter,
} from "react-icons/fa6";
import { FaGoogle} from "react-icons/fa";
// import { FaRegLightbulb } from "react-icons/fa";
// import { IoGitNetworkSharp } from "react-icons/io5";
import { HiOutlineLightBulb } from "react-icons/hi";
import { GrSync } from "react-icons/gr";
// import {
//   headsetImage,
//   pencilImage,
//   shieldImage,

//   //Portfolio images import
//   portfolio1,
//   portfolio2,
//   portfolio3,
//   portfolio4,
//   portfolio5,
// } from "./assets/main";
import headsetImage from "./assets/headset.png";
import pencilImage from "./assets/pencil.png";
import shieldImage from "./assets/shield.png";
import portfolio1 from "./assets/portfolio-1.jpg";
import portfolio2 from "./assets/portfolio-2.jpg";
import portfolio3 from "./assets/portfolio-3.png";
import portfolio4 from "./assets/portfolio-4.png";
import portfolio5 from "./assets/portfolio-5.png";


import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaLocationCrosshairs } from "react-icons/fa6";
import { FiPhoneCall } from "react-icons/fi";

export const navRoutes = [
  {
    id: "/",
    name: "Home",
  },
  {
    id: "about",
    name: "About",
  },
  {
    id: "portfolio",
    name: "portfolio",
  },
  {
    id: "UIdesign",
    name: "UI Design",
  },
  {
    id: "service",
    name: "Services",
  },
  {
    id: "contact",
    name: "Contact",
  },
  
];

export const whyChooseUs = [
  {
    title: "Proven Expertise",
    imageIcon: shieldImage,
    description: `With years of experience across multiple industries, our team
                brings deep knowledge and technical expertise to every project,
                ensuring solutions that are both innovative and reliable.`,
  },
  {
    title: "Customized Solutions",
    imageIcon: pencilImage,
    description: `We understand that every business is unique. Our solutions are
                tailored to fit each client's specific needs, providing maximum
                flexibility and scalability for the future.`,
  },
  {
    title: "Exceptional Support",
    imageIcon: headsetImage,
    description: `Our commitment doesn’t end at project delivery. We provide
                dedicated, ongoing support to ensure your business continues to
                succeed with our solutions.`,
  },
];


export const ourApproaches = [
  {
    title: "Client-Centered Collaboration",
    icon: FaHandshake,
    description: `We prioritize close collaboration, working directly with
                  clients to fully understand their vision and challenges. This
                  partnership ensures each solution is perfectly aligned with
                  their business goals.`,
  },
  {
    title: "Innovation-Driven Solutions",
    icon: HiOutlineLightBulb,
    description: `Innovation is at the heart of everything we do. We apply the
                  latest technologies and creative problem-solving to develop
                  solutions that drive long-term growth and competitiveness.`,
  },
  {
    title: "Agile and Adaptive",
    icon: GrSync,
    description: `Our agile approach keeps us flexible and ready to adapt to
                  changing needs. This method allows us to deliver scalable
                  solutions that grow alongside your business.`,
  },
];

export const services = [
  {
    title: "Website & E-Commerce Development",
    description:
      "Custom Website Development We craft Responsive, Tailor-made Websites that reflect your Brand and Drive results — Built for Speed, SEO, and Scalability.",
    icon: WiDayCloudyGusts,
  },
  {
    title: "UI/UX & Graphic Design",
    description:
      "We design seamless Digital Experiences that combine Intuitive Navigation with Clean, Modern Esthetics.",
    icon: BsShieldLock,
  },
  {
    title: "Digital Marketing Services",
    description:
      "Targeted ad campaigns that drive clicks, leads, and sales using Meta’s powerful audience and retargeting tools.",
    icon: FaCode,
  },
];

export const portfolio = [
  {
    title: "Secure E-Commerce Platform",
    description:
      "Developed a e-commerce platform with advanced security features, enabling safe and seamless transactions for customers worldwide.",
    image: portfolio1,
  },
  {
    title: " Digital Marketing Services Platform",
    description:
      "Grow your online presence with consistent, engaging content and strategic management across all key platforms.",
    image: portfolio2,
  },
  {
    title: "Static Business Websites",
    description:
      "Perfect for small businesses — Fast, Secure, and Beautifully Designed Websites that Showcase your Services and Expertise.",
    image: portfolio3,
  },
  {
    title: "UI/UX & Graphic Design Management",
    description:
      "Eye-catching visuals for social media, ads, and web — designed to captivate, communicate, and convert.",
    image: portfolio4,
  },
  {
    title: "Shopify Store Setup & Customization",
    description:
      "Get a stunning Shopify store, fully customized to match your Brand, with smooth product setup and payment integration.",
    image: portfolio5,
  }
];

export const contactInfo = [
  {
    title: "Email Us",
    description: "Fast and Reliable Support",
    value: "Feathers.big@gmail.com",
    icon: MdOutlineAlternateEmail,
  },
  {
    title: "Address",
    description: "Come visit us in our office",
    value: "New Rohtak Road ,Near Jain Indian Oil Petrol Pump",
   
    icon: FaLocationCrosshairs,
  },
  {
    title: "Call & Whats App Us",
    description: "Give Us a call",
    value: "+91 – 8690720398",
    icon: FiPhoneCall,
  },
];

export const socialHandles = [
  {
    name: "Instagram",
    icon: FaInstagram,
    link: "https://www.instagram.com/big.feathers1/",
  },
  {
    name: "Facebook",
    icon: FaFacebook,
    link: "https://www.facebook.com/people/Big-Feathers-Technology/61577501743758/",
  },
  {
    name: "Youtube",
    icon: FaYoutube,
    link: "https://www.youtube.com/@bigfeatherstechnology",
  },
   {
    name: "Thread",
    icon: FaThreads,
    link: "https://www.threads.com/@big.feathers1?igshid=NTc4MTIwNjQ2YQ==",
  },
  {
    name: "Twitter",
    icon: FaTwitter,
    link: "https://x.com/BigFeathersTech",
  },
  {
    name: "LinkedIn",
    icon: FaLinkedin,
    link: "https://www.linkedin.com/uas/login?session_redirect=https%3A%2F%2Fwww.linkedin.com%2Ffeed%2F%3Ftrk%3Donboarding-landing",
  },
  
  {
    name: "Google",
    icon: FaGoogle,
    link: "https://www.google.com/search?sa=X&sca_esv=cca5566734bdcf74&hl=en&authuser=3&biw=1408&bih=615&sxsrf=AE3TifNy9gtCZtA8PO1ZKMOmSJiGdZWEog:1750851189259&kgmid=/g/11xml9m0ww&q=Big+Feathers+Technology&shndl=30&shem=lcuae,uaasie&source=sh/x/loc/uni/m1/1&kgs=78c3e5f3199f0668",
  },
];




export const footer = [
  {
    
    subRoutes: [
      {
        name: "Home",
        id: "/",
      },
      {
        name: "About",
        id: "about",
      },
      {
        name: "Portfolio",
        id: "portfolio",
      },
       {
        name: "UI design",
        id: "UIdesign",
      },
      {
        name: "Services",
        id: "service",
      },
      {
        name: "Contact",
        id: "contact",
      },
    ],
  },
];