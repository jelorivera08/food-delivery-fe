/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import Header from '../Dashboard/Header';
import './AdminPage.css';
import * as loginActions from '../../actions/loginActions';
import { connect } from 'react-redux';
import Orders from './Orders';
import * as adminActions from '../../actions/adminActions';
import * as dashboardActions from '../../actions/dashboardActions';
import BottomButtons from './BottomButtons';
import AdminMenuModal from './AdminMenuModal';
import Snackbar from '../Snackbar/Snackbar';
import Footer from './Footer';

const AdminPage = ({
  snackbar,
  logout,
  getAllOrders,
  menu,
  allOrders,
  payDebt,
  deleteMenuItem,
  deleteAllOrders,
  addMenuItem,
  getMenu,
  payOrder,
  closeSnackbar,
  users,
  getAllUsers,
  transferToDebt,
}) => {
  const [isUploadingMenu, setIsUploadingMenu] = useState(false);

  useEffect(() => {
    getAllOrders();
    getAllUsers();
  }, []);

  return (
    <div className="dashboard">
      {isUploadingMenu && (
        <AdminMenuModal
          setIsUploadingMenu={setIsUploadingMenu}
          deleteMenuItem={deleteMenuItem}
          addMenuItem={addMenuItem}
          menu={menu}
          getMenu={getMenu}
        />
      )}
      <Header logout={logout} />
      <div className="admin-dashboard">
        <div className="admin-dashboard-container">
          <div className="admin-dashboard-header">Current orders</div>
          <Orders
            payOrder={payOrder}
            payDebt={payDebt}
            users={users}
            allOrders={allOrders}
            transferToDebt={transferToDebt}
          />

          <BottomButtons
            getAllOrders={getAllOrders}
            setIsUploadingMenu={setIsUploadingMenu}
          />
        </div>
      </div>
      <Footer />
      <Snackbar {...snackbar} handleClose={closeSnackbar} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  allOrders: state.admin.allOrders,
  menu: state.dashboard.menu,
  snackbar: state.admin.snackbar,
  users: state.admin.users,
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(loginActions.logout()),
  getAllOrders: () => dispatch(adminActions.getAllOrders()),
  getMenu: () => dispatch(dashboardActions.getMenu()),
  addMenuItem: (menuItem) => dispatch(adminActions.addMenuItem(menuItem)),
  closeSnackbar: () => dispatch(adminActions.closeSnackbar()),
  deleteMenuItem: (menuItemId) => () =>
    dispatch(adminActions.deleteMenuItem(menuItemId)),
  getAllUsers: () => dispatch(adminActions.getAllUsers()),
  payDebt: (username, paid) => dispatch(adminActions.payDebt(username, paid)),
  transferToDebt: (orderId) => dispatch(adminActions.transferToDebt(orderId)),
  payOrder: (orderId, paid) => dispatch(adminActions.payOrder(orderId, paid)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdminPage);
