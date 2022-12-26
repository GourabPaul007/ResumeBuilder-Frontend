import "./AppBarHeader.css";

import React, { useEffect, useState } from "react";

import { Avatar, Button, Drawer, List } from "@mui/material";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

import MenuOpenRoundedIcon from "@mui/icons-material/MenuOpenRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import LoginRoundedIcon from "@mui/icons-material/LoginRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import { doc, getDoc, getFirestore } from "firebase/firestore";

interface AppBarHeaderProps {}

const AppBarHeader: React.FC<AppBarHeaderProps> = () => {
  const navigate = useNavigate();
  const [openDrawer, setOpenDrawer] = useState(false);
  const [userExists, setUserExists] = useState(false);
  const [userId, setUserId] = useState("");
  const db = getFirestore();
  const auth = getAuth();
  let resumeName = "";

  useEffect(() => {
    checkAuthChange();
  }, [userExists]);

  // useEffect(() => {

  // }, []);

  const getResumeName = async () => {
    const user = auth.currentUser;
    if (user !== null) {
      setUserId(user.uid);
      console.log(user.uid);
    }

    const docRef = doc(db, "userResumes", "falsudgfasjkbf");
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const data = docSnap.data();
      resumeName = data.resumeNames[0];
      console.log("Document data:", resumeName);
      console.log(userId);
    } else {
      console.log("No such document!");
    }
  };

  const checkAuthChange = onAuthStateChanged(auth, (user) => {
    if (user) setUserExists(true);
    else setUserExists(false);
  });

  return (
    <>
      {/* <header>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css"
          integrity="sha512-YWzhKL2whUzgiheMoBFwW8CKV4qpHQAEuvilg9FAn5VJUDwKZZxkJNuGM4XkWuk94WCrrwslk8yWNGmY1EduTA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </header> */}
      {/* <!-- Start Header --> */}
      <nav className="navbar" id="navbar">
        <div className="container">
          <a href="/" className="logo">
            <h1>Resumez - A Free Resume Builder</h1>
          </a>

          <div className="navLinks">
            <a style={{ fontWeight: 500 }} href="/" className="fill">
              Home
            </a>
            {/* <a style={{ fontWeight: 500 }} href="/form" className="fill">
              Form
            </a> */}
            <a style={{ fontWeight: 500 }} href="/create" className="fill">
              create
            </a>
            <a
              style={{ fontWeight: 500 }}
              // href={`/${userId}`}
              className="fill"
              onClick={async (e) => {
                e.preventDefault();
                await getResumeName();
                navigate(`/${resumeName}`);
              }}
            >
              Your Resume
            </a>
            <a style={{ fontWeight: 500 }} href="/contact" className="fill">
              contact
            </a>
            {/* <p style={{ width: "24px" }}></p> */}
            {userExists ? (
              <a
                style={{ fontWeight: 500, marginLeft: "24px" }}
                className="fill"
                onClick={() => {
                  signOut(auth);
                }}
              >
                Sign Out
              </a>
            ) : (
              <a
                style={{ fontWeight: 500, marginLeft: "24px" }}
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
            <Button
              style={{
                padding: "6px 12px",
                margin: "0px 48px",
                textTransform: "none",
                color: "#fff",
              }}
              variant="outlined"
              color="secondary"
              onClick={() => {
                setOpenDrawer(true);
              }}
            >
              <MenuOpenRoundedIcon />
            </Button>
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
          >
            <div style={{ width: 250, display: "grid", placeContent: "center" }}>
              <Button
                className="drawerButtons"
                variant="contained"
                fullWidth
                onClick={() => {
                  navigate("/");
                }}
              >
                <HomeRoundedIcon />
                &nbsp;&nbsp;Home&nbsp;
              </Button>

              <Button
                className="drawerButtons"
                variant="contained"
                fullWidth
                onClick={() => {
                  navigate("/create");
                }}
              >
                <AddCircleRoundedIcon />
                &nbsp;&nbsp;Create&nbsp;
              </Button>

              <Button
                className="drawerButtons"
                variant="contained"
                fullWidth
                onClick={() => {
                  navigate("/contact");
                }}
              >
                <EmailRoundedIcon />
                &nbsp;&nbsp;Contact&nbsp;
              </Button>

              {userExists ? (
                <Button
                  className="drawerButtons"
                  variant="contained"
                  fullWidth
                  onClick={() => {
                    signOut(auth);
                    navigate("/login");
                  }}
                >
                  <LogoutRoundedIcon />
                  &nbsp;&nbsp;Sign out&nbsp;
                </Button>
              ) : (
                <Button
                  className="drawerButtons"
                  variant="contained"
                  fullWidth
                  onClick={() => {
                    navigate("/login");
                  }}
                >
                  <LoginRoundedIcon />
                  &nbsp;&nbsp;Login / Sign up&nbsp;
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
