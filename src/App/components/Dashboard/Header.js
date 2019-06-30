import React from 'react';
import './Dashboard.css';

const Header = () => {
  return (
    <div className="header">
      <div className="header-text-left">
        <span className="header-text-left-unit">Kainan na.</span>
      </div>

      <div className="header-text-right">
        <span className="header-text-right-unit">Log out</span>
      </div>
    </div>
  );
};

export default Header;
