import React from 'react';

const UserProfile = ({ menu }) => {
  return (
    <div className="menu-container">
      <div className="menu">
        <div className="menu-header">
          <span className="menu-header-text">{`Today's menu. 😋`}</span>
        </div>

        <div className="menu-item-container">
          {menu.map((menuItem) => {
            return (
              <div key={menuItem._id} className="menu-item">
                <div className="menu-item-text">{`${menuItem.name} for ${
                  menuItem.price
                } PHP`}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
