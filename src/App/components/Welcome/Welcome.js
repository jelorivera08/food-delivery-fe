import React from 'react';
import { connect } from 'react-redux';
import WelcomeRight from './WelcomeRight';
import './Welcome.css';
import * as loginActions from '../../actions/loginActions';

const Welcome = ({ login }) => {
  return (
    <div className="welcome">
      <div className="welcome-left" />

      <WelcomeRight login={login} />
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  login: (credentials) => () => dispatch(loginActions.login(credentials)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Welcome);
