import React, { ReactNode, useState } from "react";
import AppBarHeader from "../../Components/AppBarHeader";
import Footer from "../../Components/Footer";
import "./LandingPage.css";

import template_1 from "../../static/template_1.png";
import couchLaptop from "../../static/background/couchLaptop.png";
import peopleCouchLaptop from "../../static/background/peopleCouchLaptop.png";
import interview from "../static/background/interview.png";

import resumez3 from "../../static/images/steps/resumez3.png";
import resumez4 from "../../static/images/steps/resumez4.png";
import resumez6 from "../../static/images/steps/resumez6.png";

import StepButton from "@mui/material/StepButton";
import { Step, StepLabel, Stepper } from "@mui/material";

interface LandingPageProps {}

const LandingPage: React.FC<LandingPageProps> = () => {
  // ************************************************************
  // IDK WHAT THESE ARE AND HOW IT GOT HERE
  // ************************************************************
  /* Global Variables */
  const toggleMenu = document.querySelectorAll(".navbar .toggle-menu") as NodeListOf<Element>;
  const navLinks = document.querySelector(".nav-links") as Element;
  const links = document.querySelectorAll(".nav-links a") as NodeListOf<Element>;

  /*
    Main Function
*/
  function toggleLinks(ourArray: any, ourFubction: any) {
    ourArray.forEach((element: any) => {
      element.addEventListener("click", () => {
        ourFubction();
      });
    });
  }
  /*
    Show & Hide Links Sidebar
*/
  function toggleNavLinks(): void {
    navLinks.classList.toggle("active");
  }

  toggleLinks(toggleMenu, toggleNavLinks);
  toggleLinks(links, toggleNavLinks);
  // ************************************************************
  // ************************************************************
  // ************************************************************

  const [activeStep, setActiveStep] = useState(0);

  const handleStep = (step: number) => {
    setActiveStep(step);
    // setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const chooseSlideToShow = (): ReactNode => {
    switch (activeStep) {
      case 0:
        return (
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <img src={resumez3} alt="" style={{ borderRadius: 12 }} />
          </div>
        );

      case 1:
        return (
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <img src={resumez4} alt="" style={{ borderRadius: 12 }} />
          </div>
        );

      case 2:
        return (
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <img src={resumez6} alt="" style={{ borderRadius: 12 }} />
          </div>
        );

      default:
        return <div>Something Went Wrong</div>;
    }
  };

  return (
    <>
      <AppBarHeader />
      {/* <!-- Landing Section --> */}
      <section className="landing" id="welcome-section">
        <div className="container">
          <div className="text">
            <h1 id="welcomeHeader">
              Free Drag & Drop <br />
              Resume Builder.
            </h1>
            <span id="welcomeSubheader">build your resume now, Its free!</span>
            <p id="welcomeText">
              I made this resume builder for getting my resume built the way I wanted. Your feedbacks will make this
              site much more elegant & better.
            </p>
            <div className="btns-group">
              <a href="/create" className="button-secondary">
                Build Your Resume
              </a>
            </div>
          </div>
          <div className="image">
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
              src="https://image.freepik.com/free-vector/web-development-programmer-engineering-coding-website-augmented-reality-interface-screens-developer-project-engineer-programming-software-application-design-cartoon-illustration_107791-3863.jpg"
              alt="Coding Illsturation"
            /> */}
          </div>
        </div>
      </section>

      {/* activeStep={activeStep} */}
      {/* active={true} */}
      {/* Middle Section */}
      <section className="container">
        <Stepper nonLinear alternativeLabel>
          {[
            "Click on the blocks you like and resize & rearrange them to liking",
            "Fill resume information and Click on \n'GET YOUR RESUME'",
            "Preview and download your resume with default pdf downloader",
          ].map((label, index) => (
            <Step active={true} key={label}>
              <StepButton onClick={() => handleStep(index)}>{label}</StepButton>
            </Step>
          ))}
        </Stepper>
        <div style={{ margin: "36px 0px 0px 0px" }}>{chooseSlideToShow()}</div>
      </section>

      <section style={{ height: 48 }}>&nbsp;</section>
      {/* <section className="container">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            // backgroundColor: "aliceblue",
            width: "100%",
            margin: "0px 0px 28rem 0px",
          }}
        >
          <img
            src={peopleCouchLaptop}
            alt="someone saying to someone how resume builder works"
            style={{ marginRight: "auto", width: "40%" }}
          />
          <div style={{ width: "50%", fontSize: 20, lineHeight: 1.7, color: "#6b5be6" }}>
            Create your own custom resume using our drag & drop resume builder Or Choose a template from many of our
            prebuilt resume templates.
            <br />
            <br />
            <a href="/create" className="button-secondary">
              Create Custom Resume
            </a>
            &ensp;
            <a href="#templates" className="button-secondary">
              Choose Template
            </a>
          </div>
        </div>
      </section> */}

      {/* <!-- Projects Section --> */}
      <section className="projects" id="templates">
        <h2 className="section-title fill">Templates</h2>
        <div className="container">
          <div className="projects-content">
            <div className="project">
              <div className="project-image">
                <img
                  // src="https://images.unsplash.com/photo-1498049860654-af1a5c566876?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
                  src={template_1}
                  alt="Template 1 Image"
                />
              </div>
              <div className="project-details">
                <h3 className="project-tile">Template one</h3>
                <p className="project-description">
                  One of the templates to choose from. Accent colors(headings & pills) can be changed.
                </p>
                <div className="btns-group">
                  <a href="/form" className="button-secondary">
                    Use Template
                  </a>
                </div>
              </div>
            </div>
            <div className="project">
              <div className="project-image">
                {/* <img src="https://images.unsplash.com/photo-1421757295538-9c80958e75b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80" alt="Project Image"> */}
              </div>
              <div className="project-details">
                <h3 className="project-tile">project name</h3>
                <p className="project-description">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio, quos recusandae. Vitae hic sit
                  accusantium!
                </p>
                <div className="btns-group">
                  <a href="#" className="button-secondary">
                    view project
                  </a>
                </div>
              </div>
            </div>
            <div className="project">
              <div className="project-image">
                {/* <img src="https://images.unsplash.com/photo-1516542076529-1ea3854896f2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1171&q=80" alt="Project Image"> */}
              </div>
              <div className="project-details">
                <h3 className="project-tile">project name</h3>
                <p className="project-description">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio, quos recusandae. Vitae hic sit
                  accusantium!
                </p>
                <div className="btns-group">
                  <a href="#" className="button-secondary">
                    view project
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="more-projects">
            <a href="https://codepen.io/FedLover/" target="_blank" className="button-secondary" id="profile-link">
              Show More <i className="fas fa-chevron-right"></i>
            </a>
          </div>
        </div>
        <div style={{ height: "24px" }}>&nbsp;</div>
      </section>

      {/* <!-- Footer --> */}
      <Footer />
    </>
  );
};

export default LandingPage;
