import React from 'react';

const BottomButtons = ({ getAllOrders }) => {
  return (
    <div className="admin-buttons">
      <div className="admin-add-order-button">
        <span>Upload Menu</span>
      </div>
      <div onClick={getAllOrders} className="admin-add-order-button">
        <span>Refresh orders</span>
      </div>
    </div>
  );
};

export default BottomButtons;
