import React, { useState } from 'react';
import PaymentModal from './PaymentModal';
import check from '../../icons/check.png';

const initialIsPayingState = {
  isOpen: false,
  orderId: '',
  orderTotal: 0,
  userDebt: 0,
  isPaid: false,
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
      isPaid: orderDetails.isPaid,
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
              <div className="orders-price-label-debt">debt</div>
              <div className="orders-price-value-debt">₱{currentUser.debt}</div>
              {!order.isPaid && (
                <React.Fragment>
                  <div className="orders-price-label-price">price</div>
                  <div className="orders-price-value-price">
                    ₱{order.orderTotal}
                  </div>
                </React.Fragment>
              )}
            </div>
            {order.isPaid && (
              <div className="paid-container">
                <img className="paid-container-check" src={check} alt="check" />
                <div className="paid-container-label">paid</div>
              </div>
            )}
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
        isPaid={isPaying.isPaid}
      />
    </div>
  );
};

export default Orders;
