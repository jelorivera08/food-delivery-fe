import React from 'react';
import { connect } from 'react-redux';
import Welcome from './components/Welcome/Welcome';
import Dashboard from './components/Dashboard/Dashboard';

const App = ({ login }) => {
  if (!login.isLoggedIn) {
    return <Welcome />;
  }

  return <Dashboard />;
};

const mapStateToProps = (state) => ({
  login: state.login,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
