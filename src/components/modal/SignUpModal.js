import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

function getModalStyle() {
  return {
    top: '50%',
    left: '50%',
    transform: `translate(-50%, -50%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(4),
    outline: 'none',
  },
}));

export default function SignUpModal({
  handleUsernameChange,
  credentials,
  isOpen,
  handleClose,
  handlePasswordChange,
  handleLogIn,
  handleConfirmSignUp,
}) {
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);

  const classes = useStyles();

  return (
    <div>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={isOpen}
        onClose={handleClose}
      >
        <div style={modalStyle} className={classes.paper}>
          <Typography variant="h6" id="modal-title">
            Sign up
          </Typography>
          <div>
            <TextField
              style={{
                width: '100%',
              }}
              id="outlined-name"
              label="Username"
              value={credentials.username}
              onChange={handleUsernameChange('username')}
              margin="normal"
              variant="outlined"
            />
          </div>
          <div>
            <TextField
              style={{
                width: '100%',
              }}
              id="outlined-name"
              label="Password"
              value={credentials.password}
              type="password"
              onChange={handlePasswordChange('password')}
              margin="normal"
              variant="outlined"
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  handleConfirmSignUp();
                }
              }}
            />
          </div>
          <div
            style={{
              display: 'flex',
              width: '100%',
              justifyContent: 'space-between',
              margin: '20px 0px 0px 0px',
            }}
          >
            <Button onClick={handleLogIn} variant="outlined" color="secondary">
              back to log in
            </Button>
            <Button
              onClick={handleConfirmSignUp}
              variant="outlined"
              color="primary"
            >
              Sign me up!
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
