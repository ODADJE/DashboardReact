import React from 'react';
import { Outlet } from 'react-router-dom';

function Content() {
  return (
    <div className="row-span-11 col-span-full xl:col-span-10 bg-base-300 xl:rounded-ss-lg p-5 ">
      <Outlet />
    </div>
  );
}

export default Content;
