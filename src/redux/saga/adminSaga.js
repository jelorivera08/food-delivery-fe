import { put, takeEvery, all } from 'redux-saga/effects';
import * as adminConstants from '../../App/constants/adminConstants';
import * as dashboardActions from '../../App/actions/dashboardActions';
import * as adminActions from '../../App/actions/adminActions';
import api from '../../api/api';

function* getAllOrders() {
  let res;
  try {
    res = yield api.getAllOrders();
    yield put(adminActions.getAllUsers());
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
  } catch (err) {
    yield put(adminActions.getAllUsersFailure());
  }
}

function* payDebt(action) {
  try {
    yield api.payDebt(action.username, action.paid);
    yield put(adminActions.getAllUsers());
    yield put(adminActions.getAllOrders());

    yield put(adminActions.payDebtSuccess());
  } catch (err) {
    yield put(adminActions.payDebtFailure());
  }
}

function* transferToDebt(action) {
  try {
    yield api.transferToDebt(action.orderId);
    yield put(adminActions.getAllUsers());
    yield put(adminActions.getAllOrders());

    yield put(adminActions.transferToDebtSuccess());
  } catch (err) {
    yield put(adminActions.apiCallFailure('unable to transfer to debt.'));
  }
}

function* payOrder(action) {
  try {
    let res = yield api.payOrder(action.orderId, action.paid);

    yield put(adminActions.apiCallSuccess(res.data.message));
  } catch (err) {
    yield put(adminActions.apiCallFailure('unable to pay for order.'));
  }
}

function* watchAdmin() {
  yield takeEvery(adminConstants.GET_ALL_ORDERS, getAllOrders);
  yield takeEvery(adminConstants.ADD_MENU_ITEM, addMenuItem);
  yield takeEvery(adminConstants.DELETE_MENU_ITEM, deleteMenuItem);
  yield takeEvery(adminConstants.DELETE_ALL_ORDERS, deleteAllOrders);
  yield takeEvery(adminConstants.GET_ALL_USERS, getAllUsers);
  yield takeEvery(adminConstants.PAY_DEBT, payDebt);
  yield takeEvery(adminConstants.TRANSFER_TO_DEBT, transferToDebt);
  yield takeEvery(adminConstants.PAY_ORDER, payOrder);
}

export default function* adminSaga() {
  yield all([watchAdmin()]);
}
