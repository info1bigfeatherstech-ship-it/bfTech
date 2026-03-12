import React, { useState, useMemo } from 'react';
import './Navbar.css';
import IgniteLogo from '../../components/IgniteLogo';
import { navRoutes } from '../../data';
import { NavLink } from 'react-router-dom';
import Socials from '../../components/Socials';
import { CgMenuRight } from 'react-icons/cg';
import Sidebar from '../../components/Sidebar';
import { convertHexToRgba } from '../../util';

function Navbar() {
  const [open, setOpen] = useState(false);
  const [drop, setDrop] = useState(false);

  const DropNavbar = () => {
    if (window.scrollY > 200) {
      setDrop(true);
    } else {
      setDrop(false);
    }
  };

  useMemo(() => {
    window.addEventListener('scroll', DropNavbar);
    return () => {
      window.removeEventListener('scroll', DropNavbar);
    };
  });

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
              className="route"
              activeClassName="active"
              key={index}
            >
              {route.name}
            </NavLink>
          ))}
        </div>

        <Socials />

        {/* Toggle Menu for Mobile */}
        <div className="menu" onClick={() => setOpen(true)}>
          <CgMenuRight />
        </div>
      </nav>
    </>
  );
}

export default Navbar;
