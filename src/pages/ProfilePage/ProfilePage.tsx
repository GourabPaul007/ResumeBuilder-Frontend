import { Button, IconButton, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import AppBarHeader from "../../Components/AppBarHeader";
import { makeStyles } from "@mui/styles";
import { getCurrentUser, getUserData, saveCurrentProfile } from "../../services/userService";
import ContentCopyRoundedIcon from "@mui/icons-material/ContentCopyRounded";
import { User } from "@firebase/auth";

const useStyles = makeStyles((theme) => ({
  greyedTextField: {
    color: "#444",
    fontWeight: "bold",
  },
}));

interface ProfilePageProps {}

const ProfilePage: React.FC<ProfilePageProps> = () => {
  const classes = useStyles();
  const url = window.location.origin;
  // const [userName, setUserName] = useState("");
  const [fullName, setFullName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userId, setUserId] = useState("");
  const [resumeLink, setResumeLink] = useState("");
  const [resumeLinkCopied, setResumeLinkCopied] = useState(false);
  // const [typedResumeId, setTypedResumeId] = useState("");
  useEffect(() => {
    (async () => {
      const user: User = await getCurrentUser();
      const userData = await getUserData(user.uid);
      setUserId(user.uid);
      setResumeLink(url + "/resumes/" + user.uid);
      setUserEmail(userData.userEmail);
      setFullName(userData.fullName);
      // setUserName(userId);
      // setTypedResumeId(userId);
    })();
  }, []);

  return (
    <>
      <AppBarHeader />
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
        <div
          style={{
            width: "600px",
            padding: "20px",
            margin: "200px 0px 0px 0px",
            boxShadow:
              "rgba(0, 0, 0, 0.2) 0px 2px 1px -1px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px",
            borderRadius: "5px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <h3 style={{ fontWeight: "600" }}>My Profile</h3>
          &nbsp;
          {/* TO CHANGE NAME */}
          <TextField
            label="Full Name"
            variant="standard"
            hiddenLabel
            value={fullName}
            onChange={(e) => {
              setFullName(e.target.value);
            }}
          />
          &nbsp;
          {/* THE EMAIL ADDRESS */}
          <TextField
            label="Email Address"
            variant="standard"
            hiddenLabel
            disabled={true}
            value={userEmail}
            onChange={(e) => {
              setUserEmail(e.target.value);
            }}
          />
          &nbsp;
          {/* THE RESUME LINK */}
          <TextField
            label="Resume Link"
            variant="standard"
            hiddenLabel
            disabled={true}
            value={resumeLink}
            InputProps={{
              className: classes.greyedTextField,
              // startAdornment: <p style={{ fontWeight: "bold" }}>{"http://localhost:3000/"}</p>,
              endAdornment: resumeLinkCopied ? (
                <p style={{ color: "#5b6be6", fontSize: "16px" }}>Copied!</p>
              ) : (
                <IconButton
                  onClick={() => {
                    navigator.clipboard.writeText(resumeLink);
                    setResumeLinkCopied(true);
                    setTimeout(() => {
                      setResumeLinkCopied(false);
                    }, 3000);
                  }}
                  edge="end"
                >
                  <ContentCopyRoundedIcon />
                </IconButton>
              ),
            }}
          />
          &nbsp;
          <Button
            variant="contained"
            size="large"
            // disabled={setUserName === typedResumeId}
            onClick={async () => {
              await saveCurrentProfile(userId, fullName, userEmail, [userId]);
              window.location.href = window.location.origin;
            }}
          >
            Save
          </Button>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
