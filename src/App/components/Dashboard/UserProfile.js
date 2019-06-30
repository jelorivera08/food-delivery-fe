import React from 'react';
import './Dashboard.css';
import OrderList from './OrderList';

const UserProfile = ({ username }) => {
  return (
    <div className="user-profile-container">
      <div className="user-profile">
        <div className="user-profile-header">
          <span className="user-profile-header-text">
            {`What will it be for today? ${username}`}
          </span>
        </div>

        <div className="user-profile-subheader">
          <span className="user-profile-subheader-text">
            Your confirmed orders are as follows.
          </span>
        </div>

        <OrderList />
      </div>
    </div>
  );
};

export default UserProfile;