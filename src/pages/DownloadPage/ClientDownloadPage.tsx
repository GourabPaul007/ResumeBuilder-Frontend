import React, { useRef, useState } from "react";
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
import { OthersBlueprint1 } from "./blueprints/OthersBlueprints";

import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";
import { getAnalytics, logEvent } from "firebase/analytics";

interface ClientDownloadPageProps {}

const ClientDownloadPage: React.FC<ClientDownloadPageProps> = (props) => {
  const itemsArrayString = localStorage.getItem("ItemsArray") as string;
  const formStylesString = localStorage.getItem("FormStyles") as string;
  const itemsArray = JSON.parse(itemsArrayString);
  const formStyles = JSON.parse(formStylesString);
  const componentRef = useRef(null);

  // Get Google Analytics
  const analytics = getAnalytics();

  const [loading, setLoading] = useState(false);

  // Build PDF
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "Resume",
    onAfterPrint: () => {
      logEvent(analytics, "made_resume");
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
            <div
              ref={componentRef}
              style={{ position: "relative", width: "211mm", height: "297mm", margin: "20px 20px 0px 20px" }}
            >
              {itemsArray.map((item: any) => {
                return organizeData(item, formStyles);
              })}
              {/* WATERMARK */}
              <div
                style={{
                  position: "absolute",
                  bottom: "0px",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  fontSize: "12px",
                  fontWeight: 300,
                }}
              >
                made with <span style={{ fontWeight: 600 }}>Resumez</span>
              </div>
            </div>
          </div>
          &nbsp; &nbsp;
          <div>
            <Button disabled={loading} variant="contained" size="large" onClick={handleClick}>
              Print Resume&nbsp;&nbsp;
              {loading ? <CircularProgress size={24} color="inherit" /> : <DownloadRoundedIcon fontSize="medium" />}
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
