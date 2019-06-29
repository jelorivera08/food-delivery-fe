import React from 'react';
import { connect } from 'react-redux';

const Login = ({ login }) => {
  return <div>henlo u r logged in</div>;
};

const mapStateToProps = (state) => ({
  login: state.login,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
