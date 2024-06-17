import React from 'react';
import { FaRightFromBracket, FaUserPen } from 'react-icons/fa6';
import { NavLink } from 'react-router-dom';

export const profileMenu = [
  {
    label: 'Profile',
    link: '/profile',
    icon: <FaUserPen />,
  },
  {
    label: 'Logout',
    link: '/logout',
    icon: <FaRightFromBracket />,
  },
];

function Profile() {
  return (
    <div className="flex gap-2 items-center lg:gap-3 h-full">
      <div className="avatar dropdown dropdown-bottom dropdown-end">
        <div
          tabIndex={0}
          role="button"
          className=" w-7 lg:w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 "
        >
          <img
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
            alt=""
          />
        </div>
        <ul
          tabIndex={0}
          className=" dropdown-content z-[1] menu p-4 lg:p-2 shadow bg-base-100 rounded-box w-auto lg:w-40"
        >
          {profileMenu.map((item) => (
            <li key={item.label}>
              <NavLink end to={item.link}>
                {item.icon}
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className="hidden xl:block">
        <h4 className="text-sm">Naya Rachel</h4>
        <p className="text-xs text-base-content/65">naya.rachel@gmail.com</p>
      </div>
    </div>
  );
}

export default Profile;
