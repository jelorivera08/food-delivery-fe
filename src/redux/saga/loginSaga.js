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

function* signup(action) {
  let res;
  try {
    res = yield api.signup(action.payload);
    yield put(loginActions.signupSuccess(res.data));
    yield put(loginActions.login(action.payload));
  } catch (err) {
    yield put(loginActions.signupFailure());
  }
}

function* generateOTP(action) {
  try {
    let res = yield api.generateOTP(action.mobileNumber);

    yield put(loginActions.saveGeneratedOTP(res.data));
  } catch (err) {
    yield put(loginActions.generaetOTPFailure());
  }
}

function* validateOtp(action) {
  try {
    yield api.validateOtp(action.otpFromUser, action.otpId);

    let loginRes = yield api.signup(action.credentials);
    yield put(loginActions.signupSuccess(loginRes.data));
    yield put(loginActions.login(action.credentials));
  } catch (err) {
    yield put(loginActions.invalidOtp());
  }
}

function* watchLogin() {
  yield takeEvery(loginConstants.LOGIN, login);
  yield takeEvery(loginConstants.SIGNUP, signup);
  yield takeEvery(loginConstants.GENERATE_OTP, generateOTP);
  yield takeEvery(loginConstants.VALIDATE_OTP, validateOtp);
}

export default function* loginSaga() {
  yield all([watchLogin()]);
}
