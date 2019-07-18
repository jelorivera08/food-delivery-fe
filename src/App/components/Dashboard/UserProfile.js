import React from 'react';
import './Dashboard.css';
import OrderList from './OrderList';
import Balances from './Balances';

const UserProfile = ({
  deleteOrder,
  setIsOrdering,
  username,
  userOrderDetails,
  debt,
}) => {
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

        <OrderList
          setIsOrdering={setIsOrdering}
          deleteOrder={deleteOrder}
          userOrderDetails={userOrderDetails}
        />

        <Balances
          setIsOrdering={setIsOrdering}
          debt={debt}
          userOrderDetails={userOrderDetails}
        />
      </div>
    </div>
  );
};

export default UserProfile;
