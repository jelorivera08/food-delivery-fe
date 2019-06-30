import React from 'react';
import { connect } from 'react-redux';
import WelcomeRight from './WelcomeRight';
import './Welcome.css';
import * as loginActions from '../../actions/loginActions';
import Snackbar from '../Snackbar/Snackbar';

const Welcome = ({ login, snackbar, closeSnackbar, signup }) => {
  return (
    <div className="welcome">
      <div className="welcome-left" />

      <WelcomeRight login={login} signup={signup} />

      <Snackbar {...snackbar} handleClose={closeSnackbar} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  snackbar: state.login.snackbar,
});

const mapDispatchToProps = (dispatch) => ({
  login: (credentials) => () => dispatch(loginActions.login(credentials)),
  signup: (credentials) => () => dispatch(loginActions.signup(credentials)),
  closeSnackbar: () => dispatch(loginActions.closeSnackbar()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Welcome);
