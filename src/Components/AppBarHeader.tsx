import "./AppBarHeader.css";

import React, { useEffect, useState } from "react";

import { Avatar, Button, Divider, Drawer, IconButton, List, Menu, MenuItem } from "@mui/material";
import { getAuth, onAuthStateChanged, signOut } from "@firebase/auth";
import { useNavigate } from "react-router-dom";

import MenuOpenRoundedIcon from "@mui/icons-material/MenuOpenRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import LoginRoundedIcon from "@mui/icons-material/LoginRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AccountBoxOutlinedIcon from "@mui/icons-material/AccountBoxOutlined";
import DescriptionIcon from "@mui/icons-material/Description";
import { goToYourResume } from "../services/ResumeService";

interface AppBarHeaderProps {}

const AppBarHeader: React.FC<AppBarHeaderProps> = () => {
  const navigate = useNavigate();
  const [openDrawer, setOpenDrawer] = useState(false);
  const [userExists, setUserExists] = useState(false);
  const auth = getAuth();

  useEffect(() => {
    checkAuthChange();
  }, []);

  const checkAuthChange = onAuthStateChanged(auth, (user) => {
    checkAuthChange();
    if (user) setUserExists(true);
    else setUserExists(false);
  });

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
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
            <a style={{ fontWeight: 500 }} href="/create" className="fill">
              create
            </a>
            <a
              style={{ fontWeight: 500 }}
              // href={`/${userId}`}
              className="fill"
              onClick={async (e) => {
                e.preventDefault();
                await goToYourResume();
              }}
            >
              Your Resume
            </a>
            <a style={{ fontWeight: 500 }} href="/contact" className="fill">
              contact
            </a>
            {userExists ? (
              <>
                <IconButton
                  aria-label="profile"
                  style={{
                    marginLeft: 36,
                    padding: "0px",
                    color: "#fff",
                    border: open ? "1px solid #fff" : "1px solid transparent",
                  }}
                  size="small"
                  disableRipple
                  onClick={handleClick}
                >
                  <AccountCircleIcon fontSize="large" />
                </IconButton>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                  PaperProps={{ sx: { width: "200px" } }}
                >
                  <p style={{ color: "#666", padding: "8px 0px 8px 16px" }}>Account</p>
                  <MenuItem
                    onClick={() => {
                      navigate("/profile");
                    }}
                  >
                    <AccountBoxOutlinedIcon /> &nbsp;&nbsp;Profile
                  </MenuItem>
                  <Divider />
                  <MenuItem
                    onClick={async () => {
                      handleClose();
                      await signOut(auth);
                      navigate("/login");
                    }}
                  >
                    <LogoutRoundedIcon />
                    &nbsp;&nbsp;Logout
                  </MenuItem>
                </Menu>
              </>
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

          {/* ============================================================= */}
          {/* ============================================================= */}
          {/* DRAWER FOR SMALLER SCREENS*/}
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
              {/* HOMEPAGE */}
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

              {/* CREATE */}
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

              {/* YOUR RESUME */}
              {userExists ? (
                <Button
                  className="drawerButtons"
                  variant="contained"
                  fullWidth
                  onClick={async (e) => {
                    e.preventDefault();
                    await goToYourResume();
                  }}
                >
                  <DescriptionIcon />
                  &nbsp;&nbsp;Your Resume&nbsp;
                </Button>
              ) : null}

              {/* CONTACT */}
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

              {/* PROFILE */}
              {userExists ? (
                <Button
                  className="drawerButtons"
                  variant="contained"
                  fullWidth
                  onClick={() => {
                    navigate("/profile");
                  }}
                >
                  <AccountCircleIcon />
                  &nbsp;&nbsp;Profile&nbsp;
                </Button>
              ) : null}

              {/* LOGIN/LOGOUT */}
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
