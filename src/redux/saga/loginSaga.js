import { put, takeEvery, all } from 'redux-saga/effects';
import * as loginConstants from '../../App/constants/loginConstants';

import * as loginActions from '../../App/actions/loginActions';
import api from '../../api/api';

function* login(action) {
  let res;
  try {
    res = yield api.login(action.payload);
    yield put(loginActions.loginSuccess(res.data));
  } catch (err) {
    yield put(loginActions.loginFailure());
  }
}

function* watchLogin() {
  yield takeEvery(loginConstants.LOGIN, login);
}

export default function* loginSaga() {
  yield all([watchLogin()]);
}
