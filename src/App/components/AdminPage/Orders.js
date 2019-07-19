import React, { useState } from 'react';
import PaymentModal from './PaymentModal';

const Orders = ({ users, allOrders, payDebt }) => {
  const [isPaying, setIsPaying] = useState({
    isOpen: false,
    orderId: '',
    orderTotal: 0,
    userDebt: 0,
    username: '',
  });

  const [debtToBePaid, setDebtToBePaid] = useState('');

  const getCurrentUser = (order) => {
    let currentUser = '';
    users.forEach((user) => {
      if (user.username === order.username) {
        currentUser = user;
      }
    });

    return currentUser;
  };

  const handleOrderContainerClick = (orderDetails, userDetails) => () => {
    setIsPaying({
      isOpen: !isPaying.isOpen,
      orderId: orderDetails._id,
      orderTotal: orderDetails.orderTotal,
      userDebt: userDetails.debt,
      username: userDetails.username,
    });
  };

  const handlePaymentModalClose = () => {
    setIsPaying({
      isOpen: false,
      orderId: '',
      orderTotal: 0,
      userDebt: 0,
      username: '',
    });
  };

  const handlePayDebt = () => {
    payDebt(isPaying.username, debtToBePaid);
  };

  return (
    <div className="all-orders-container">
      {allOrders.map((order) => {
        let currentUser = getCurrentUser(order);

        return (
          <div
            onClick={handleOrderContainerClick(order, currentUser)}
            key={order._id}
            className="order-container"
          >
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
      <PaymentModal
        setDebtToBePaid={setDebtToBePaid}
        debtToBePaid={debtToBePaid}
        handlePayDebt={handlePayDebt}
        handlePaymentModalClose={handlePaymentModalClose}
        orderId={isPaying.orderId}
        isPaying={isPaying.isOpen}
        orderTotal={isPaying.orderTotal}
        userDebt={isPaying.userDebt}
        username={isPaying.username}
      />
    </div>
  );
};

export default Orders;
