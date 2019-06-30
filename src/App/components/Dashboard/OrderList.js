import React from 'react';
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';

const OrderList = ({ orders }) => {
  return (
    <div className="order-list-container">
      {orders.map((order) => {
        return (
          <div key={order._id} className="order-item">
            <div className="order-item-text">
              {`• ${order.quantity} order of ${order.name} for ${
                order.price
              } PHP`}
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
