import './App.css';
import Home from './Home';
import About from './segments/About/About';
import Contact from './segments/Contact';
import Footer from './segments/Footer/Footer';
import Navbar from './segments/Navbar';
import ServicesPage from './segments/Services';
import ScrollToTop from './ScrollToTop'; // path may vary
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WhatsApp from './components/WhatsApp';
import PortfolioSection from './Sections/UXdesign';
import OurWork from './segments/OurWork/OurWork';
import UXdesign from './Sections/UXdesign';

function App() {
  return (
  <>
   <BrowserRouter>
   <ScrollToTop/>

        <Navbar/>
        <WhatsApp/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About />} />
          <Route path="/UIdesign" element={<UXdesign />} />
                   <Route path="/portfolio" element={<OurWork />} />

          <Route path="/service" element={<ServicesPage />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
  </>
  ); 
}

export default App;
