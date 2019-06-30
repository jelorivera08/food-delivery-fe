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

function* watchDashboard() {
  yield takeEvery(dashboardConstants.GET_ORDERS, getOrders);
  yield takeEvery(dashboardConstants.GET_MENU, getMenu);
}

export default function* dashboardSaga() {
  yield all([watchDashboard()]);
}
