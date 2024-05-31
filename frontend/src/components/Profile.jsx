import React from 'react';
import { useState, useEffect } from "react";

const Profile = ({ isAuthenticated }) => {
  let user = JSON.parse(localStorage.getItem('user'));
  user = JSON.parse(localStorage.getItem(user[0].username));
return (
    <>
        {isAuthenticated ?
        <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md space-y-4">
            <h2 className="text-2xl font-bold">Profile</h2>
            <p><strong>Username:</strong> {user[0].username}</p>
            <p><strong>Email:</strong> {user[0].email}</p>
            <p><strong>Name:</strong> {user[0].name}</p>
        </div> : <p>Please log in to see your profile.</p>}
    </>
  );
};

export default Profile;
