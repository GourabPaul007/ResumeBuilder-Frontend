import "./ClientDownloadPage.css";

import React, { useRef, useState } from "react";

import { getAnalytics, logEvent } from "firebase/analytics";

import { Button, CircularProgress } from "@mui/material";
import AppBarHeader from "../../Components/AppBarHeader";
import Footer from "../../Components/Footer";
import { useReactToPrint } from "react-to-print";
import { FormStyles } from "../../interfaces/FormStyles";
import { AboutBlueprint1 } from "./blueprints/aboutBlueprints";
import { ContactBlueprint1, ContactBlueprint2, ContactBlueprint3 } from "./blueprints/ContactBlueprints";
import { AboutWithContactBlueprint1, AboutWithContactBlueprint2 } from "./blueprints/AboutWithContactBlueprints";
import { EducationsBlueprint1, EducationsBlueprint2 } from "./blueprints/EducationBlueprints";
import { ProjectsBlueprint1, ProjectsBlueprint2 } from "./blueprints/ProjectBlueprints";
import { SkillsBlueprint1, SkillsBlueprint2 } from "./blueprints/SkillsBlueprints";
import { WorksBlueprint1, WorksBlueprint2 } from "./blueprints/WorksBlueprints";
import { RatingsBlueprint1, RatingsBlueprint2 } from "./blueprints/RatingsBlueprints";
import { CertificationsBlueprint1 } from "./blueprints/CertificationsBlueprints";
import { OthersBlueprint1 } from "./blueprints/OthersBlueprints";

import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import { log } from "../../helpers/logger";
import { useNavigate } from "react-router-dom";
import { DOWNLOADED_RESUME, EDITED_RESUME } from "../../constants";
import { NameBlueprint1 } from "./blueprints/NameBlueprints";
import { ImageBlueprint1 } from "./blueprints/ImageBlueprints";

interface ClientDownloadPageProps {}

const ClientDownloadPage: React.FC<ClientDownloadPageProps> = (props) => {
  const navigate = useNavigate();
  const itemsArrayString = localStorage.getItem("ItemsArray") as string;
  const formStylesString = localStorage.getItem("FormStyles") as string;
  const itemsArray = JSON.parse(itemsArrayString);
  const formStyles = JSON.parse(formStylesString);
  const componentRef = useRef(null);

  // Get Google Analytics
  const analytics = getAnalytics();

  const [loading, setLoading] = useState(false);

  // Go Back Editing
  const handleGoBack = () => {
    try {
      logEvent(analytics, EDITED_RESUME);
      navigate("/create");
    } catch (e) {
      console.error(e);
    }
  };

  // Build PDF
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "Resume",
    onAfterPrint: () => {
      try {
        logEvent(analytics, DOWNLOADED_RESUME);
      } catch (e) {
        console.error(e);
      }
    },
  });

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
    handlePrint();
  };

  /**
   * Gets block name and returns section according to the name
   * @param element single block of resume
   * @param formStyles global styles of resume
   * @returns single section of resume
   */
  const organizeData = (element: any, formStyles: FormStyles) => {
    log("element", element);
    switch (element.name) {
      case "aboutwithcontact1":
        return <AboutWithContactBlueprint1 key={element.name} aboutWithContact={element} formStyles={formStyles} />;
      case "aboutwithcontact2":
        return <AboutWithContactBlueprint2 key={element.name} aboutWithContact={element} formStyles={formStyles} />;
      case "about1":
        return <AboutBlueprint1 key={element.name} about={element} formStyles={formStyles} />;
      case "name1":
        return <NameBlueprint1 key={element.name} name={element} formStyles={formStyles} />;
      case "contact1":
        return <ContactBlueprint1 key={element.name} contact={element} formStyles={formStyles} />;
      case "contact2":
        return <ContactBlueprint2 key={element.name} contact={element} formStyles={formStyles} />;
      case "contact3":
        return <ContactBlueprint3 key={element.name} contact={element} formStyles={formStyles} />;
      case "educations1":
        return <EducationsBlueprint1 key={element.name} educations={element} formStyles={formStyles} />;
      case "educations2":
        return <EducationsBlueprint2 key={element.name} educations={element} formStyles={formStyles} />;
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
      case "projects2":
        return <ProjectsBlueprint2 key={element.name} projects={element} formStyles={formStyles} />;
      case "ratings1":
        return <RatingsBlueprint1 key={element.name} ratings={element} formStyles={formStyles} />;
      case "ratings2":
        return <RatingsBlueprint2 key={element.name} ratings={element} formStyles={formStyles} />;
      case "certifications1":
        return <CertificationsBlueprint1 key={element.name} certifications={element} formStyles={formStyles} />;
      case "others1":
        return <OthersBlueprint1 key={element.name} others={element} formStyles={formStyles} />;
      case "image1":
        return <ImageBlueprint1 key={element.name} image={element} formStyles={formStyles} />;
      default:
        return <>{element.name} case does not exist in CDownloadPage.tsx switch case</>;
    }
  };

  return (
    <>
      <AppBarHeader />
      &nbsp;
      <div className="pageWrapper">
        <div className="pdfOuterDiv">
          <div ref={componentRef} className="pdfInnerDiv">
            {itemsArray.map((item: any) => {
              return organizeData(item, formStyles);
            })}
            {/* WATERMARK */}
            <div className="pdfWatermark">
              made with <span style={{ fontWeight: 600 }}>Resumez</span>
            </div>
          </div>
        </div>
        &nbsp; &nbsp;
        <div>
          <Button variant="contained" size="large" onClick={handleGoBack} style={{ backgroundColor: "#00ccc9" }}>
            <ArrowBackRoundedIcon fontSize="medium" />
            &nbsp;&nbsp;Edit Resume
          </Button>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <Button disabled={loading} variant="contained" size="large" onClick={handleClick}>
            Print Resume&nbsp;&nbsp;
            {loading ? <CircularProgress size={24} color="inherit" /> : <DownloadRoundedIcon fontSize="medium" />}
          </Button>
        </div>
      </div>
      &nbsp;
      <Footer />
    </>
  );
};

export default ClientDownloadPage;
