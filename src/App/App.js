import React from 'react';
import { connect } from 'react-redux';
import Welcome from './components/Welcome/Welcome';
import AdminPage from './components/AdminPage/AdminPage';
import Dashboard from './components/Dashboard/Dashboard';
import * as globalConstants from './constants/globalConstants';

const App = ({ login, type }) => {
  if (!login.isLoggedIn) {
    return <Welcome />;
  }

  if (type === globalConstants.ADMIN) {
    return <AdminPage />;
  } else {
    return <Dashboard />;
  }
};

const mapStateToProps = (state) => ({
  login: state.login,
  type: state.dashboard.type,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
