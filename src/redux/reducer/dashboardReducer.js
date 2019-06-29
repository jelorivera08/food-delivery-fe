import * as loginConstants from '../../App/constants/loginConstants';

const dashboardReducer = (state = { username: '' }, action) => {
  switch (action.type) {
    case loginConstants.LOGIN_SUCCESS:
      return { ...state, username: action.payload };

    default:
      return state;
  }
};

export default dashboardReducer;
