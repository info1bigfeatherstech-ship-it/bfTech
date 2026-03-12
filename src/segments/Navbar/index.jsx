import React, { useEffect, useState } from 'react';
import './Navbar.css';
import IgniteLogo from '../../components/IgniteLogo';
import { navRoutes } from '../../data';
import { NavLink } from 'react-router-dom';
import SocialMenu from '../../components/SocialMenu';
import { CgMenuRight } from 'react-icons/cg';
import Sidebar from '../../components/Sidebar';
import { convertHexToRgba } from '../../util';

function Navbar() {
  const [open, setOpen] = useState(false);
  const [drop, setDrop] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 200) {
      setDrop(true);
    } else {
      setDrop(false);
    }
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* ✅ Sidebar: pass onClose to allow closing when nav clicked */}
      <Sidebar open={open} onClose={() => setOpen(false)} />

      {/* Dark overlay behind sidebar */}
      {open && <div className="sidebar-overlay" onClick={() => setOpen(false)} />}

      <nav
        id="navbar"
        className={drop ? 'blur drop' : ''}
        style={{ background: convertHexToRgba('--bg-base', 0.8) }}
      >
        <IgniteLogo />

        {/* Normal nav links for desktop */}
        <div className="route-wrapper">
          {navRoutes.map((route, index) => (
            <NavLink
              to={route.id}
              className={({ isActive }) => `route${isActive ? ' active' : ''}`}
              key={index}
            >
              {route.name}
            </NavLink>
          ))}
        </div>

        <SocialMenu />

        {/* Toggle Menu for Mobile */}
        <div className="menu" onClick={() => setOpen(true)}>
          <CgMenuRight />
        </div>
      </nav>
    </>
  );
}

export default Navbar;
