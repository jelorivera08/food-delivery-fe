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

export function addMenuItem(menuItem) {
  return {
    type: adminConstants.ADD_MENU_ITEM,
    payload: {
      name: menuItem.name,
      price: menuItem.price,
    },
  };
}

export function getAllOrdersFailure() {
  return {
    type: adminConstants.GET_ALL_ORDERS_FAILURE,
  };
}

export function closeSnackbar() {
  return {
    type: adminConstants.CLOSE_SNACKBAR,
  };
}

export function addMenuItemSuccess() {
  return {
    type: adminConstants.ADD_MENU_ITEM_SUCCESS,
  };
}

export function addMenuItemFailure() {
  return {
    type: adminConstants.ADD_MENU_ITEM_FAILURE,
  };
}

export function deleteMenuItem(menuItemId) {
  return {
    type: adminConstants.DELETE_MENU_ITEM,
    payload: menuItemId,
  };
}

export function deleteMenuItemSuccess() {
  return {
    type: adminConstants.DELETE_MENU_ITEM_SUCCESS,
  };
}

export function deleteMenuItemFailure() {
  return {
    type: adminConstants.DELETE_MENU_ITEM_FAILURE,
  };
}

export function deleteAllOrders() {
  return {
    type: adminConstants.DELETE_ALL_ORDERS,
  };
}

export function deleteAllOrdersSuccess() {
  return {
    type: adminConstants.DELETE_ALL_ORDERS_SUCCESS,
  };
}

export function deleteAllOrdersFailure() {
  return {
    type: adminConstants.DELETE_ALL_ORDERS_FAILURE,
  };
}

export function getAllUsers() {
  return {
    type: adminConstants.GET_ALL_USERS,
  };
}

export function getAllUsersSuccess(users) {
  return {
    type: adminConstants.GET_ALL_USERS_SUCCESS,
    users,
  };
}

export function payDebt(username, paid) {
  return {
    type: adminConstants.PAY_DEBT,
    username,
    paid,
  };
}

export function payDebtSuccess() {
  return {
    type: adminConstants.PAY_DEBT_SUCCESS,
  };
}

export function payDebtFailure() {
  return {
    type: adminConstants.PAY_DEBT_FAILURE,
  };
}

export function getAllUsersFailure() {
  return {
    type: adminConstants.GET_ALL_USERS_FAILURE,
  };
}
