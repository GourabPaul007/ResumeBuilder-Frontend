import { Card, CardContent, CardHeader } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { FC } from "react";
import SectionHeader from "./SectionHeader";

const useStyles = makeStyles(() => ({
  card: {
    height: 230,
    width: 420,
    padding: 24,
  },
  cardHeaderText: {
    fontSize: 24,
    color: "#333",
    marginLeft: 0,
  },
  cardMainText: { fontSize: "1.125rem", color: "#555", marginTop: 8, marginLeft: 8, lineHeight: "1.75rem" },
  cardBottomLine: {
    fontSize: "1.125rem",
    color: "#6b5be6",
    marginTop: 8,
    marginLeft: 8,
    lineHeight: "1.75rem",
    letterSpacing: "0.08rem",
  },
}));

interface BenefitsSectionProps {}

const BenefitsSection: FC<BenefitsSectionProps> = () => {
  const classes = useStyles();
  return (
    <>
      <div className="container">
        <SectionHeader supportHeader="THE BEST RESUME BUILDER." mainHeader="The Features of Resumez" />

        <section style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Card className={classes.card}>
            <h3 className={classes.cardHeaderText}>
              <span style={{ fontSize: 28, marginRight: 4, color: "transparent", textShadow: "0 0 0 #ff9800" }}>
                ✨
              </span>
              Drag & Drop
            </h3>
            <p className={classes.cardMainText}>
              Easily design resumes with simple drag & drop cards. Making a resume has never been easier.
            </p>
            <p className={classes.cardBottomLine}>No more pain of ms word.</p>
          </Card>
          <Card className={classes.card}>
            <h3 className={classes.cardHeaderText}>
              <span style={{ fontSize: 28, marginRight: 4 }}>💸</span>
              Free of Cost
            </h3>
            <p className={classes.cardMainText}>
              The site is completely free of cost. Make your resumes without worrying about price.
            </p>
            <p className={classes.cardBottomLine}>Make resumes for free.</p>
          </Card>
          <Card className={classes.card}>
            <h3 className={classes.cardHeaderText}>
              <span style={{ fontSize: 28, marginRight: 4 }}>🔒</span>
              Privacy
            </h3>
            <p className={classes.cardMainText}>
              Your privacy is important. No personal data is sent to our servers. Everything happens in your machine.
            </p>
            <p className={classes.cardBottomLine}>Your data is secure.</p>
          </Card>
        </section>
      </div>
    </>
  );
};

export default BenefitsSection;
