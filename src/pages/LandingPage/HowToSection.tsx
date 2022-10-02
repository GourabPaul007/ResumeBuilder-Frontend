import React, { useState, FC, ReactNode } from "react";
import resumez3 from "../../static/images/steps/resumez3.png";
import resumez4 from "../../static/images/steps/resumez4.png";
import resumez6 from "../../static/images/steps/resumez6.png";

import StepButton from "@mui/material/StepButton";
import { Step, Stepper } from "@mui/material";
import SectionHeader from "./SectionHeader";

interface HowToSectionProps {}

const HowToSection: FC<HowToSectionProps> = () => {
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
      {/* activeStep={activeStep} */}
      {/* active={true} */}
      {/* Middle Section */}
      <section className="container">
        <SectionHeader supportHeader="3 STEPS IS ALL IT TAKES" mainHeader="How to make custom resume with Resumez?" />

        <Stepper nonLinear alternativeLabel>
          {[
            "Click on the blocks you like and resize & rearrange them to liking",
            "Fill resume information and Click on \n'GET YOUR RESUME'",
            "Preview and download your resume with default pdf downloader",
          ].map((label, index) => (
            <Step active={true} key={label}>
              <StepButton style={{ fontSize: "1rem", fontWeight: 500 }} onClick={() => handleStep(index)}>
                {label}
              </StepButton>
            </Step>
          ))}
        </Stepper>
        <div style={{ margin: "36px 0px 0px 0px" }}>{chooseSlideToShow()}</div>
      </section>
    </>
  );
};

export default HowToSection;
