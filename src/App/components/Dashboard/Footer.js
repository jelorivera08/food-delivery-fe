import React from 'react';

const Footer = ({ setShowMenuWhenMobile, showMenuWhenMobile }) => {
  const handleClick = () => {
    setShowMenuWhenMobile(!showMenuWhenMobile);
  };

  return (
    <div className="dashboard-footer" onClick={handleClick}>
      {showMenuWhenMobile ? 'Hide Menu.' : 'Show Menu.'}
    </div>
  );
};

export default Footer;
