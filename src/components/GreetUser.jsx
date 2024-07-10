import React from 'react';

function GreetUser({ name }) {
  return (
    <div className="border-b pb-7 mb border-base-300">
      <h2 className="text-2xl">
        <span className="text-primary">Welcome,</span>
        &nbsp;{name}
      </h2>
      <p className="text-base-content/65 text-xs">Here's your dashboard</p>
    </div>
  );
}

export default GreetUser;
