import React from 'react';
import { Link } from 'react-router-dom';

function Logo() {
  return (
    <Link to="/dashboard">
      <h1 className="text-3xl font-bold ">
        Kodas<span className="text-primary">Imo</span>
      </h1>
    </Link>
  );
}

export default Logo;
