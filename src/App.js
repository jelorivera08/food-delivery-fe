import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import LoginModal from './components/modal/LoginModal';
import SignUpModal from './components/modal/SignUpModal';
import './App.css';
import axios from 'axios';
import SnackBar from './components/snackbar/snackbar';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState({
    message: '',
    open: false,
  });
  const [credentials, setCredentials] = React.useState({
    username: '',
    password: '',
  });

  const handleUsernameChange = (username) => (event) => {
    setCredentials({ ...credentials, [username]: event.target.value });
  };

  const handlePasswordChange = (password) => (event) => {
    setCredentials({ ...credentials, [password]: event.target.value });
  };

  const handleConfirmLogin = async () => {
    try {
      await axios.post('http://localhost:3000/api/v1/user/login', {
        ...credentials,
      });

      setIsLoggedIn(true);
      setCredentials({
        username: '',
        password: '',
      });
    } catch (err) {
      setCredentials({
        username: '',
        password: '',
      });

      setOpenSnackbar({
        message: 'Who are you? Please sign up first.',
        open: true,
        status: 'signup',
      });
    }
  };

  const handleSignUp = () => {
    setIsSignUp(true);
    setIsLoggedIn(false);
  };

  const handleLogIn = () => {
    setIsLoggedIn(false);
    setIsSignUp(false);
  };

  const handleConfirmSignUp = async () => {
    try {
      await axios.post('http://localhost:3000/api/v1/user', {
        ...credentials,
      });

      setIsLoggedIn(true);
      setIsSignUp(false);
      setCredentials({
        username: '',
        password: '',
      });
    } catch (err) {
      setOpenSnackbar({
        message: 'I already know you! log in.',
        open: true,
        status: 'login',
      });
    }
  };

  return (
    <div className="App">
      <Paper className="order-container">
        <Typography variant="h5" component="h3">
          This is a sheet of paper.
        </Typography>
        <Typography component="p">
          Paper can be used to build surface or other elements for your
          application.
        </Typography>
        <LoginModal
          credentials={credentials}
          handleSignUp={handleSignUp}
          handleConfirmLogin={handleConfirmLogin}
          handleUsernameChange={handleUsernameChange}
          handlePasswordChange={handlePasswordChange}
          isOpen={!isLoggedIn}
        />

        <SignUpModal
          credentials={credentials}
          handleLogIn={handleLogIn}
          handleConfirmLogin={handleConfirmLogin}
          handleUsernameChange={handleUsernameChange}
          handlePasswordChange={handlePasswordChange}
          handleConfirmSignUp={handleConfirmSignUp}
          isOpen={isSignUp}
        />

        <SnackBar
          open={openSnackbar.open}
          message={openSnackbar.message}
          status={openSnackbar.status}
          handleSignUp={handleSignUp}
          handleLogIn={handleLogIn}
          handleClose={() =>
            setOpenSnackbar({
              message: '',
              open: false,
            })
          }
        />
      </Paper>
    </div>
  );
}

export default App;
