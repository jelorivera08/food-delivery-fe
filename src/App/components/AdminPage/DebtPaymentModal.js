import React, { useState } from 'react';
import close from '../../icons/close.svg';

const DebtPaymentModal = ({
  isPayingDebt,
  handlePaymentModalClose,
  handlePayDebt,
}) => {
  const [debtToBePaid, setDebtToBePaid] = useState('');
  const { displayPayDebtModal, userDebt, username } = isPayingDebt;

  if (displayPayDebtModal) {
    return (
      <div className="dashboard-modal-container">
        <div className="dashboard-modal-content">
          <div className="dashboard-modal-header">
            <div className="dashboard-modal-header-text">
              Payment for {username}
            </div>
            <div
              className="dashboard-modal-header-close"
              onClick={handlePaymentModalClose}
            >
              <img src={close} alt="close" />
            </div>
          </div>
          <div className="payment-modal-content">
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
                  onChange={(e) => setDebtToBePaid(e.target.value)}
                  value={debtToBePaid}
                  placeholder="amount"
                  className="payment-modal-pay-input"
                />
              </div>

              <div className="payment-modal-pay-buttons">
                <button
                  onClick={handlePayDebt(
                    username,
                    debtToBePaid,
                    setDebtToBePaid
                  )}
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
    return null;
  }
};

export default DebtPaymentModal;
