import React from 'react';
import Menu from './Menu';
import GreetUser from './GreetUser';

function Sidebar() {
  return (
    <div className="hidden col-span-2 row-span-11 px-5 pt-5 xl:flex flex-col gap-10">
      <GreetUser />
      <Menu />
    </div>
  );
}

export default Sidebar;
