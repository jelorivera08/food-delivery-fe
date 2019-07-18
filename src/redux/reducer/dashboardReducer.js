import * as loginConstants from '../../App/constants/loginConstants';
import * as dashboardConstants from '../../App/constants/dashboardConstants';

const dashboardReducer = (
  state = {
    renderDashboard: false,
    orders: {
      orders: [],
    },
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
    case dashboardConstants.DELETE_ORDER_FAILURE:
      return {
        ...state,
        snackbar: {
          ...state.snackbar,
          open: true,
          message: 'Unable to delete order.',
        },
      };
    case dashboardConstants.DELETE_ORDER_SUCCESS:
      return {
        ...state,
        snackbar: {
          ...state.snackbar,
          open: true,
          message: 'Order successfuly deleted.',
        },
      };
    case dashboardConstants.INCOMPLETE_ORDERS:
      return {
        ...state,
        snackbar: {
          ...state.snackbar,
          open: true,
          message: 'Please complete order form.',
        },
      };
    case dashboardConstants.GET_MENU_FAIL:
      return {
        ...state,
        snackbar: {
          ...state.snackbar,
          open: true,
          message: 'Unable to get menu.',
        },
      };
    case dashboardConstants.PUT_ORDER_SUCCESS:
      return {
        ...state,
        snackbar: {
          ...state.snackbar,
          open: true,
          message: 'Order placed successfuly.',
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
        type: action.payload.type,
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
        renderDashboard: true,
      };
    case dashboardConstants.PUT_ORDERS_FAILURE:
      return {
        ...state,
        snackbar: {
          ...state.snackbar,
          open: true,
          message: 'Unable to place order.',
        },
      };
    default:
      return state;
  }
};

export default dashboardReducer;
