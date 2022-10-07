import React from "react";
import AppBarHeader from "../../Components/AppBarHeader";
import Footer from "../../Components/Footer";
import "./LandingPage.css";

import TemplateSection from "./TemplateSection";
import HowToSection from "./HowToSection";
import BenefitsSection from "./BenefitsSection";
import WelcomeSection from "./WelcomeSection";

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

      <WelcomeSection />

      <BenefitsSection />

      <section style={{ height: 312 }}>&nbsp;</section>

      <HowToSection />

      <section style={{ height: 128 }}>&nbsp;</section>

      <TemplateSection />

      {/* <!-- Footer --> */}
      <Footer />
    </>
  );
};

export default LandingPage;
