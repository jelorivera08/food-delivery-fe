import React from 'react';
import Snackbar from '../Snackbar/Snackbar';
import { connect } from 'react-redux';
import * as loginActions from '../../actions/loginActions';
import Header from './Header';
import './Dashboard.css';

const Dashboard = ({ snackbar, logout, closeSnackbar }) => {
  return (
    <div className="dashboard">
      <Header logout={logout} />
      this is dashboard
      <Snackbar {...snackbar} handleClose={closeSnackbar} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  snackbar: state.dashboard.snackbar,
});

const mapDispatchToProps = (dispatch) => ({
  closeSnackbar: () => dispatch(loginActions.closeSnackbar()),
  logout: () => dispatch(loginActions.logout()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
