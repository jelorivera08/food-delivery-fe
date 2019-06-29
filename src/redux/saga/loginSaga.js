import { put, takeEvery, all } from 'redux-saga/effects';
import * as globalConstants from '../../App/constants/globalConstants';
import api from '../../api/api';

function* login(action) {
  let res = yield api.login(action.payload);
  if (res === globalConstants.ERROR) {
  } else {
    console.log(res);
  }
}

function* watchLogin() {
  yield takeEvery('LOGIN', login);
}

export default function* loginSaga() {
  yield all([watchLogin()]);
}
