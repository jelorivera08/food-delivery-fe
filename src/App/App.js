import React from 'react';
import { connect } from 'react-redux';

const App = (props) => {
  console.log(props);
  return <div>henlo :3</div>;
};

export default connect((state) => ({ login: state.login }))(App);
