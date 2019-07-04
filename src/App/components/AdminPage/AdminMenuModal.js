/* eslint-disable eqeqeq */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';
import addIcon from '../../icons/add.svg';

const initialFoodState = {
  name: '',
  price: '',
};

const AdminMenuModal = ({
  setIsUploadingMenu,
  deleteMenuItem,
  addMenuItem,
  menu,
  getMenu,
}) => {
  const [food, setFood] = useState(initialFoodState);

  useEffect(() => {
    getMenu();
  }, []);

  const handleNameChange = (e) => {
    setFood({ ...food, name: e.target.value });
  };

  const handlePriceChange = (e) => {
    setFood({ ...food, price: e.target.value });
  };

  const handleAddMenuItem = () => {
    addMenuItem(food);
    setFood(initialFoodState);
  };

  const handleKeyDown = (e) => {
    if (e.keyCode == 13) {
      handleAddMenuItem();
    }
  };

  const handleConfirmClick = () => {
    setIsUploadingMenu(false);
  };

  return (
    <div className="dashboard-modal-container">
      <div className="dashboard-modal-content">
        <div className="dashboard-modal-header">
          <div className="dashboard-modal-header-text">Edit your Menu</div>
        </div>

        <div className="dashboard-modal-menu">
          <div className="dashboard-modal-menu-input">
            <div className="menu-input-name-container">
              <input
                onKeyDown={handleKeyDown}
                value={food.name}
                onChange={handleNameChange}
                placeholder="food name"
                className="menu-input-name"
                type="text"
              />
            </div>
            <div className="menu-input-name-container">
              <input
                onKeyDown={handleKeyDown}
                onChange={handlePriceChange}
                value={food.price}
                placeholder="food price"
                className="menu-input-price"
                type="text"
              />
            </div>
            <div className="dashboard-modal-menu-add-icon-container">
              <img
                onClick={handleAddMenuItem}
                className="dashboard-modal-menu-add-icon"
                src={addIcon}
                alt="add"
              />
            </div>
          </div>

          <div className="dashboard-modal-menu-list">
            {menu.map((menuItem) => {
              return (
                <div key={menuItem._id} className="dashboard-modal-menu-item">
                  <div className="dashboard-modal-menu-item-name">{`${
                    menuItem.name
                  }`}</div>
                  <div className="dashboard-modal-menu-item-price">
                    <div className="dashboard-modal-menu-item-price-label">
                      {`${menuItem.price} PHP`}{' '}
                    </div>

                    <div className="order-item-icon">
                      <DeleteForeverOutlinedIcon
                        onClick={deleteMenuItem(menuItem._id)}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="admin-edit-menu-button-container">
          <div onClick={handleConfirmClick} className="admin-edit-menu-button">
            <span>Confirm</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminMenuModal;
