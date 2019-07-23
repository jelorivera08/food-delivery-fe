import * as adminConstants from '../../App/constants/adminConstants';

const adminReducer = (
  state = {
    allOrders: [],
    snackbar: {
      open: false,
      message: '',
    },
    users: [],
  },
  action
) => {
  switch (action.type) {
    case adminConstants.GET_ALL_USERS_SUCCESS:
      return {
        ...state,
        users: action.users,
      };
    case adminConstants.DELETE_ALL_ORDERS_SUCCESS:
      return {
        ...state,
        snackbar: {
          ...state.snackbar,
          open: true,
          message: 'all orders deleted.',
        },
      };
    case adminConstants.DELETE_ALL_ORDERS_FAILURE:
      return {
        ...state,
        snackbar: {
          ...state.snackbar,
          open: true,
          message: 'unable to delete orders.',
        },
      };
    case adminConstants.DELETE_MENU_ITEM_FAILURE:
      return {
        ...state,
        snackbar: {
          ...state.snackbar,
          open: true,
          message: 'unable to delete menu item.',
        },
      };
    case adminConstants.DELETE_MENU_ITEM_SUCCESS:
      return {
        ...state,
        snackbar: {
          ...state.snackbar,
          open: true,
          message: 'menu item successfuly deleted.',
        },
      };
    case adminConstants.ADD_MENU_ITEM_FAILURE:
      return {
        ...state,
        snackbar: {
          ...state.snackbar,
          open: true,
          message: 'unable to add menu item.',
        },
      };
    case adminConstants.ADD_MENU_ITEM_SUCCESS:
      return {
        ...state,
        snackbar: {
          ...state.snackbar,
          open: true,
          message: 'menu item added.',
        },
      };
    case adminConstants.CLOSE_SNACKBAR:
      return {
        ...state,
        snackbar: {
          ...state.snackbar,
          open: false,
          message: '',
        },
      };
    case adminConstants.GET_ALL_ORDERS_SUCCESS:
      return {
        ...state,
        allOrders: action.payload,
        snackbar: {
          ...state.snackbar,
          open: true,
          message: 'Orders refreshed.',
        },
      };
    case adminConstants.GET_ALL_ORDERS_FAILURE:
      return {
        ...state,
        snackbar: {
          ...state.snackbar,
          open: true,
          message: 'Unable to get reducers.',
        },
      };
    case adminConstants.PAY_DEBT_SUCCESS:
      return {
        ...state,
        snackbar: {
          ...state.snackbar,
          open: true,
          message: 'debt successfuly paid.',
        },
      };
    case adminConstants.PAY_DEBT_FAILURE:
      return {
        ...state,
        snackbar: {
          ...state.snackbar,
          open: true,
          message: 'unable to pay debt.',
        },
      };
    case adminConstants.GET_ALL_USERS_FAILURE:
      return {
        ...state,
        snackbar: {
          ...state.snackbar,
          open: true,
          message: 'unable to get all users.',
        },
      };

    case adminConstants.TRANSFER_TO_DEBT_SUCCESS:
      return {
        ...state,
        snackbar: {
          ...state.snackbar,
          open: true,
          message: 'Successfuly transferred to debt.',
        },
      };

    case adminConstants.ADMIN_API_CALL_FAILURE:
    case adminConstants.ADMIN_API_CALL_SUCCESS:
      return {
        ...state,
        snackbar: {
          ...state.snackbar,
          open: true,
          message: action.message,
        },
      };

    default:
      return state;
  }
};

export default adminReducer;
