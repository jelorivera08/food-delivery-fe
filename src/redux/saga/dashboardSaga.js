import { put, takeEvery, all } from 'redux-saga/effects';
import * as dashboardConstants from '../../App/constants/dashboardConstants';
import * as dashboardActions from '../../App/actions/dashboardActions';
import api from '../../api/api';

function* getOrders(action) {
  try {
    let res = yield api.getOrders(action.payload);
    yield put(dashboardActions.getOrdersSuccess(res.data));
  } catch (err) {
    yield put(dashboardActions.getOrderFailure());
  }
}

function* getMenu() {
  try {
    let res = yield api.getMenu();
    yield put(dashboardActions.getMenuSuccess(res.data));
  } catch (err) {
    yield put(dashboardActions.getMenuFailure());
  }
}

function* putOrders(action) {
  try {
    yield api.putOrders(action.payload);
    yield put(dashboardActions.getOrders(action.payload.username));
    yield put(dashboardActions.putOrdersSuccess());
  } catch (err) {
    yield put(dashboardActions.putOrdersFailure());
  }
}

function* deleteOrder(action) {
  try {
    yield api.deleteOrder(action.payload.orderId);
    yield put(dashboardActions.getOrders(action.payload.username));
    yield put(dashboardActions.deleteOrderSuccess());
  } catch (err) {
    yield put(dashboardActions.deleteOrderFailure());
  }
}

function* watchDashboard() {
  yield takeEvery(dashboardConstants.GET_ORDERS, getOrders);
  yield takeEvery(dashboardConstants.GET_MENU, getMenu);
  yield takeEvery(dashboardConstants.PUT_ORDERS, putOrders);
  yield takeEvery(dashboardConstants.DELETE_ORDER, deleteOrder);
}

export default function* dashboardSaga() {
  yield all([watchDashboard()]);
}
