import * as loginConstants from '../../App/constants/loginConstants';

const loginReducer = (
  state = {
    isLoggedIn: false,
    snackbar: {
      open: false,
      message: '',
    },
    otp: {
      otpId: '',
      otpFromUser: '',
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
    case loginConstants.INVALID_CREDENTIALS:
      return {
        ...state,
        snackbar: {
          ...state.snackbar,
          open: true,
          message: 'Username or password should not contain spaces.',
        },
      };

    case loginConstants.SAVE_GENERATED_OTP:
      return {
        ...state,
        otp: {
          ...state.otp,
          otpId: action.otpId,
        },
      };
    case loginConstants.INVALID_OTP:
      return {
        ...state,
        snackbar: {
          ...state.snackbar,
          open: true,
          message: 'You have entered an invalid OTP.',
        },
      };
    case loginConstants.GENERATE_OTP_FAILURE:
      return {
        ...state,
        snackbar: {
          ...state.snackbar,
          open: true,
          message: 'Unable to generate OTP.',
        },
      };

    default:
      return state;
  }
};

export default loginReducer;
