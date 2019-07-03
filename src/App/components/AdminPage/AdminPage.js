/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import Header from '../Dashboard/Header';
import './AdminPage.css';
import * as loginActions from '../../actions/loginActions';
import { connect } from 'react-redux';
import Orders from './Orders';
import * as adminActions from '../../actions/adminActions';
import BottomButtons from './BottomButtons';

const AdminPage = ({ logout, getAllOrders, allOrders }) => {
  useEffect(() => {
    getAllOrders();
  }, []);

  return (
    <div className="dashboard">
      <Header logout={logout} />
      <div className="admin-dashboard">
        <div className="admin-dashboard-container">
          <div className="admin-dashboard-header">
            Current orders are as follows.
          </div>
          <Orders allOrders={allOrders} />
          <BottomButtons getAllOrders={getAllOrders} />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  allOrders: state.admin.allOrders,
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(loginActions.logout()),
  getAllOrders: () => dispatch(adminActions.getAllOrders()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdminPage);
