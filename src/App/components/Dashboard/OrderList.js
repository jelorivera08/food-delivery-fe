import React from 'react';
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';

const OrderList = () => {
  return (
    <div className="order-list-container">
      <div className="order-item">
        <div className="order-item-text"> • 1 order of adobo with rice</div>
        <div className="order-item-icon">
          <DeleteForeverOutlinedIcon />
        </div>
      </div>
      <div className="order-item">
        <div className="order-item-text"> • 1 order of m with rice</div>
        <div className="order-item-icon">
          <DeleteForeverOutlinedIcon />
        </div>
      </div>
      <div className="order-item">
        <div className="order-item-text">• 1 order of askjhfsakj with rice</div>
        <div className="order-item-icon">
          <DeleteForeverOutlinedIcon />
        </div>
      </div>
    </div>
  );
};

export default OrderList;
