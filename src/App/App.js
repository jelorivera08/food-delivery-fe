import React from 'react';
import { connect } from 'react-redux';
import Welcome from './components/Welcome/Welcome';

const App = ({ login }) => {
  if (!login.isLoggedIn) {
    return <Welcome />;
  }

  return <div>henlo member</div>;
};

const mapStateToProps = (state) => ({
  login: state.login,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
