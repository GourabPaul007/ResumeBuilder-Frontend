import React from "react";
import AppBarHeader from "../../Components/AppBarHeader";
import Footer from "../../Components/Footer";
import "./LandingPage.css";

import couchLaptop from "../../static/background/couchLaptop.png";
import peopleCouchLaptop from "../../static/background/peopleCouchLaptop.png";
import interview from "../static/background/interview.png";

import TemplateSection from "./TemplateSection";
import HowToSection from "./HowToSection";

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
              src="https://image.freepik.com/free-vector/web-development-programmer-engineering-coding-website-augmented-reality-interface-screens-developer-template-engineer-programming-software-application-design-cartoon-illustration_107791-3863.jpg"
              alt="Coding Illsturation"
            /> */}
          </div>
        </div>
      </section>

      <HowToSection />

      <section style={{ height: 48 }}>&nbsp;</section>

      <TemplateSection />

      {/* <!-- Footer --> */}
      <Footer />
    </>
  );
};

export default LandingPage;
