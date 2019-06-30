import React from 'react';

const UserProfile = () => {
  return (
    <div className="menu-container">
      <div className="menu">
        <div className="menu-header">
          <span className="menu-header-text">{`Today's menu. 😋`}</span>
        </div>

        <div className="menu-item-container">
          <div className="menu-item">
            <div className="menu-item-text">Adobo for 50 PHP</div>
          </div>
          <div className="menu-item">
            <div className="menu-item-text">Menudo for 15 PHP</div>
          </div>
          <div className="menu-item">
            <div className="menu-item-text">Togue for 20 PHP</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
