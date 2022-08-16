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
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { getErrorMessage } from "./errorMessages";
import OAuthCard from "./OAuthCard";
import makeStyles from "@mui/styles/makeStyles";

import "./AuthPagesStyles.css";

export interface ILoginPageProps {}

const LoginPage: React.FunctionComponent<ILoginPageProps> = (props) => {
  const auth = getAuth();
  const navigate = useNavigate();
  const [authing, setAuthing] = useState(false);
  const [error, setError] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const logInWithUsernameAndPassword = async (email: string, password: string) => {
    setAuthing(true);
    console.log(email, password);

    signInWithEmailAndPassword(auth, email, password)
      .then((response) => {
        console.log(response.user);
        navigate("/");
      })
      .catch((e) => {
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
                Log in
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
                onChange={(e) => setEmail(e.target.value)}
                autoFocus
              />
              <div style={{ height: "16px" }}>&nbsp;</div>
              <TextField
                variant="filled"
                size="small"
                required
                fullWidth
                label="Password"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <div style={{ height: "16px" }}>&nbsp;</div>
              <Button
                disabled={authing}
                fullWidth
                variant="contained"
                color="primary"
                className="submit"
                onClick={() => {
                  logInWithUsernameAndPassword(email, password);
                }}
              >
                Log In
              </Button>
              <div style={{ display: "flex", justifyContent: "space-between", marginTop: 8 }}>
                <Link href="/forgot-password" variant="body2">
                  Forgot password?
                </Link>
                <Link href="/signup" variant="body2">
                  Don't have an account? Sign Up
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
