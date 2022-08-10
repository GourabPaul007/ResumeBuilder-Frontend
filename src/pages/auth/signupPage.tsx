import React, { useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import AppBarHeader from "../../Components/AppBarHeader";
import Footer from "../../Components/Footer";
import { Avatar, Button, Checkbox, FormControlLabel, Grid, Link, TextField, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
// import { error } from "console";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import OAuthCard from "./OAuthCard";

const useStyles = makeStyles(() => ({
  paper: {
    marginTop: 8,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: 2,
    backgroundColor: "#6b5be6",
  },
  form: {
    width: 350, // Fix IE 11 issue.
    margin: 8,
  },
  submit: {
    margin: "3px 0px 2px 2px",
  },
}));

export interface ILoginPageProps {}

const LoginPage: React.FunctionComponent<ILoginPageProps> = (props) => {
  const classes = useStyles();
  const auth = getAuth();
  const navigate = useNavigate();
  const [authing, setAuthing] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUpWithUsernameAndPassword = async (email: string, password: string) => {
    setAuthing(true);
    await createUserWithEmailAndPassword(auth, email, password)
      .then((response) => {
        console.log(response.user);
        navigate("/");
      })
      .catch((e) => {
        console.log(e);
        setAuthing(false);
      });
  };

  return (
    <>
      <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
        <AppBarHeader />
        <div
          style={{
            display: "flex",
            flex: 1,
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className={classes.paper}>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
              <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
              </Avatar>
              &nbsp;
              <Typography component="h1" variant="h5">
                Sign Up
              </Typography>
            </div>

            {/* {error ? (
              <Typography
                style={{
                  color: "#e1868f",
                  backgroundColor: "#430c11",
                  padding: 16,
                  marginTop: 16,
                  border: "1px solid #68121b",
                  borderRadius: 8,
                }}
              >
                {error}
              </Typography>
            ) : null} */}
            <form className={classes.form} noValidate>
              <TextField
                variant="filled"
                size="small"
                required
                fullWidth
                label="Email Address"
                onChange={(e) => setEmail(e.target.value)}
                autoFocus
              />
              <div style={{ height: "12px" }}>&nbsp;</div>
              <TextField
                variant="filled"
                size="small"
                required
                fullWidth
                label="Password"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <div style={{ height: "12px" }}>&nbsp;</div>
              <Button
                disabled={authing}
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={() => {
                  signUpWithUsernameAndPassword(email, password);
                }}
              >
                Log In
              </Button>
              <div style={{ display: "flex", justifyContent: "space-between", marginTop: 8 }}>
                <Link href="/forgot-password" variant="body2">
                  Forgot password?
                </Link>
                <Link href="/login" variant="body2">
                  {"Have an account? Log In"}
                </Link>
              </div>
            </form>
          </div>
          <OAuthCard />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default LoginPage;