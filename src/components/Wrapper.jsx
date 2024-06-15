import React from 'react';

function Wrapper({ children }) {
  return (
    <div className="h-screen w-screen grid grid-cols-12 grid-rows-6">
      {children}
    </div>
  );
}

export default Wrapper;
