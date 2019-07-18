import React from 'react';

const Orders = ({ users, allOrders }) => {
  const getCurrentUser = (order) => {
    let currentUser = '';
    users.forEach((user) => {
      if (user.username === order.username) {
        currentUser = user;
      }
    });

    return currentUser;
  };
  return (
    <div className="all-orders-container">
      {allOrders.map((order) => {
        let currentUser = getCurrentUser(order);

        return (
          <div key={order.username} className="order-container">
            <div className="order-from">{order.username}</div>
            <div className="orders-container">
              {order.orders.map((order) => {
                return (
                  <div key={order.orderId} className="order-unit">
                    {`${order.quantity} ${order.name}`}
                  </div>
                );
              })}
            </div>
            <div className="orders-price">
              <div className="orders-price-row">
                <div className="orders-price-label">debt:</div>
                <div className="orders-price-value">₱ {currentUser.debt}</div>
              </div>
              <div className="orders-price-row">
                <div className="orders-price-label">price:</div>
                <div className="orders-price-value">₱ {order.orderTotal}</div>
              </div>
              <div className="orders-price-row">
                <div className="orders-price-label"> total:</div>
                <div className="orders-price-value">
                  ₱ {currentUser.debt + order.orderTotal}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Orders;
