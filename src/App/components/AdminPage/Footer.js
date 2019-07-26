import React from 'react';
import * as adminConstants from '../../constants/adminConstants';

const getStyle = (display, type) => {
  if (
    display === adminConstants.SHOW_CUSTOMERS &&
    type === adminConstants.SHOW_CUSTOMERS
  ) {
    return {
      backgroundColor: '#e4e4e4',
    };
  } else if (
    display === adminConstants.SHOW_ORDERS &&
    type === adminConstants.SHOW_ORDERS
  ) {
    return {
      backgroundColor: '#e4e4e4',
    };
  } else {
    return {};
  }
};

const Footer = ({ display, handleFooterClick }) => {
  return (
    <div className="admin-page-footer">
      <div
        onClick={handleFooterClick(adminConstants.SHOW_CUSTOMERS)}
        style={getStyle(display, adminConstants.SHOW_CUSTOMERS)}
        className="admin-page-footer-customers"
      >
        Customers
      </div>

      <div
        onClick={handleFooterClick(adminConstants.SHOW_ORDERS)}
        style={getStyle(display, adminConstants.SHOW_ORDERS)}
        className="admin-page-footer-orders"
      >
        Orders
      </div>
    </div>
  );
};

export default Footer;
