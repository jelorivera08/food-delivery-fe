import * as loginConstants from '../../App/constants/loginConstants';

const loginReducer = (state = { isLoggedIn: false }, action) => {
  switch (action.type) {
    case loginConstants.LOGIN_SUCCESS:
      return { ...state, isLoggedIn: true };

    default:
      return state;
  }
};

export default loginReducer;
