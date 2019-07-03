import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import dashboardReducer from './dashboardReducer';
import adminReducer from './adminReducer';

const rootReducer = combineReducers({
  login: loginReducer,
  dashboard: dashboardReducer,
  admin: adminReducer,
});

export default rootReducer;
