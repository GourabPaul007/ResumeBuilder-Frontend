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
import { getErrorMessage } from "./errorMessages";

import "./AuthPagesStyles.css";
import { getAnalytics, logEvent } from "firebase/analytics";
import { SIGNED_UP } from "../../constants";

export interface ILoginPageProps {}

const LoginPage: React.FunctionComponent<ILoginPageProps> = (props) => {
  const analytics = getAnalytics();
  const auth = getAuth();
  const navigate = useNavigate();
  const [authing, setAuthing] = useState(false);
  const [error, setError] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUpWithUsernameAndPassword = async (email: string, password: string) => {
    setAuthing(true);
    await createUserWithEmailAndPassword(auth, email, password)
      .then((response) => {
        console.log(response.user);
        logEvent(analytics, SIGNED_UP);
        navigate("/");
      })
      .catch((e) => {
        console.log(e);
        setError(getErrorMessage(e.code));
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
          <div className="paper">
            <div
              style={{ display: "flex", justifyContent: "center", alignItems: "center", marginBottom: error ? 0 : 48 }}
            >
              <Avatar className="avatar">
                <LockOutlinedIcon />
              </Avatar>
              &nbsp;
              <Typography component="h1" variant="h5">
                Sign Up
              </Typography>
            </div>

            {error ? (
              <Typography
                style={{
                  color: "#b71c1c",
                  backgroundColor: "#ffcdd2",
                  padding: "16px 32px",
                  margin: 16,
                  // border: "1px solid #68121b",
                  borderRadius: 8,
                }}
              >
                {error}
              </Typography>
            ) : null}
            <form className="form" noValidate>
              <TextField
                variant="filled"
                size="small"
                required
                fullWidth
                label="Email Address"
                type="email"
                error={!email.includes("@") || !email.includes(".")}
                helperText="Use a valid email address."
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
                error={password.length < 6}
                helperText="Password should be atleast 6 characters long. Use a combination of letters, numbers, and symbols."
                onChange={(e) => setPassword(e.target.value)}
              />
              <div style={{ height: "12px" }}>&nbsp;</div>
              <Button
                disabled={authing}
                fullWidth
                variant="contained"
                color="primary"
                className="submit"
                onClick={() => {
                  signUpWithUsernameAndPassword(email, password);
                }}
              >
                Sign Up
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
