import React from 'react';
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';

const OrderList = ({ deleteOrder, orders }) => {
  const handleDeleteClick = (id) => () => {
    deleteOrder(id);
  };

  const checkIfCutoff = () => {
    let time = new Date().toLocaleTimeString();

    let timeSplit = time.split(':');

    if (timeSplit[0] === '11') {
      return true;
    }

    return false;
  };

  const isCutoff = checkIfCutoff();

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
            {!isCutoff && (
              <div className="order-item-icon">
                <DeleteForeverOutlinedIcon
                  onClick={handleDeleteClick(order._id)}
                />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default OrderList;
