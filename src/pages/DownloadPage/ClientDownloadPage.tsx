import React, { useRef } from "react";
import { Box, Button, Card, CircularProgress, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AppBarHeader from "../../Components/AppBarHeader";
import Footer from "../../Components/Footer";
import { getAuth } from "firebase/auth";
import { useReactToPrint } from "react-to-print";
import { FormStyles } from "../../interfaces/FormStyles";
import { AboutBlueprint1 } from "./blueprints/aboutBlueprints";
import { ContactBlueprint1, ContactBlueprint2 } from "./blueprints/ContactBlueprints";
import { AboutWithContactBlueprint1, AboutWithContactBlueprint2 } from "./blueprints/AboutWithContactBlueprints";
import { EducationsBlueprint1 } from "./blueprints/EducationBlueprints";
import { ProjectsBlueprint1 } from "./blueprints/ProjectBlueprints";
import { SkillsBlueprint1, SkillsBlueprint2 } from "./blueprints/SkillsBlueprints";
import { WorksBlueprint1, WorksBlueprint2 } from "./blueprints/WorksBlueprints";
import { RatingsBlueprint1, RatingsBlueprint2 } from "./blueprints/RatingsBlueprints";
import { OthersBlueprint1 } from "./blueprints/OthersBlueprints";

const useStyles = makeStyles({
  centerChildren: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

interface ClientDownloadPageProps {}

const ClientDownloadPage: React.FC<ClientDownloadPageProps> = (props) => {
  const itemsArrayString = localStorage.getItem("ItemsArray") as string;
  const formStylesString = localStorage.getItem("FormStyles") as string;
  const itemsArray = JSON.parse(itemsArrayString);
  const formStyles = JSON.parse(formStylesString);
  const componentRef = useRef(null);

  // Build PDF
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  /**
   * Gets block name and returns section according to the name
   * @param element single block of resume
   * @param formStyles global styles of resume
   * @returns single section of resume
   */
  const organizeData = (element: any, formStyles: FormStyles) => {
    console.log("element", element);
    switch (element.name) {
      case "aboutwithcontact1":
        return <AboutWithContactBlueprint1 key={element.name} aboutWithContact={element} formStyles={formStyles} />;
      case "aboutwithcontact2":
        return <AboutWithContactBlueprint2 key={element.name} aboutWithContact={element} formStyles={formStyles} />;
      case "about1":
        return <AboutBlueprint1 key={element.name} about={element} formStyles={formStyles} />;
      case "contact1":
        return <ContactBlueprint1 key={element.name} contact={element} formStyles={formStyles} />;
      case "contact2":
        return <ContactBlueprint2 key={element.name} contact={element} formStyles={formStyles} />;
      case "educations1":
        return <EducationsBlueprint1 key={element.name} educations={element} formStyles={formStyles} />;
      case "educations2":
        return <EducationsBlueprint1 key={element.name} educations={element} formStyles={formStyles} />;
      case "skills1":
        return <SkillsBlueprint1 key={element.name} skills={element} formStyles={formStyles} />;
      case "skills2":
        return <SkillsBlueprint2 key={element.name} skills={element} formStyles={formStyles} />;
      case "works1":
        return <WorksBlueprint1 key={element.name} works={element} formStyles={formStyles} />;
      case "works2":
        return <WorksBlueprint2 key={element.name} works={element} formStyles={formStyles} />;
      case "projects1":
        return <ProjectsBlueprint1 key={element.name} projects={element} formStyles={formStyles} />;
      case "ratings1":
        return <RatingsBlueprint1 key={element.name} ratings={element} formStyles={formStyles} />;
      case "ratings2":
        return <RatingsBlueprint2 key={element.name} ratings={element} formStyles={formStyles} />;
      case "others1":
        return <OthersBlueprint1 key={element.name} others={element} formStyles={formStyles} />;
      default:
        break;
    }
  };

  return (
    <>
      <AppBarHeader />
      &nbsp;
      <div>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
          <div
            style={{
              border: "1px solid #5b6be6",
              borderRadius: 5,
              width: "218mm",
              // boxShadow: "1px 2px 2px 2px #000",
            }}
          >
            <div ref={componentRef} style={{ position: "relative", width: "210mm", height: "297mm", margin: 20 }}>
              {itemsArray.map((item: any) => {
                return organizeData(item, formStyles);
              })}
            </div>
          </div>
          &nbsp; &nbsp;
          <div>
            <Button variant="contained" size="large" onClick={handlePrint}>
              Print Resume
            </Button>
          </div>
        </div>
      </div>
      &nbsp;
      <Footer />
    </>
  );
};

export default ClientDownloadPage;
