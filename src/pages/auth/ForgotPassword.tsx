import React, { useRef, useState } from "react";
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  Grid,
  Box,
  Typography,
  Container,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { makeStyles } from "@mui/styles";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles(() => ({
  paper: {
    marginTop: 8,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: 2,
    backgroundColor: "#5b6be6",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: 2,
  },
  submit: {
    margin: 4,
  },
}));

export default function ForgotPassword() {
  const classes = useStyles();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  // const [error, setError] = useState("");
  const [authing, setAuthing] = useState(false);

  // const { resetPassword, currentUser } = useAuth();
  const auth = getAuth();

  const handleResetPassword = async () => {
    setAuthing(true);
    try {
      sendPasswordResetEmail(auth, email).then(() => {
        console.log("Password reset email sent!");
        setMessage("Password reset email sent!\nCheck your email to reset your password.");
        // navigate("/");
      });
    } catch (e) {
      console.log("Something went wrong.");
      setAuthing(false);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      {/* {currentUser && JSON.stringify(currentUser)} */}
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Reset Password
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="filled"
            margin="normal"
            required
            fullWidth
            label="Email Address"
            autoFocus
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <Button
            disabled={authing}
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleResetPassword}
          >
            Reset Password
          </Button>
          <Grid container>
            <Grid item xs={12} style={{ marginTop: 8 }}>
              <Link href="http://localhost:3000/login" variant="body2">
                Have an account? Log in.
              </Link>
            </Grid>
          </Grid>
        </form>
        <div style={{ margin: 8, color: "#5b6be6" }}>{message}</div>
      </div>
      <Box mt={8}>
        <Typography variant="body2" color="textSecondary" align="center">
          {"Copyright © "}
          <Link color="inherit" href="https://material-ui.com/"></Link> {new Date().getFullYear()}
          {/* {"."} */}
        </Typography>
      </Box>
    </Container>
  );
}
