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
