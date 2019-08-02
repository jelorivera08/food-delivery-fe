import React from 'react';
import { connect } from 'react-redux';
import WelcomeRight from './WelcomeRight';
import './Welcome.css';
import * as loginActions from '../../actions/loginActions';
import Snackbar from '../Snackbar/Snackbar';

const Welcome = ({
  login,
  snackbar,
  closeSnackbar,
  generateOTP,
  signup,
  invalidCredentials,
  otpId,
  validateOtp,
}) => {
  return (
    <div className="welcome">
      <WelcomeRight
        login={login}
        signup={signup}
        otpId={otpId}
        generateOTP={generateOTP}
        validateOtp={validateOtp}
        invalidCredentials={invalidCredentials}
      />

      <Snackbar {...snackbar} handleClose={closeSnackbar} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  snackbar: state.login.snackbar,
  otpId: state.login.otp.otpId,
});

const mapDispatchToProps = (dispatch) => ({
  login: (credentials) => () => dispatch(loginActions.login(credentials)),
  signup: (credentials) => dispatch(loginActions.signup(credentials)),
  invalidCredentials: () => dispatch(loginActions.invalidCredentials()),
  closeSnackbar: () => dispatch(loginActions.closeSnackbar()),
  generateOTP: (mobileNUmber) =>
    dispatch(loginActions.generateOTP(mobileNUmber)),
  validateOtp: (otpFromUser, otpId, credentials) =>
    dispatch(loginActions.validateOtp(otpFromUser, otpId, credentials)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Welcome);
