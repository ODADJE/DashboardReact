import React from 'react';
import { FaTachometerAlt } from 'react-icons/fa';
import {
  FaChartLine,
  FaGear,
  FaHouseChimney,
  FaUserLarge,
  FaUsers,
  FaUsersLine,
} from 'react-icons/fa6';
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
        label: 'Properties',
        link: 'properties',
        icon: <FaHouseChimney />,
      },
      {
        label: 'Clients',
        link: 'clients',
        icon: <FaUsers />,
      },
      {
        label: 'Owners',
        link: 'owners',
        icon: <FaUsersLine />,
      },
      {
        label: 'Reports',
        link: 'reports',
        icon: <FaChartLine />,
      },
      {
        label: 'Users',
        link: 'users',
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
