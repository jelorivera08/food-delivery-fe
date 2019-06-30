import * as loginConstants from '../constants/loginConstants';

export function login(payload) {
  return {
    type: loginConstants.LOGIN,
    payload,
  };
}

export function signup(payload) {
  return {
    type: loginConstants.SIGNUP,
    payload,
  };
}

export function signupSuccess(payload) {
  return {
    type: loginConstants.SIGNUP_SUCCESS,
    payload,
  };
}

export function signupFailure(payload) {
  return {
    type: loginConstants.SIGNUP_FAILURE,
    payload,
  };
}

export function loginSuccess(payload) {
  return {
    type: loginConstants.LOGIN_SUCCESS,
    payload,
  };
}

export function loginFailure() {
  return {
    type: loginConstants.LOGIN_FAILURE,
  };
}

export function closeSnackbar() {
  return {
    type: loginConstants.CLOSE_SNACKBAR,
  };
}

export function logout() {
  return {
    type: loginConstants.LOGOUT,
  };
}
