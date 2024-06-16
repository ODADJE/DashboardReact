import React from 'react';
import Logo from '../../components/Logo';
import { Link } from 'react-router-dom';

function Error() {
  return (
    <div className="w-screen h-screen flex items-center justify-center flex-col gap-3">
      <Logo />
      <h1 className="text-2xl">
        <span className="text-error">Error:</span>Page not found
      </h1>
      <Link to="/dashboard" className="btn btn-primary font-bold">
        Go to Dashboard
      </Link>
    </div>
  );
}

export default Error;
