import * as loginConstants from '../../App/constants/loginConstants';
import * as dashboardConstants from '../../App/constants/dashboardConstants';

const dashboardReducer = (
  state = {
    orders: [],
    username: '',
    menu: [],
    debt: 0,
    snackbar: {
      open: false,
      message: '',
    },
  },
  action
) => {
  switch (action.type) {
    case dashboardConstants.GET_MENU_FAIL:
      return {
        ...state,
        snackbar: {
          ...state.snackbar,
          open: true,
          message: 'Unable to get menu.',
        },
      };
    case dashboardConstants.GET_MENU_SUCCESS:
      return {
        ...state,
        menu: action.payload,
      };
    case dashboardConstants.GET_ORDER_FAIL:
      return {
        ...state,
        snackbar: {
          ...state.snackbar,
          open: true,
          message: 'Unable to get orders.',
        },
      };
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
