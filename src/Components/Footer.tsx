import "./Footer.css";

import * as React from "react";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import TwitterIcon from "@mui/icons-material/Twitter";
import { IconButton } from "@mui/material";

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  const gotoLink = (link: string) => {
    window.open(link, "_blank");
  };

  return (
    <>
      {/* <footer className="footer" id="contact">
        <div className="container">
          <p>Thank You For Visiting This Site.</p>
          <p>
            Contact Information:&nbsp;
            <a href="mailto:gourabpaul900@google.com?subject=Came%20From%20the%20ResumeBuilder%20Site">
              Email
            </a>{" "}
            &{" "}
            <a href="https://github.com/GourabPaul007" target="_blank">
              Github
            </a>
          </p>
        </div>
      </footer> */}
      <footer className="footer" id="contact">
        <div className="footerContent">
          <div className="footerColumn">
            <p style={{ fontSize: "1rem", marginTop: 12 }}>Thank You For Visiting This Site.</p>
            <p style={{ fontSize: "1rem" }}>Contact Information:</p>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
              }}
            >
              <IconButton
                onClick={() => gotoLink("https://github.com/GourabPaul007")}
                size="large"
                style={{ padding: 8, margin: "8px 8px 8px 0px", borderRadius: 8, color: "#333" }}
              >
                <GitHubIcon fontSize="medium" />
              </IconButton>
              <IconButton
                onClick={() => gotoLink("https://www.linkedin.com/in/gourab-paul-aa0605216/")}
                size="large"
                style={{ padding: 8, margin: 8, borderRadius: 8, color: "#1e88e5" }}
              >
                <LinkedInIcon fontSize="medium" />
              </IconButton>
              <IconButton
                onClick={() => gotoLink("https://twitter.com/gourab_paul007")}
                size="large"
                style={{ padding: 8, margin: 8, borderRadius: 8, color: "#1da1f2" }}
              >
                <TwitterIcon fontSize="medium" />
              </IconButton>
              <IconButton
                onClick={() => gotoLink("mailto:gourabpaul900@gmail.com")}
                size="large"
                style={{ padding: 8, margin: 8, borderRadius: 8, color: "#EA4335" }}
              >
                <EmailRoundedIcon fontSize="medium" />
              </IconButton>
            </div>
          </div>
          <div className="footerColumn">
            <p style={{ fontSize: "2rem", marginBottom: "8px" }}>Resumez</p>
            <p style={{ color: "#333", fontSize: "0.8rem" }}>©{new Date().getFullYear()} Copyright: Resumez</p>
            <p style={{ color: "#333", fontSize: "0.8rem" }}>All rights reserved</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
