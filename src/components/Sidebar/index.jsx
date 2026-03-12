import React from 'react'
import './Sidebar.css';
import { navRoutes } from '../../data';
import { cssPerfectShape } from '../../util';
import { NavLink} from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';
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
                      className="route"
                       activeClass="active" 
                       smooth={true}
                      spy={true} 
                      offset={-50}
                       key={index}
                        onClick={onClose} // ✅ This closes the menu when clicked
                       >
                        {route.name}
                        </NavLink>
                    ))
                  }
        </div>
    </div>
  )
}

export default Sidebar;