import { FaTachometerAlt } from 'react-icons/fa';
import { FaCartShopping, FaFile, FaUserLarge } from 'react-icons/fa6';

export const menuItems = [
  {
    menuName: 'Main menu',
    items: [
      {
        label: 'Dashboard',
        link: '/dashboard',
        icon: FaTachometerAlt,
      },
      {
        label: 'Inventory',
        link: '/inventory',
      },
      {
        label: 'Production',
        link: '/production',
      },
      {
        label: 'Orders',
        link: '/orders',
        // icon: <FaCartShopping />,
      },
      {
        label: 'Reports',
        link: '/reports',
        // icon: <FaFile />,
      },
      {
        label: 'User',
        link: '/user',
        // icon: <FaUserLarge />,
      },
      {
        label: 'Settings',
        link: '/settings',
      },
    ],
  },
];

export const profileMenu = [
  {
    label: 'Profile',
    link: '/profile',
  },
  {
    label: 'Logout',
    link: '/logout',
  },
];
