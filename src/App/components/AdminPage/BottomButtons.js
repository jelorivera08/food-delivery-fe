import React from 'react';

const BottomButtons = ({ getAllOrders, setIsUploadingMenu }) => {
  const handleEditMenuClick = () => {
    setIsUploadingMenu(true);
  };
  return (
    <div className="admin-buttons">
      <div onClick={handleEditMenuClick} className="admin-add-order-button">
        <span>Edit Menu</span>
      </div>
      <div onClick={getAllOrders} className="admin-add-order-button">
        <span>Refresh orders</span>
      </div>
    </div>
  );
};

export default BottomButtons;
