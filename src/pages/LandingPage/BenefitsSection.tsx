import "./BenefitsSection.css";

import { Card } from "@mui/material";
import React, { FC } from "react";
import SectionHeader from "./SectionHeader";

interface BenefitsSectionProps {}

const BenefitsSection: FC<BenefitsSectionProps> = () => {
  return (
    <>
      <div className="container">
        <SectionHeader supportHeader="THE BEST RESUME BUILDER." mainHeader="The Features of Resumez" />

        <section style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Card className="card">
            <h3 className="cardHeaderText">
              <span style={{ fontSize: 28, marginRight: 4, color: "transparent", textShadow: "0 0 0 #ff9800" }}>
                ✨
              </span>
              Drag & Drop
            </h3>
            <p className="cardMainText">
              Easily design resumes with simple drag & drop cards. Making a resume has never been easier.
            </p>
            <p className="cardBottomLine">No more pain of ms word.</p>
          </Card>
          <Card className="card">
            <h3 className="cardHeaderText">
              <span className="cardHeaderEmoji">💸</span>
              Free of Cost
            </h3>
            <p className="cardMainText">
              The site is completely free of cost. Make your resumes without worrying about price.
            </p>
            <p className="cardBottomLine">Make resumes for free.</p>
          </Card>
          <Card className="card">
            <h3 className="cardHeaderText">
              <span className="cardHeaderEmoji">🔒</span>
              Privacy
            </h3>
            <p className="cardMainText">
              Your privacy is important. No personal data is sent to our servers. Everything happens in your machine.
            </p>
            <p className="cardBottomLine">Your data is secure.</p>
          </Card>
        </section>
      </div>
    </>
  );
};

export default BenefitsSection;
