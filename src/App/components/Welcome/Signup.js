/* eslint-disable eqeqeq */
/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';

const Login = ({
  handleUsernameChange,
  handlePasswordChange,
  credentials,
  handleLoginClick,
  handleSignupClick,
}) => {
  const handleKeyDown = (e) => {
    if (e.keyCode == 13) {
      handleSignupClick(credentials)();
    }
  };

  return (
    <div className="welcome-right">
      <div className="welcome-right-header">
        <h3 className="welcome-right-header-text">
          Hello! Sign up it's free. 😄
        </h3>
      </div>
      <div className="welcome-right-content">
        <div className="welcome-right-content-forms">
          <input
            value={credentials.username}
            onChange={handleUsernameChange}
            placeholder="Username"
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
              onClick={handleLoginClick}
              className="welcome-right-bottom-text-span"
            >
              Already a member? Log in.
            </span>
          </div>
          <button
            onClick={handleSignupClick(credentials)}
            className="welcome-right-bottom-button"
          >
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
