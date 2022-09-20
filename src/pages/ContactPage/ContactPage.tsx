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
          </div>
        </Card>
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;
