import React from 'react';

const Orders = ({ allOrders }) => {
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

    return uniformOrders;
  };

  const formattedOrders = formatAllOrders();

  return (
    <div className="all-orders-container">
      {formattedOrders.map((formattedOrder) => {
        return (
          <div key={formattedOrder.name} className="order-container">
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
          </div>
        );
      })}
    </div>
  );
};

export default Orders;
