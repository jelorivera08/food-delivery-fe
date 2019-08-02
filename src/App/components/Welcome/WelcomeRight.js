import React, { useState } from 'react';
import Login from './Login';
import Signup from './Signup';
import MobileNumberConfirmationModal from './MobileNumberConfirmationModal';

const WelcomeRight = ({
  login,
  signup,
  invalidCredentials,
  generateOTP,
  otpId,
  validateOtp,
}) => {
  const [showLogin, setShowLogin] = useState(false);
  const [
    showMobileNumberConfirmation,
    setShowMobileNumberConfirmation,
  ] = useState(false);

  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
    mobileNumber: '',
  });

  const handleCancelClick = () => {
    setShowMobileNumberConfirmation(false);
  };

  const handleSignupClick = () => {
    setShowLogin(false);
  };

  const handleLoginClick = () => {
    setShowLogin(true);
  };

  const handleUsernameChange = (e) => {
    setCredentials({
      ...credentials,
      username: e.target.value,
    });
  };

  const handlePasswordChange = (e) => {
    setCredentials({
      ...credentials,
      password: e.target.value,
    });
  };

  const handleMobileNumberChange = (e) => {
    if (e.target.value.length >= 13) return;
    setCredentials({
      ...credentials,
      // remove non-numeric characters
      mobileNumber: e.target.value.replace(/\D/g, ''),
    });
  };

  const handleSignUpClick = (credentials) => () => {
    if (
      credentials.username.includes(' ') ||
      credentials.password.includes(' ') ||
      credentials.username.length <= 1 ||
      credentials.password.length <= 1 ||
      credentials.mobileNumber.length <= 1
    ) {
      return invalidCredentials();
    }

    setShowMobileNumberConfirmation(true);
    generateOTP(credentials.mobileNumber);
  };

  const handleConfirmOtpClick = (otpFromUser) => {
    validateOtp(otpFromUser, otpId, credentials);
  };

  if (showLogin) {
    return (
      <Login
        handlePasswordChange={handlePasswordChange}
        handleUsernameChange={handleUsernameChange}
        credentials={credentials}
        handleLoginClick={login}
        handleSignupClick={handleSignupClick}
      />
    );
  } else {
    return (
      <React.Fragment>
        <Signup
          handleMobileNumberChange={handleMobileNumberChange}
          handlePasswordChange={handlePasswordChange}
          handleUsernameChange={handleUsernameChange}
          credentials={credentials}
          handleSignupClick={handleSignUpClick}
          handleLoginClick={handleLoginClick}
        />

        <MobileNumberConfirmationModal
          handleCancelClick={handleCancelClick}
          handleConfirmOtpClick={handleConfirmOtpClick}
          showMobileNumberConfirmation={showMobileNumberConfirmation}
        />
      </React.Fragment>
    );
  }
};

export default WelcomeRight;
