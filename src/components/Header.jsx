import React from 'react';
import Logo from './Logo';
import Tab from './Tab';
import LeftSide from './LeftSide';

function Header() {
  return (
    <div className="col-span-full row-span-1 flex items-center px-5 justify-between">
      <Logo />
      <Tab items={['Market', 'Wallet', 'Tools']} />
      <LeftSide />
    </div>
  );
}

export default Header;
