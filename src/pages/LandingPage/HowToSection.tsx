import "./HowToSection.css";

import React, { useState, FC, ReactNode } from "react";
import step1 from "../../static/images/steps/step1.png";
import step2 from "../../static/images/steps/step2.png";
import step3 from "../../static/images/steps/step3.png";
import step4 from "../../static/images/steps/step4.png";

import SectionHeader from "./SectionHeader";

interface HowToSectionProps {}

const HowToSection: FC<HowToSectionProps> = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [steps, setSteps] = useState([
    {
      id: 1,
      active: true,
      name: "Select",
      emoji: "👆",
      data: "Click on the blocks you like and resize & rearrange them to liking",
      image: step1,
    },
    {
      id: 2,
      active: true,
      name: "Fill Up",
      emoji: "📄",
      data: "Fill resume information and Click on \n'GET RESUME'",
      image: step2,
    },
    {
      id: 3,
      active: true,
      name: "Preview",
      emoji: "👀",
      data: "Preview your resume, see if you like it. You can always edit back.",
      image: step3,
    },
    {
      id: 4,
      active: true,
      name: "Download",
      emoji: "📥",
      data: "Download your resume with your default pdf downloader",
      image: step4,
    },
  ]);

  const chooseSlideToShow = (stepId: number): ReactNode => {
    switch (stepId) {
      case 1:
        return (
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <h3 className="howToSectionImageHeader">{steps[stepId - 1].data}</h3>
            <img src={steps[stepId - 1].image} alt="" style={{ borderRadius: 12 }} />
          </div>
        );

      case 2:
        return (
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <h3 className="howToSectionImageHeader">{steps[stepId - 1].data}</h3>
            <img src={steps[stepId - 1].image} alt="" style={{ borderRadius: 12 }} />
          </div>
        );

      case 3:
        return (
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <h3 className="howToSectionImageHeader">{steps[stepId - 1].data}</h3>
            <img src={steps[stepId - 1].image} alt="" style={{ borderRadius: 12 }} />
          </div>
        );

      case 4:
        return (
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <h3 className="howToSectionImageHeader">{steps[stepId - 1].data}</h3>
            <img src={steps[stepId - 1].image} alt="" style={{ borderRadius: 12 }} />
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
        <SectionHeader supportHeader="4 STEPS IS ALL IT TAKES" mainHeader="How to make custom resume with Resumez?" />
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div className="stepButtonGroup">
            {steps.map((eachStep) => {
              return (
                <button
                  key={eachStep.id}
                  className={`stepButton ${eachStep.id === activeStep ? "stepButtonActive" : ""}`}
                  onClick={() => setActiveStep(eachStep.id)}
                >
                  <span className="buttonEmoji">{eachStep.emoji}</span>
                  &nbsp;{eachStep.name}&nbsp;
                </button>
              );
            })}
          </div>
        </div>
        <div style={{ margin: "12px 0px 0px 0px" }}>{chooseSlideToShow(activeStep)}</div>
      </section>
    </>
  );
};

export default HowToSection;
