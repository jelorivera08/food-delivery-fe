import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import LoginModal from './components/modal/LoginModal';
import SignUpModal from './components/modal/SignUpModal';
import './App.css';
import axios from 'axios';
import SnackBar from './components/snackbar/snackbar';
import LeftContainer from './components/LeftContainer/LeftContainer';
import RightContainer from './components/RightContainer/RightContainer';

const apiDomain = 'https://grabjunjun.herokuapp.com';

function App() {
  const [username, setUsername] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState({
    message: '',
    open: false,
  });
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
  });
  const [orders, setOrders] = useState([]);
  const [menu, setMenu] = useState([]);

  const getOrders = async (username) => {
    try {
      let orders = await axios.get(`${apiDomain}/api/v1/order`);

      setOrders(
        orders.data.orders.filter((order) => order.orderFromUser === username)
      );
    } catch (err) {
      setOpenSnackbar({
        message: 'Unable to get orders. :(',
        open: true,
        status: '',
      });
    }
  };

  const handleUsernameChange = (username) => (event) => {
    setCredentials({ ...credentials, [username]: event.target.value });
  };

  const handlePasswordChange = (password) => (event) => {
    setCredentials({ ...credentials, [password]: event.target.value });
  };

  const getMenu = async () => {
    try {
      let res = await axios.get(`${apiDomain}/api/v1/menu`);

      setMenu(res.data.menu);
    } catch (err) {
      setOpenSnackbar({
        message: 'Unable to get menu. :(',
        open: true,
        status: '',
      });
    }
  };

  const handleConfirmLogin = async () => {
    try {
      await axios.post(`${apiDomain}/api/v1/user/login`, {
        ...credentials,
      });

      setIsLoggedIn(true);

      setUsername(credentials.username);
      setCredentials({
        username: '',
        password: '',
      });

      setOpenSnackbar({
        message: `Welcome ${credentials.username}!!`,
        open: true,
        status: '',
      });

      getOrders(credentials.username);
      getMenu();
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
      await axios.post(`${apiDomain}/api/v1/user`, {
        ...credentials,
      });
      setUsername(credentials.username);
      setIsLoggedIn(true);
      setIsSignUp(false);
      setCredentials({
        username: '',
        password: '',
      });

      setOpenSnackbar({
        message: `Welcome ${credentials.username}!!`,
        open: true,
        status: '',
      });
    } catch (err) {
      setOpenSnackbar({
        message: 'I already know you! log in.',
        open: true,
        status: 'login',
      });
    }
  };

  const handleDeleteClick = (id) => async () => {
    try {
      await axios.delete(`${apiDomain}/api/v1/order`, { data: { id } });

      getOrders(username);
      setOpenSnackbar({
        message: 'order deleted!',
        open: true,
        status: '',
      });
    } catch (err) {
      setOpenSnackbar({
        message: 'unable to delete at this moment.',
        open: true,
        status: '',
      });
    }
  };

  const handleAddClick = (menuItemName, menuItemPrice) => async () => {
    try {
      await axios.post(`${apiDomain}/api/v1/order`, {
        username: username,
        name: menuItemName,
        price: menuItemPrice,
        quantity: 1,
      });

      getOrders(username);

      setOpenSnackbar({
        message: 'order placed!',
        open: true,
        status: '',
      });
    } catch (err) {
      setOpenSnackbar({
        message: 'unable to place order at this moment.',
        open: true,
        status: '',
      });
    }
  };

  return (
    <div className="App">
      <Paper className="order-container">
        <div
          style={{
            display: 'flex',
            height: '100%',
          }}
        >
          {isLoggedIn && (
            <React.Fragment>
              <LeftContainer
                handleDeleteClick={handleDeleteClick}
                orders={orders}
                username={username}
              />
              <RightContainer handleAddClick={handleAddClick} menu={menu} />
            </React.Fragment>
          )}
        </div>

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
