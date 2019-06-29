/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';

const Login = ({ handleLoginClick }) => {
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
            placeholder="Username"
            type="text"
            className="welcome-right-input"
          />
          <input
            placeholder="Password"
            type="password"
            className="welcome-right-input"
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
          <button className="welcome-right-bottom-button">Sign up</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
