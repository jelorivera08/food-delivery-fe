import React, { useState } from 'react';
import Login from './Login';
import Signup from './Signup';

const WelcomeRight = ({ login, signup }) => {
  const [showLogin, setShowLogin] = useState(true);
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
  });

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
      <Signup
        handlePasswordChange={handlePasswordChange}
        handleUsernameChange={handleUsernameChange}
        credentials={credentials}
        handleSignupClick={signup}
        handleLoginClick={handleLoginClick}
      />
    );
  }
};

export default WelcomeRight;
