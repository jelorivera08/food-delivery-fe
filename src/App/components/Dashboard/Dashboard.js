import React from 'react';
import Snackbar from '../Snackbar/Snackbar';
import { connect } from 'react-redux';
import * as loginActions from '../../actions/loginActions';
import Header from './Header';
import './Dashboard.css';
import UserProfile from './UserProfile';
import Menu from './Menu';

const Dashboard = ({ snackbar, logout, closeSnackbar, username }) => {
  return (
    <div className="dashboard">
      <Header logout={logout} />
      <div className="dashboard-body">
        <UserProfile username={username} />
        <Menu />
      </div>
      <Snackbar {...snackbar} handleClose={closeSnackbar} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  snackbar: state.dashboard.snackbar,
  username: state.dashboard.username,
});

const mapDispatchToProps = (dispatch) => ({
  closeSnackbar: () => dispatch(loginActions.closeSnackbar()),
  logout: () => dispatch(loginActions.logout()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
