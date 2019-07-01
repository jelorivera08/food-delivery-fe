import React, { useState, useEffect } from 'react';
import Select from './OrderSelect';
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';

const OrderModal = ({ menu }) => {
  const [orders, setOrders] = useState([
    {
      name: '',
      quantity: '',
      total: 0,
    },
  ]);

  useEffect(() => {
    const ordersLastIndex = orders.length - 1;

    if (
      orders[ordersLastIndex].name.length > 0 &&
      orders[ordersLastIndex].quantity
    ) {
      let ordersClone = [...orders];
      ordersClone.push({
        name: '',
        quantity: '',
        total: 0,
      });

      setOrders(ordersClone);
    }
  }, [orders]);

  const handleNameChange = (index) => (e) => {
    let ordersClone = [...orders];

    ordersClone[index] = { ...ordersClone[index], name: e.target.value };

    setOrders(ordersClone);
  };

  const handleQuantityChange = (index) => (e) => {
    let ordersClone = [...orders];

    ordersClone[index] = { ...ordersClone[index], quantity: e.target.value };

    setOrders(ordersClone);
  };

  const getTotal = (index) => {
    let orderClone = [...orders];
    let indexedOrder = orderClone[index];
    let total = 0;

    menu.map((menuItem) => {
      if (menuItem.name === indexedOrder.name) {
        total = menuItem.price * indexedOrder.quantity;
      }
    });

    return total;
  };

  const deleteOrder = (index) => () => {
    let orderClone = [...orders];
    orderClone.splice(index, 1);

    setOrders(orderClone);
  };

  return (
    <div className="dashboard-modal-container">
      <div className="dashboard-modal-content">
        <div className="dashboard-modal-header">
          <div className="dashboard-modal-header-text">Add an order</div>
        </div>

        <div className="dashboard-modal-selects">
          {orders.map((order, index) => {
            return (
              <div
                key={order.name}
                className="dashboard-modal-selects-container"
              >
                <Select
                  value={order.name}
                  handleChange={handleNameChange(index)}
                  type="Food"
                  menu={menu}
                />
                <Select
                  value={order.quantity}
                  handleChange={handleQuantityChange(index)}
                  type="Quantity"
                  menu={menu}
                />
                <div className="dashboard-modal-selects-total">
                  <div className="dashboard-modal-selects-total-label">
                    Total
                  </div>
                  <div className="dashboard-modal-selects-total-text">
                    {`${getTotal(index)} PHP`}
                  </div>
                </div>
                {index !== 0 && (
                  <div className="dashboard-modal-selects-total-delete">
                    <DeleteForeverOutlinedIcon
                      onClick={deleteOrder(index)}
                      fontSize="large"
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="dashboard-modal-buttons-container">
          <div className="dashboard-modal-buttons-container-button-cancel">
            <span>Cancel</span>
          </div>
          <div className="dashboard-modal-buttons-container-button-confirm">
            <span>Confirm</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderModal;
