import * as adminConstants from '../../App/constants/adminConstants';

const adminReducer = (
  state = {
    allOrders: [],
  },
  action
) => {
  switch (action.type) {
    case adminConstants.GET_ALL_ORDERS_SUCCESS:
      return { ...state, allOrders: action.payload };

    default:
      return state;
  }
};

export default adminReducer;
