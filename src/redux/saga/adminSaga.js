import { put, takeEvery, all } from 'redux-saga/effects';
import * as adminConstants from '../../App/constants/adminConstants';
import * as dashboardActions from '../../App/actions/dashboardActions';
import * as adminActions from '../../App/actions/adminActions';
import api from '../../api/api';

function* getAllOrders() {
  let res;
  try {
    res = yield api.getAllOrders();
    yield put(adminActions.getAllOrdersSuccess(res.data));
  } catch (err) {
    yield put(adminActions.getAllOrdersFailure());
  }
}

function* addMenuItem(action) {
  try {
    yield api.addMenuItem(action.payload);
    yield put(adminActions.addMenuItemSuccess());
    yield put(dashboardActions.getMenu());
  } catch (err) {
    yield put(adminActions.addMenuItemFailure());
  }
}

function* deleteMenuItem(action) {
  try {
    yield api.deleteMenuItem(action.payload);
    yield put(adminActions.deleteMenuItemSuccess());
    yield put(dashboardActions.getMenu());
  } catch (err) {
    yield put(adminActions.deleteMenuItemFailure());
  }
}

function* deleteAllOrders() {
  try {
    yield api.deleteAllOrders();
    yield put(adminActions.deleteAllOrdersSuccess());
    yield put(adminActions.getAllOrders());
  } catch (err) {
    yield put(adminActions.deleteAllOrdersFailure());
  }
}

function* getAllUsers() {
  try {
    let res = yield api.getAllUsers();
    yield put(adminActions.getAllUsersSuccess(res.data));
  } catch (err) {}
}

function* watchAdmin() {
  yield takeEvery(adminConstants.GET_ALL_ORDERS, getAllOrders);
  yield takeEvery(adminConstants.ADD_MENU_ITEM, addMenuItem);
  yield takeEvery(adminConstants.DELETE_MENU_ITEM, deleteMenuItem);
  yield takeEvery(adminConstants.DELETE_ALL_ORDERS, deleteAllOrders);
  yield takeEvery(adminConstants.GET_ALL_USERS, getAllUsers);
}

export default function* adminSaga() {
  yield all([watchAdmin()]);
}
