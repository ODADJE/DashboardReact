import React from 'react';
import { FaTachometerAlt } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { menuItems } from '../utils/menu';
function Menu() {
  return (
    <div>
      <ul className="menu  w-56 rounded-box">
        {menuItems.map((item) => (
          <li key={item.menuName}>
            <h2 className="menu-title">{item.menuName}</h2>
            <ul>
              {item.items.map((el) => (
                <li key={el?.label}>
                  <NavLink to={el?.link}>
                    <>{el?.icon}</>
                    {el?.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Menu;
