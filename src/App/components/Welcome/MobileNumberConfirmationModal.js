import React, { useState } from 'react';

const MobileNumberConfirmationModal = ({
  showMobileNumberConfirmation,
  handleCancelClick,
  handleConfirmOtpClick,
}) => {
  const [otpFromUser, setOtpFromUser] = useState('');

  if (!showMobileNumberConfirmation) return null;

  const handleConfirmClick = (otpFromUser) => {
    handleConfirmOtpClick(otpFromUser);
    setOtpFromUser('');
  };

  const handleKeyDown = (e) => {
    if (e.keyCode == 13) {
      handleConfirmOtpClick(otpFromUser);
      setOtpFromUser('');
    }
  };

  const handleCancel = () => {
    setOtpFromUser('');
    handleCancelClick();
  };

  return (
    <div className="dashboard-modal-container">
      <div className="dashboard-modal-content">
        <div className="dashboard-modal-header">
          <div className="dashboard-modal-header-text">
            Confirm your mobile number
          </div>
        </div>

        <div className="modal-mobile-number-otp-container">
          <input
            onKeyDown={handleKeyDown}
            value={otpFromUser}
            onChange={(e) => setOtpFromUser(e.target.value)}
            className="modal-mobile-number-otp"
            placeholder="Enter OTP here"
          />

          <div className="modal-button-container">
            <button onClick={handleCancel} className="modal-button">
              Cancel
            </button>
            <button
              className="modal-button"
              onClick={() => handleConfirmClick(otpFromUser)}
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNumberConfirmationModal;
