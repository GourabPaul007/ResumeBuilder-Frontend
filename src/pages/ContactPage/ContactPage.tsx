import { Button, Card, CardHeader, Grid, IconButton, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import AppBarHeader from "../../Components/AppBarHeader";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import TwitterIcon from "@mui/icons-material/Twitter";
import Footer from "../../Components/Footer";

interface ContactPageProps {}

const ContactPage: React.FC<ContactPageProps> = () => {
  const [senderName, setSenderName] = useState("");
  const [emailSubject, setEmailSubject] = useState("");
  const [emailBody, setEmailBody] = useState("");

  const gotoLink = (link: string) => {
    window.open(link, "_blank");
  };
  const sendEmail = () => {
    const emailLink =
      "mailto:gourabpaul900@gmail.com" +
      // Email Subject(includes sender name in the end)
      `?subject=${emailSubject + " by " + senderName + " from JohnDoe's Resume Builder"}` +
      // Email Body
      `&body=${emailBody}`;
    gotoLink(emailLink);
  };

  return (
    <>
      <AppBarHeader />
      <div
        style={{
          height: "calc(100vh - 156px)",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Card style={{ padding: "24px 24px 0px 24px", borderRadius: 12, width: "600px" }}>
          <div style={{ textAlign: "center", fontSize: 32, margin: "0px 0px 24px 0px" }}>Contact Info</div>
          <Grid container rowSpacing={2} columnSpacing={2}>
            <Grid item xs={12}>
              <TextField
                id="sender-name"
                label="Your Name"
                variant="filled"
                fullWidth
                onChange={(e) => setSenderName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="email-subject"
                label="Subject"
                variant="filled"
                fullWidth
                onChange={(e) => setEmailSubject(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="email-body"
                label="Body"
                variant="filled"
                fullWidth
                multiline
                rows={6}
                onChange={(e) => setEmailBody(e.target.value)}
              />
            </Grid>
          </Grid>
          <div>&nbsp;</div>
          <Button variant="contained" size="large" onClick={sendEmail} fullWidth>
            Send&nbsp;Email
          </Button>

          <div
            style={{
              padding: 20,
              margin: 20,
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <IconButton
              onClick={() => gotoLink("https://github.com/GourabPaul007")}
              size="large"
              style={{ padding: 16, margin: 8, borderRadius: 8, color: "#333" }}
            >
              <GitHubIcon fontSize="large" />
            </IconButton>
            <IconButton
              onClick={() => gotoLink("https://www.linkedin.com/in/gourab-paul-aa0605216/")}
              size="large"
              style={{ padding: 16, margin: 8, borderRadius: 8, color: "#1e88e5" }}
            >
              <LinkedInIcon fontSize="large" />
            </IconButton>
            <IconButton
              onClick={() => gotoLink("https://twitter.com/gourab_paul007")}
              size="large"
              style={{ padding: 16, margin: 8, borderRadius: 8, color: "#1da1f2" }}
            >
              <TwitterIcon fontSize="large" />
            </IconButton>
            <IconButton
              onClick={() => gotoLink("mailto:gourabpaul900@gmail.com")}
              size="large"
              style={{ padding: 16, margin: 8, borderRadius: 8, color: "#EA4335" }}
            >
              <EmailRoundedIcon fontSize="large" />
            </IconButton>
            <IconButton
              onClick={() => gotoLink("https://discord.gg/YczfSVXNcm")}
              size="large"
              style={{ padding: 16, margin: 8, borderRadius: 8, color: "#EA4335" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="34"
                height="34"
                fill="#536dfe"
                className="bi bi-discord"
                viewBox="0 0 16 16"
              >
                <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z" />
              </svg>
            </IconButton>
          </div>
        </Card>
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;
