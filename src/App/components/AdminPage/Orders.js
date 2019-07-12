import React from 'react';

const Orders = ({ users, allOrders }) => {
  const formatAllOrders = () => {
    const uniformOrders = [];
    allOrders.forEach((order) => {
      if (
        uniformOrders.filter(
          (uOrder) => uOrder.orderFromUser === order.orderFromUser
        ).length > 0
      ) {
        uniformOrders.forEach((val, index) => {
          if (val.orderFromUser === order.orderFromUser) {
            uniformOrders[index].orders.push({
              name: order.name,
              quantity: order.quantity,
              price: order.price,
              _id: order._id,
            });
          }
        });
      } else {
        uniformOrders.push({
          orderFromUser: order.orderFromUser,
          orders: [
            {
              name: order.name,
              quantity: order.quantity,
              price: order.price,
              _id: order._id,
            },
          ],
        });
      }
    });

    let uniformOrdersWithUsers = [];

    uniformOrders.forEach((uniformOrder) => {
      users.forEach((user) => {
        if (user.username === uniformOrder.orderFromUser) {
          let orderTotal = 0;
          uniformOrder.orders.forEach((order) => {
            orderTotal += order.price * order.quantity;
          });
          uniformOrdersWithUsers = [
            ...uniformOrdersWithUsers,
            {
              ...uniformOrder,
              debt: user.debt,
              orderTotal,
            },
          ];
        }
      });
    });

    return uniformOrdersWithUsers;
  };

  const formattedOrders = formatAllOrders();

  console.log();

  return (
    <div className="all-orders-container">
      {formattedOrders.map((formattedOrder) => {
        return (
          <div key={formattedOrder.orderFromUser} className="order-container">
            <div className="order-from">{formattedOrder.orderFromUser}</div>
            <div className="orders-container">
              {formattedOrder.orders.map((order) => {
                return (
                  <div key={order._id} className="order-unit">
                    {`${order.quantity} ${order.name}`}
                  </div>
                );
              })}
            </div>
            <div className="orders-price">
              <div className="orders-price-row">
                <div className="orders-price-label">debt:</div>
                <div className="orders-price-value">
                  ₱ {formattedOrder.debt}
                </div>
              </div>
              <div className="orders-price-row">
                <div className="orders-price-label">order price:</div>
                <div className="orders-price-value">
                  ₱ {formattedOrder.orderTotal}
                </div>
              </div>
              <div className="orders-price-row">
                <div className="orders-price-label"> total:</div>
                <div className="orders-price-value">
                  ₱ {formattedOrder.debt + formattedOrder.orderTotal}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Orders;
