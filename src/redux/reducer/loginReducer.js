import * as loginConstants from '../../App/constants/loginConstants';

const loginReducer = (
  state = {
    isLoggedIn: false,
    snackbar: {
      open: false,
      message: '',
    },
  },
  action
) => {
  switch (action.type) {
    case loginConstants.LOGIN_SUCCESS:
      return { ...state, isLoggedIn: true };
    case loginConstants.LOGIN_FAILURE:
      return {
        ...state,
        snackbar: {
          ...state.snackbar,
          open: true,
          message: 'Login failed. :(',
        },
      };
    case loginConstants.CLOSE_SNACKBAR:
      return {
        ...state,
        snackbar: {
          ...state.snackbar,
          open: false,
          message: '',
        },
      };

    default:
      return state;
  }
};

export default loginReducer;
