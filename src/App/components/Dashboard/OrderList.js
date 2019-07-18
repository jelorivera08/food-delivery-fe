import React from 'react';
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';

const OrderList = ({ setIsOrdering, deleteOrder, userOrderDetails }) => {
  const handleDeleteClick = (id, index) => () => {
    deleteOrder(id, index);
  };

  const handleAddOrder = () => {
    setIsOrdering(true);
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
      {userOrderDetails.orders.length <= 0 && (
        <div className="order-item-none">
          <div onClick={handleAddOrder} className="order-item-text-none">
            No orders yet. Add one?
          </div>
        </div>
      )}

      {userOrderDetails.orders.map((order, index) => {
        return (
          <div key={order.name} className="order-item">
            <div className="order-item-text">
              {`• ${order.quantity} order of ${order.name} for ${order.price *
                order.quantity} PHP`}
            </div>
            {!isCutoff && (
              <div className="order-item-icon">
                <DeleteForeverOutlinedIcon
                  onClick={handleDeleteClick(userOrderDetails._id, index)}
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
