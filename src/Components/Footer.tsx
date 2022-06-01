import * as React from "react";

import "./Footer.css";

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <>
      <footer className="footer" id="contact">
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
      </footer>
    </>
  );
};

export default Footer;
