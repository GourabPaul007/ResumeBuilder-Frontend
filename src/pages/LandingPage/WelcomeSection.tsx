import "./WelcomeSection.css";

import React, { FC } from "react";
import couchLaptop from "../../static/background/couchLaptop.png";

interface WelcomeSectionProps {}

const WelcomeSection: FC<WelcomeSectionProps> = () => {
  return (
    <>
      <section className="landing" id="welcome-section">
        <div className="container">
          <div className="welcomeWrapper">
            <div className="welcomeText">
              <h1 id="welcomeHeader">
                Free Drag & <br />
                Drop Resume <br />
                Builder.
              </h1>
              <span id="welcomeSubheader">build your resume now, Its free!</span>
              <p id="welcomeSubText">
                An excellent tool to help you create a professional resume.
                {/* I made this resume builder for getting my resume built the way I wanted. Your feedbacks will make this
                  site much more elegant & better. */}
              </p>
              <div className="btns-group">
                <a href="#templatesSection" className="chooseTemplateButton">
                  Choose a template
                </a>
                <a href="/create" className="buildResumeButton">
                  Build Your Resume
                </a>
              </div>
            </div>
            <div className="welcomeImage">
              <img
                src={couchLaptop}
                alt="Guy building resume with resume builder"
                style={{
                  // width: "90%",
                  transform: "scale(1)",
                  marginLeft: "auto",
                }}
              />
              {/* <img
        src="https://image.freepik.com/free-vector/web-development-programmer-engineering-coding-website-augmented-reality-interface-screens-developer-template-engineer-programming-software-application-design-cartoon-illustration_107791-3863.jpg"
        alt="Coding Illsturation"
      /> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WelcomeSection;
