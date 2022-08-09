import * as React from "react";

import { Button, Drawer, List } from "@mui/material";
import { useState } from "react";
import "./AppBarHeader.css";
import { getAuth, signOut } from "firebase/auth";

interface AppBarHeaderProps {}

const AppBarHeader: React.FC<AppBarHeaderProps> = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
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
            <a style={{ fontWeight: 700 }} href="/#contact" className="fill">
              contact
            </a>
            {getAuth().currentUser ? (
              <a
                style={{ fontWeight: 700 }}
                href="/login"
                className="fill"
                onClick={() => {
                  signOut(getAuth());
                }}
              >
                Sign Out
              </a>
            ) : null}
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
                href="/form"
              >
                <i className="fas fa-align-center"></i>&nbsp; Form
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
                  signOut(getAuth());
                }}
              >
                Log out
              </Button>
            </div>
          </Drawer>
        </>
      </nav>
    </>
  );
};

export default AppBarHeader;
