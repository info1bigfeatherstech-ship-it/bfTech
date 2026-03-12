import React from 'react'
import './Sidebar.css';
import { navRoutes } from '../../data';
import { cssPerfectShape } from '../../util';
import { NavLink} from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';
import SocialMenu from '../SocialMenu';
const Sidebar = ({open, onClose}) => {
  return (
    <div className={`sidebar ${open && "active"}`}>
        <div className="top">
            <div className="close-btn" 
            onClick={onClose} 
            style={{...cssPerfectShape(40,40) }}
            >
                <FaTimes/>
            </div>
        </div>
        <div className="middle">
             {
                    navRoutes.map((route,index)=>(
                      <NavLink to={route.id} 
                      className={({ isActive }) => `route${isActive ? ' active' : ''}`}
                       key={index}
                        onClick={onClose} // ✅ This closes the menu when clicked
                       >
                        {route.name}
                        </NavLink>
                    ))
                  }
        </div>
        <div className="bottom">
          <SocialMenu className="sidebar-social-menu" />
        </div>
    </div>
  )
}

export default Sidebar;