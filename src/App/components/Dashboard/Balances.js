import React from 'react';

const Balances = ({ debt, orders }) => {
  const totalOrders = () => {
    let total = 0;

    orders.forEach((order) => {
      total += order.price * order.quantity;
    });

    total += debt;
    return total;
  };

  return (
    <div className="balances-container">
      <div className="balances">
        <div className="outstanding-balance">
          {`Your outstanding balace: ${debt} PHP`}
        </div>
        <div className="total-balance">{`Total: ${totalOrders()} PHP`}</div>
      </div>
      <div className="add-order-button">
        <span>Add order</span>
      </div>
    </div>
  );
};

export default Balances;
