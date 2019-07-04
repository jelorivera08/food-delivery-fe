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

const AdminPage = ({
  snackbar,
  logout,
  getAllOrders,
  menu,
  allOrders,
  deleteMenuItem,
  addMenuItem,
  getMenu,
  closeSnackbar,
}) => {
  const [isUploadingMenu, setIsUploadingMenu] = useState(false);

  useEffect(() => {
    getAllOrders();
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
          <div className="admin-dashboard-header">
            Current orders are as follows.
          </div>
          <Orders allOrders={allOrders} />

          <BottomButtons
            setIsUploadingMenu={setIsUploadingMenu}
            getAllOrders={getAllOrders}
          />
        </div>
      </div>
      <Snackbar {...snackbar} handleClose={closeSnackbar} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  allOrders: state.admin.allOrders,
  menu: state.dashboard.menu,
  snackbar: state.admin.snackbar,
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(loginActions.logout()),
  getAllOrders: () => dispatch(adminActions.getAllOrders()),
  getMenu: () => dispatch(dashboardActions.getMenu()),
  addMenuItem: (menuItem) => dispatch(adminActions.addMenuItem(menuItem)),
  closeSnackbar: () => dispatch(adminActions.closeSnackbar()),
  deleteMenuItem: (menuItemId) => () =>
    dispatch(adminActions.deleteMenuItem(menuItemId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdminPage);
