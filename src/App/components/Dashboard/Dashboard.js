import React from 'react';
import Snackbar from '../Snackbar/Snackbar';
import { connect } from 'react-redux';
import * as loginActions from '../../actions/loginActions';

const Dashboard = ({ snackbar, closeSnackbar }) => {
  return (
    <div>
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
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
