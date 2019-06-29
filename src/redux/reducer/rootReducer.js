import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import dashboardReducer from './dashboardReducer';

const rootReducer = combineReducers({
  login: loginReducer,
  dashboard: dashboardReducer,
});

export default rootReducer;
