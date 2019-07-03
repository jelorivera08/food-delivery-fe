import { put, takeEvery, all } from 'redux-saga/effects';
import * as adminConstants from '../../App/constants/adminConstants';

import * as adminActions from '../../App/actions/adminActions';
import api from '../../api/api';

function* getAllOrders(action) {
  let res;
  try {
    res = yield api.getAllOrders();
    yield put(adminActions.getAllOrdersSuccess(res.data));
  } catch (err) {
    // yield put(loginActions.loginFailure());
  }
}

function* watchAdmin() {
  yield takeEvery(adminConstants.GET_ALL_ORDERS, getAllOrders);
}

export default function* adminSaga() {
  yield all([watchAdmin()]);
}
