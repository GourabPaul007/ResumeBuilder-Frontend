import React, { useEffect, useState } from "react";

import { Avatar, Button, Drawer, List } from "@mui/material";
import "./AppBarHeader.css";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

interface AppBarHeaderProps {}

const AppBarHeader: React.FC<AppBarHeaderProps> = () => {
  const navigate = useNavigate();
  const [openDrawer, setOpenDrawer] = useState(false);
  const [userExists, setUserExists] = useState(false);
  const auth = getAuth();

  useEffect(() => {
    checkAuthChange();
  }, [userExists]);

  const checkAuthChange = onAuthStateChanged(auth, (user) => {
    if (user) setUserExists(true);
    else setUserExists(false);
  });

  return (
    <>
      <header>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <!-- Font Awesome Icons Libariy --> */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css"
          integrity="sha512-YWzhKL2whUzgiheMoBFwW8CKV4qpHQAEuvilg9FAn5VJUDwKZZxkJNuGM4XkWuk94WCrrwslk8yWNGmY1EduTA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </header>
      {/* <!-- Start Header --> */}
      <nav className="navbar" id="navbar">
        <div className="container">
          <a href="/" className="logo">
            <h1>JohnDoe's Resume Builder</h1>
          </a>

          <div className="nav-links">
            <a style={{ fontWeight: 700 }} href="/" className="fill">
              Home
            </a>
            {/* <a style={{ fontWeight: 700 }} href="/form" className="fill">
              Form
            </a> */}
            <a style={{ fontWeight: 700 }} href="/create" className="fill">
              create
            </a>
            <a style={{ fontWeight: 700 }} href="/contact" className="fill">
              contact
            </a>
            {/* <p style={{ width: "24px" }}></p> */}
            {userExists ? (
              <a
                style={{ fontWeight: 700, marginLeft: "24px" }}
                className="fill"
                onClick={() => {
                  signOut(auth);
                }}
              >
                Sign Out
              </a>
            ) : (
              <a
                style={{ fontWeight: 700, marginLeft: "24px" }}
                className="fill"
                onClick={() => {
                  navigate("/login");
                }}
              >
                Login / Sign up
              </a>
            )}
            <div className="toggle-menu scale-effect">
              <i className="fas fa-times"></i>
            </div>
          </div>

          <div className="toggle-menu scale-effect">
            <i
              className="fas fa-bars"
              onClick={() => {
                setOpenDrawer(true);
              }}
            ></i>
          </div>
        </div>
        <>
          <Drawer
            variant="temporary"
            anchor="right"
            open={openDrawer}
            onClose={() => {
              setOpenDrawer(false);
            }}
            // onClose={setOpenDrawer(false)}
          >
            <div style={{ width: 250, display: "grid", placeContent: "center" }}>
              <Button
                style={{
                  paddingRight: 48,
                  paddingLeft: 48,
                  marginTop: 24,
                  textTransform: "none",
                }}
                variant="contained"
                // fullWidth
                href="/"
              >
                <i className="fas fa-home"></i>&nbsp; Home
              </Button>

              <Button
                style={{
                  paddingRight: 48,
                  paddingLeft: 48,
                  marginTop: 24,
                  textTransform: "none",
                }}
                variant="contained"
                fullWidth
                href="/create"
              >
                <i className="fas fa-align-center"></i>&nbsp; Create
              </Button>

              <Button
                style={{
                  paddingRight: 48,
                  paddingLeft: 48,
                  marginTop: 24,
                  textTransform: "none",
                }}
                variant="contained"
                fullWidth
                href="/"
              >
                Home
              </Button>

              {userExists ? (
                <Button
                  style={{
                    paddingRight: 48,
                    paddingLeft: 48,
                    marginTop: 24,
                    textTransform: "none",
                  }}
                  variant="contained"
                  fullWidth
                  onClick={() => {
                    signOut(auth);
                    navigate("/login");
                  }}
                >
                  Sign out
                </Button>
              ) : (
                <Button
                  style={{
                    paddingRight: 48,
                    paddingLeft: 48,
                    marginTop: 24,
                    textTransform: "none",
                  }}
                  variant="contained"
                  fullWidth
                  onClick={() => {
                    navigate("/login");
                  }}
                >
                  Login / Sign up
                </Button>
              )}
            </div>
          </Drawer>
        </>
      </nav>
    </>
  );
};

export default AppBarHeader;

// interface UserAvatarProps {}

// const UserAvatar: React.FC<UserAvatarProps> = () => {
//   return (
//     <>
//       <Avatar>G</Avatar>
//     </>
//   );
// };
