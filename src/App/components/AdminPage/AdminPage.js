/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import Header from '../Dashboard/Header';
import './AdminPage.css';
import * as loginActions from '../../actions/loginActions';
import { connect } from 'react-redux';
import Orders from './Orders';
import * as adminActions from '../../actions/adminActions';

const AdminPage = ({ logout, getAllOrders, allOrders }) => {
  useEffect(() => {
    getAllOrders();
  }, []);

  return (
    <div className="dashboard">
      <Header logout={logout} />
      <Orders allOrders={allOrders} />
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
