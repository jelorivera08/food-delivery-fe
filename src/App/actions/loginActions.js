import * as loginConstants from '../constants/loginConstants';

export function login(payload) {
  return {
    type: loginConstants.LOGIN,
    payload,
  };
}
