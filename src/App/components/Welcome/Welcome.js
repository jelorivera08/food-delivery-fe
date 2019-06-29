import React from 'react';
import { connect } from 'react-redux';
import WelcomeLeft from './WelcomeLeft';
import './Welcome.css';

const Welcome = ({ login }) => {
  return (
    <div className="welcome">
      <WelcomeLeft />
      <div className="welcome-right" />
    </div>
  );
};

const mapStateToProps = (state) => ({
  login: state.login,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Welcome);
