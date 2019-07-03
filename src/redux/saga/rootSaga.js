import { all } from 'redux-saga/effects';
import loginSaga from './loginSaga';
import dashboardSaga from './dashboardSaga';
import adminSaga from './adminSaga';

export default function* rootSaga() {
  yield all([loginSaga(), dashboardSaga(), adminSaga()]);
}
