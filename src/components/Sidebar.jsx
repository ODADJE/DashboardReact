import React from 'react';
import Menu from './Menu';
import GreetUser from './GreetUser';

function Sidebar() {
  return (
    <div className="col-span-2 row-span-5 px-5 flex flex-col gap-10">
      <GreetUser />
      <Menu />
    </div>
  );
}

export default Sidebar;
