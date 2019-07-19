import React from 'react';

const PaymentModal = ({ isPaying, orderId, orderTotal }) => {
  if (isPaying) {
    return (
      <div className="dashboard-modal-container">
        <div className="dashboard-modal-content">
          <div className="dashboard-modal-header">
            <div className="dashboard-modal-header-text">Payment</div>
          </div>

          <div className="payment-modal-content">
            <div className="payment-modal-pay-order">
              <div className="payment-modal-pay-order-total">
                <div className="payment-modal-pay-order-total-title">
                  {`₱${orderTotal}`}
                </div>
                <div className="payment-modal-pay-order-total-subtitle">
                  Order price
                </div>
              </div>

              <div className="payment-modal-pay-container-input">
                <input
                  placeholder="amount"
                  className="payment-modal-pay-input"
                />
              </div>

              <div className="payment-modal-pay-buttons">
                <button className="payment-modal-pay-button">To Debt</button>
                <button className="payment-modal-pay-button">Pay</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <React.Fragment />;
  }
};

export default PaymentModal;
