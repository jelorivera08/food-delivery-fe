import * as dashboardConstants from '../constants/dashboardConstants';

export function getOrders(username) {
  return {
    type: dashboardConstants.GET_ORDERS,
    payload: username,
  };
}

export function getOrdersSuccess(orders) {
  return {
    type: dashboardConstants.GET_ORDER_SUCCESS,
    payload: orders,
  };
}
