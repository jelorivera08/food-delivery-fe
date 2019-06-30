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

export function getMenu() {
  return {
    type: dashboardConstants.GET_MENU,
  };
}

export function getOrderFailure() {
  return {
    type: dashboardConstants.GET_ORDER_FAIL,
  };
}

export function getMenuSuccess(menu) {
  return {
    type: dashboardConstants.GET_MENU_SUCCESS,
    payload: menu,
  };
}

export function getMenuFailure() {
  return {
    type: dashboardConstants.GET_MENU_FAIL,
  };
}
