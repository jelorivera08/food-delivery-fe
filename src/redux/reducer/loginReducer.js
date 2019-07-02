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
    case loginConstants.LOGOUT:
      return { ...state, isLoggedIn: false };
    case loginConstants.LOGIN_FAILURE:
      return {
        ...state,
        snackbar: {
          ...state.snackbar,
          open: true,
          message: 'Please sign up first.',
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
    case loginConstants.SIGNUP_SUCCESS:
      return {
        ...state,
        snackbar: {
          ...state.snackbar,
          open: true,
          message: 'Sign up success! Please log in.',
        },
      };
    case loginConstants.SIGNUP_FAILURE:
      return {
        ...state,
        snackbar: {
          ...state.snackbar,
          open: true,
          message: 'Already a member? Sign in.',
        },
      };

    default:
      return state;
  }
};

export default loginReducer;
