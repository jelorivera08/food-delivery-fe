import React from 'react';
import close from '../../icons/close.svg';

const PaymentModal = ({
  isPaying,
  handlePaymentModalClose,
  userDebt,
  handlePayDebt,
  priceToPay,
  debtToBePaid,
  handlePriceToPayChange,
  orderId,
  handleDebtToBePaidChange,
  orderTotal,
  handleTransferToDebt,
  handlePayOrder,
  isPaid,
}) => {
  if (isPaying) {
    return (
      <div className="dashboard-modal-container">
        <div className="dashboard-modal-content">
          <div className="dashboard-modal-header">
            <div className="dashboard-modal-header-text">Payment</div>
            <div
              className="dashboard-modal-header-close"
              onClick={handlePaymentModalClose}
            >
              <img src={close} alt="close" />
            </div>
          </div>
          <div className="payment-modal-content">
            {!isPaid && (
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
                    onChange={handlePriceToPayChange}
                    value={priceToPay}
                    placeholder="amount"
                    className="payment-modal-pay-input"
                  />
                </div>

                <div className="payment-modal-pay-buttons">
                  <button
                    onClick={handleTransferToDebt(orderId)}
                    className="payment-modal-pay-button"
                  >
                    To Debt
                  </button>
                  <button
                    onClick={handlePayOrder(orderId, priceToPay)}
                    className="payment-modal-pay-button"
                  >
                    Pay
                  </button>
                </div>
              </div>
            )}

            <div className="payment-modal-pay-debt">
              <div className="payment-modal-pay-order-total">
                <div className="payment-modal-pay-order-total-title">
                  {`₱${userDebt}`}
                </div>
                <div className="payment-modal-pay-order-total-subtitle">
                  Debt
                </div>
              </div>

              <div className="payment-modal-pay-container-input">
                <input
                  onChange={handleDebtToBePaidChange}
                  value={debtToBePaid}
                  placeholder="amount"
                  className="payment-modal-pay-input"
                />
              </div>

              <div className="payment-modal-pay-buttons">
                <button
                  onClick={handlePayDebt}
                  className="payment-modal-pay-button"
                >
                  Pay
                </button>
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
