/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import Snackbar from '../Snackbar/Snackbar';
import { connect } from 'react-redux';
import * as loginActions from '../../actions/loginActions';
import * as dashboardActions from '../../actions/dashboardActions';
import Header from './Header';
import './Dashboard.css';
import UserProfile from './UserProfile';
import Menu from './Menu';
import OrderModal from './OrderModal';

const Dashboard = ({
  snackbar,
  logout,
  closeSnackbar,
  username,
  menu,
  debt,
  getOrders,
  putOrders,
  getMenu,
  incompleteOrders,
  deleteOrder,
  orders,
}) => {
  const [isOrdering, setIsOrdering] = useState(false);

  useEffect(() => {
    getOrders(username);
    getMenu();
  }, []);

  const handleDeleteOrder = (orderId) => {
    deleteOrder(orderId, username);
  };

  return (
    <div className="dashboard">
      <Header logout={logout} />
      <div className="dashboard-body">
        <UserProfile
          setIsOrdering={setIsOrdering}
          orders={orders}
          username={username}
          getOrders={getOrders}
          debt={debt}
          deleteOrder={handleDeleteOrder}
        />
        <Menu menu={menu} />
      </div>
      <Snackbar {...snackbar} handleClose={closeSnackbar} />

      {isOrdering && (
        <OrderModal
          setIsOrdering={setIsOrdering}
          isOrdering={isOrdering}
          incompleteOrders={incompleteOrders}
          username={username}
          putOrders={putOrders}
          menu={menu}
        />
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  snackbar: state.dashboard.snackbar,
  username: 'pop',
  debt: state.dashboard.debt,
  orders: state.dashboard.orders,
  menu: state.dashboard.menu,
  //TODO: UNCOMMENT THIS
  // username: state.dashboard.username,
});

const mapDispatchToProps = (dispatch) => ({
  closeSnackbar: () => dispatch(loginActions.closeSnackbar()),
  logout: () => dispatch(loginActions.logout()),
  getOrders: (username) => dispatch(dashboardActions.getOrders(username)),
  getMenu: () => dispatch(dashboardActions.getMenu()),
  putOrders: (orders, username) =>
    dispatch(dashboardActions.putOrders(orders, username)),
  incompleteOrders: () => dispatch(dashboardActions.incompleteOrders()),
  deleteOrder: (orderId, username) =>
    dispatch(dashboardActions.deleteOrder(orderId, username)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
