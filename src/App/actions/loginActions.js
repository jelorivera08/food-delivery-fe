import * as loginConstants from '../constants/loginConstants';

export function login(payload) {
  return {
    type: loginConstants.LOGIN,
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
