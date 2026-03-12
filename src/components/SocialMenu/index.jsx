import React, { useId } from 'react';
import './SocialMenu.css';
import { socialHandles } from '../../data';
import { cssPerfectShape, convertHexToRgba } from '../../util';
import { FiShare2 } from 'react-icons/fi';

export default function SocialMenu({ className = '' }) {
  const menuId = useId();

  return (
    <details className={`social-menu ${className}`} id={menuId}>
      <summary
        className="social-menu__trigger"
        style={{
          ...cssPerfectShape(40, 40),
          background: convertHexToRgba('--primary', 0.2),
        }}
        aria-label="Open social links"
      >
        <FiShare2 />
      </summary>

      <div className="social-menu__panel" role="menu" aria-label="Social links">
        {socialHandles.map((item) => (
          <a
            key={item.name}
            href={item.link}
            target="_blank"
            rel="noreferrer"
            className="social-menu__item"
            role="menuitem"
          >
            <span className="social-menu__icon" aria-hidden="true">
              <item.icon />
            </span>
            <span className="social-menu__label">{item.name}</span>
          </a>
        ))}
      </div>
    </details>
  );
}

