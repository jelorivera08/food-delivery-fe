import React from 'react';

const BottomButtons = ({ deleteAllOrders, setIsUploadingMenu }) => {
  const handleEditMenuClick = () => {
    setIsUploadingMenu(true);
  };
  return (
    <div className="admin-buttons">
      <div onClick={handleEditMenuClick} className="admin-add-order-button">
        <span>Edit Menu</span>
      </div>
      <div onClick={deleteAllOrders} className="admin-add-order-button">
        <span>Clear orders</span>
      </div>
    </div>
  );
};

export default BottomButtons;
