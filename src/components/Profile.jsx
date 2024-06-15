import React from 'react';

function Profile() {
  return (
    <div className="flex gap-3">
      <div className="avatar">
        <div className="w-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
          <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </div>
      <div>
        <h4>Naya Rachel</h4>
        <p className="text-base-content/65">naya.rachel@gmail.com</p>
      </div>
    </div>
  );
}

export default Profile;
