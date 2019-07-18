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
import Footer from './Footer';

const Dashboard = ({
  snackbar,
  logout,
  closeSnackbar,
  username,
  menu,
  debt,
  getOrders,
  putOrders,
  renderDashboard,
  getMenu,
  incompleteOrders,
  deleteOrder,
  userOrderDetails,
}) => {
  const [isOrdering, setIsOrdering] = useState(false);
  const [showMenuWhenMobile, setShowMenuWhenMobile] = useState(false);

  useEffect(() => {
    getOrders(username);
    getMenu();
    watchResize();
  }, []);

  const watchResize = () => {
    window.addEventListener('resize', function() {
      if (window.innerWidth >= 1000) {
        setShowMenuWhenMobile(false);
      }
    });
  };

  const handleDeleteOrder = (orderId, index) => {
    deleteOrder(orderId, index, username);
  };

  if (!renderDashboard) return null;

  return (
    <div className="dashboard">
      <Header logout={logout} />
      <div className="dashboard-body">
        <UserProfile
          setIsOrdering={setIsOrdering}
          userOrderDetails={userOrderDetails}
          username={username}
          getOrders={getOrders}
          debt={debt}
          deleteOrder={handleDeleteOrder}
        />
        <Menu showMenuWhenMobile={showMenuWhenMobile} menu={menu} />
      </div>
      <Footer
        showMenuWhenMobile={showMenuWhenMobile}
        setShowMenuWhenMobile={setShowMenuWhenMobile}
      />
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
  debt: state.dashboard.debt,
  userOrderDetails: state.dashboard.orders,
  menu: state.dashboard.menu,
  username: state.dashboard.username,
  renderDashboard: state.dashboard.renderDashboard,
});

const mapDispatchToProps = (dispatch) => ({
  closeSnackbar: () => dispatch(loginActions.closeSnackbar()),
  logout: () => dispatch(loginActions.logout()),
  getOrders: (username) => dispatch(dashboardActions.getOrders(username)),
  getMenu: () => dispatch(dashboardActions.getMenu()),
  putOrders: (orders, username) =>
    dispatch(dashboardActions.putOrders(orders, username)),
  incompleteOrders: () => dispatch(dashboardActions.incompleteOrders()),
  deleteOrder: (orderId, index, username) =>
    dispatch(dashboardActions.deleteOrder(orderId, index, username)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
