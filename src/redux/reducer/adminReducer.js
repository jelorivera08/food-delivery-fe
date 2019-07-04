import * as adminConstants from '../../App/constants/adminConstants';

const adminReducer = (
  state = {
    allOrders: [],
    snackbar: {
      open: false,
      message: '',
    },
  },
  action
) => {
  switch (action.type) {
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
      return { ...state, allOrders: action.payload };
    case adminConstants.GET_ALL_ORDERS_FAILURE:
      return {
        ...state,
        snackbar: {
          ...state.snackbar,
          open: true,
          message: 'Unable to get reducers.',
        },
      };
    default:
      return state;
  }
};

export default adminReducer;
