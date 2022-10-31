import React from 'react';
import './profile.css';

const Profile = ({ avatarUrl, username }) => {
  return (
    <div className="profile">
      <img src={avatarUrl} alt="username" />
      <h3>{username}</h3>
    </div>
  );
};

export default Profile;
