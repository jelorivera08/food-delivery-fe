import * as adminConstants from '../constants/adminConstants';

export function getAllOrders() {
  return {
    type: adminConstants.GET_ALL_ORDERS,
  };
}

export function getAllOrdersSuccess(orders) {
  return {
    type: adminConstants.GET_ALL_ORDERS_SUCCESS,
    payload: orders,
  };
}
