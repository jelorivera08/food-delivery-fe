import React from 'react';
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';

const OrderList = ({ orders }) => {
  console.log(orders);
  return (
    <div className="order-list-container">
      {orders.map((order) => {
        return (
          <div className="order-item">
            <div className="order-item-text">
              {`• ${order.quantity} order of ${order.name}`}
            </div>
            <div className="order-item-icon">
              <DeleteForeverOutlinedIcon />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default OrderList;
