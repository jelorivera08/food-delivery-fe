import React from 'react';

const Balances = ({}) => {
  return (
    <div className="balances-container">
      <div className="balances">
        <div className="outstanding-balance">
          Your outstanding balace: 75 php
        </div>
        <div className="total-balance">Total: 100 php</div>
      </div>
      <div className="add-order-button">
        <span>Add order</span>
      </div>
    </div>
  );
};

export default Balances;
