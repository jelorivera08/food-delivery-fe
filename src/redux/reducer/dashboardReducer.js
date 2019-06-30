import * as loginConstants from '../../App/constants/loginConstants';
import * as dashboardConstants from '../../App/constants/dashboardConstants';

const dashboardReducer = (
  state = {
    orders: [],
    username: '',
    debt: 0,
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
        username: action.payload.username,
        debt: action.payload.debt,
        snackbar: {
          ...state.snackbar,
          open: true,
          message: 'Welcome.',
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
    case dashboardConstants.GET_ORDER_SUCCESS:
      return {
        ...state,
        orders: action.payload,
      };

    default:
      return state;
  }
};

export default dashboardReducer;
