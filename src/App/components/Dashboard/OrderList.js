import React from 'react';
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';

const OrderList = ({ orders }) => {
  return (
    <div className="order-list-container">
      {orders.length <= 0 && (
        <div className="order-item">
          <div className="order-item-text">No orders yet.</div>
        </div>
      )}

      {orders.map((order) => {
        return (
          <div key={order._id} className="order-item">
            <div className="order-item-text">
              {`• ${order.quantity} order of ${order.name} for ${order.price *
                order.quantity} PHP`}
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
