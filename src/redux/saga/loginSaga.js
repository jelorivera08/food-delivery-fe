import { put, takeEvery, all } from 'redux-saga/effects';

function* login() {
  yield put({ type: 'LOGIN' });
}

function* watchLogin() {
  yield takeEvery('LOGIN', login);
}

export default function* loginSaga() {
  yield all([watchLogin()]);
}
