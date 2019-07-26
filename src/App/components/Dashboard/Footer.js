import React from 'react';

const Footer = ({ setShowMenuWhenMobile, showMenuWhenMobile }) => {
  const handleClick = (type) => () => {
    if (type === 'menu') {
      setShowMenuWhenMobile(true);
    } else {
      setShowMenuWhenMobile(false);
    }
  };

  return (
    <div className="dashboard-footer">
      <div
        style={{
          backgroundColor: showMenuWhenMobile && '#e4e4e4',
        }}
        className="dashboard-footer-menu"
        onClick={handleClick('menu')}
      >
        Menu
      </div>

      <div
        style={{
          backgroundColor: !showMenuWhenMobile && '#e4e4e4',
        }}
        className="dashboard-footer-order"
        onClick={handleClick('order')}
      >
        Order
      </div>
    </div>
  );
};

export default Footer;
