import React from 'react';
import { FaProductHunt, FaTachometerAlt, FaWarehouse } from 'react-icons/fa';
import { FaCartShopping, FaFile, FaGear, FaUserLarge } from 'react-icons/fa6';
import { NavLink } from 'react-router-dom';

export const menuItems = [
  {
    menuName: 'Main menu',
    items: [
      {
        label: 'Dashboard',
        link: '/dashboard',
        icon: <FaTachometerAlt />,
      },
      {
        label: 'Inventory',
        link: 'inventory',
        icon: <FaWarehouse />,
      },
      {
        label: 'Production',
        link: 'production',
        icon: <FaProductHunt />,
      },
      {
        label: 'Orders',
        link: 'orders',
        icon: <FaCartShopping />,
      },
      {
        label: 'Reports',
        link: 'reports',
        icon: <FaFile />,
      },
      {
        label: 'User',
        link: 'user',
        icon: <FaUserLarge />,
      },
      {
        label: 'Settings',
        link: 'settings',
        icon: <FaGear />,
      },
    ],
  },
];

function Menu() {
  return (
    <div>
      <ul className="menu w-48 rounded-box">
        {menuItems.map((item) => (
          <li key={item.menuName}>
            <h2 className="menu-title">{item.menuName}</h2>
            <ul>
              {item.items.map((el) => (
                <li key={el?.label}>
                  <NavLink end to={el?.link}>
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
