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

export function putOrders(orders, username) {
  return {
    type: dashboardConstants.PUT_ORDERS,
    payload: { orders, username },
  };
}

export function putOrdersSuccess() {
  return {
    type: dashboardConstants.PUT_ORDER_SUCCESS,
  };
}

export function putOrdersFailure() {
  return {
    type: dashboardConstants.PUT_ORDERS_FAILURE,
  };
}

export function incompleteOrders() {
  return {
    type: dashboardConstants.INCOMPLETE_ORDERS,
  };
}
