import React from 'react';

const Balances = ({ setIsOrdering, debt, orders }) => {
  const totalOrders = () => {
    let total = 0;

    orders.forEach((order) => {
      total += order.price * order.quantity;
    });

    total += debt;
    return total;
  };

  const handleAddOrderClick = () => {
    setIsOrdering(true);
  };

  return (
    <div className="balances-container">
      <div className="balances">
        <div className="outstanding-balance">{`balace: ${debt} PHP`}</div>
        <div className="total-balance">{`Total: ${totalOrders()} PHP`}</div>
      </div>
      <div onClick={handleAddOrderClick} className="add-order-button">
        <span>Make an order</span>
      </div>
    </div>
  );
};

export default Balances;
