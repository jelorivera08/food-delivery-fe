import React, { useState } from 'react';
import PaymentModal from './PaymentModal';

const initialIsPayingState = {
  isOpen: false,
  orderId: '',
  orderTotal: 0,
  userDebt: 0,
  username: '',
};

const Orders = ({ transferToDebt, users, allOrders, payDebt, payOrder }) => {
  const [isPaying, setIsPaying] = useState(initialIsPayingState);

  const [debtToBePaid, setDebtToBePaid] = useState('');

  const [priceToPay, setPriceToPay] = useState('');

  const getCurrentUser = (order) => {
    let currentUser = '';
    users.forEach((user) => {
      if (user.username === order.username) {
        currentUser = user;
      }
    });

    return currentUser;
  };

  const handlePriceToPayChange = (e) => {
    setPriceToPay(e.target.value);
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
    setIsPaying(initialIsPayingState);
  };

  const handlePayDebt = () => {
    payDebt(isPaying.username, debtToBePaid);

    setDebtToBePaid('');
    setPriceToPay('');

    setIsPaying(initialIsPayingState);
  };

  const handleTransferToDebt = (orderId) => () => {
    transferToDebt(orderId);
    setDebtToBePaid('');
    setPriceToPay('');
    setIsPaying(initialIsPayingState);
  };

  const handlePayOrder = (orderId, paid) => () => {
    payOrder(orderId, Number(paid));
    setDebtToBePaid('');
    setPriceToPay('');
    setIsPaying(initialIsPayingState);
  };

  const handleDebtToBePaidChange = (e) => {
    setDebtToBePaid(e.target.value);
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
        handlePriceToPayChange={handlePriceToPayChange}
        priceToPay={priceToPay}
        handlePayOrder={handlePayOrder}
        handleTransferToDebt={handleTransferToDebt}
        transferToDebt={transferToDebt}
        handleDebtToBePaidChange={handleDebtToBePaidChange}
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
