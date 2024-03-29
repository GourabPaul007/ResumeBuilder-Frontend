import "./Footer.css";

import * as React from "react";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import TwitterIcon from "@mui/icons-material/Twitter";
import { IconButton } from "@mui/material";
import { EMAIL_LINK, RAZORPAY_DONATION_SITE_PROD, RAZORPAY_DONATION_SITE_TEST, _isProd } from "../constants";

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  const gotoLink = (link: string) => {
    window.open(link, "_blank");
  };

  return (
    <>
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
                onClick={() => gotoLink(`mailto:${EMAIL_LINK}.com`)}
                size="large"
                style={{ padding: 8, margin: 8, borderRadius: 8, color: "#EA4335" }}
              >
                <EmailRoundedIcon fontSize="medium" />
              </IconButton>
              <IconButton
                onClick={() => gotoLink("https://discord.gg/YczfSVXNcm")}
                size="large"
                style={{ padding: 8, margin: 8, borderRadius: 8, color: "#EA4335" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="#536dfe"
                  className="bi bi-discord"
                  viewBox="0 0 16 16"
                >
                  <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z" />
                </svg>
              </IconButton>
            </div>
          </div>
          <div className="footerColumn">
            <a
              className="donateButton"
              href={_isProd ? RAZORPAY_DONATION_SITE_PROD : RAZORPAY_DONATION_SITE_TEST}
              target="_blank"
            >
              Donate to Resumez
            </a>
          </div>
          <div className="footerColumn">
            <a style={{ fontSize: "2rem", marginBottom: "8px", fontWeight: "600" }} href="/">
              Resumez
            </a>
            <p style={{ color: "#333", fontSize: "0.8rem" }}>©{new Date().getFullYear()} Copyright: Resumez</p>
            <p style={{ color: "#333", fontSize: "0.8rem" }}>All rights reserved</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
