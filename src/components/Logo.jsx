import React from 'react';
import { Link } from 'react-router-dom';

function Logo() {
  return (
    <Link to="/dashboard">
      <h1 className="text-2xl font-bold ">
        Stock<span className="text-primary">Mag</span>
      </h1>
    </Link>
  );
}

export default Logo;
