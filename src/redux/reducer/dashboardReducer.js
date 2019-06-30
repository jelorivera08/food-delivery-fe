import * as loginConstants from '../../App/constants/loginConstants';

const dashboardReducer = (
  state = {
    username: '',
    snackbar: {
      open: false,
      message: '',
    },
  },
  action
) => {
  switch (action.type) {
    case loginConstants.LOGIN_SUCCESS:
      return {
        ...state,
        username: action.payload,
        snackbar: {
          ...state.snackbar,
          open: true,
          message: 'Welcome.',
        },
      };
    case loginConstants.CLOSE_SNACKBAR:
      return {
        ...state,
        username: action.payload,
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

export default dashboardReducer;
