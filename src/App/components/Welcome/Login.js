/* eslint-disable eqeqeq */
/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';

const Login = ({
  handleUsernameChange,
  handlePasswordChange,
  handleSignupClick,
  credentials,
  handleLoginClick,
}) => {
  const handleKeyDown = (e) => {
    if (e.keyCode == 13) {
      handleLoginClick(credentials)();
    }
  };

  return (
    <div className="welcome-right">
      <div className="welcome-right-header">
        <h3 className="welcome-right-header-text">Hungry? Log in. 🍔</h3>
      </div>
      <div className="welcome-right-content">
        <div className="welcome-right-content-forms">
          <input
            value={credentials.username}
            placeholder="Username"
            onChange={handleUsernameChange}
            type="text"
            className="welcome-right-input"
            onKeyDown={handleKeyDown}
          />
          <input
            value={credentials.password}
            onChange={handlePasswordChange}
            placeholder="Password"
            type="password"
            className="welcome-right-input"
            onKeyDown={handleKeyDown}
          />
        </div>

        <div className="welcome-right-bottom">
          <div className="welcome-right-bottom-text">
            <span
              onClick={handleSignupClick}
              className="welcome-right-bottom-text-span"
            >
              Not a member yet? Sign up.
            </span>
          </div>
          <button
            onClick={handleLoginClick(credentials)}
            className="welcome-right-bottom-button"
          >
            Sign in
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
