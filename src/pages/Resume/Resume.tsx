import { Alert, IconButton } from "@mui/material";
import Button from "@mui/material/Button";
import { getAnalytics, logEvent } from "firebase/analytics";
import React, { useEffect, useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { DOWNLOADED_RESUME } from "../../constants";
import { getBlueprint } from "../../helpers/chooseBlueprint";
import IosShareRoundedIcon from "@mui/icons-material/IosShareRounded";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";
import { log } from "../../helpers/logger";

interface ResumeProps {}

const Resume: React.FC<ResumeProps> = () => {
  const itemsArrayString = localStorage.getItem("ItemsArray") as string;
  const formStylesString = localStorage.getItem("FormStyles") as string;
  const itemsArray = templateN.layout || JSON.parse(itemsArrayString);
  const formStyles = templateN.formStyles || JSON.parse(formStylesString);
  const componentRef = useRef(null);

  // Get Google Analytics
  const analytics = getAnalytics();

  // CHECK IF NAVIGATOR.SHARE EXISTS ON BROWSER
  const [canShare, setCanShare] = React.useState<any | undefined>(undefined);
  useEffect(() => {
    setCanShare(navigator.share);
  }, []);

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

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "start",
          backgroundColor: "#fafafa",
        }}
      >
        <div
          style={{
            backgroundColor: "#fff",
            padding: "0x 5px 0px 5px",
            marginTop: "20px",
            // boxShadow: "3px 3px 4px #d5d5d7, -3px -3px 8px #FFFFFF",
            // background: "#fafafa";
            // boxShadow: "9.91px 9.91px 20px #D7D7D7, -9.91px -9.91px 20px #FFFFFF",
            // boxShadow: "16.52px 16.52px 24px #CECECE, -16.52px -16.52px 24px #FFFFFF",
            boxShadow: "3.6px 3.6px 7px #CDCDCD, -3.6px -3.6px 7px #FFFFFF",
            // border: "1px solid #6b5be6",
            borderRadius: "15px",
          }}
        >
          <div
            ref={componentRef}
            style={{ position: "relative", width: "211mm", height: "297mm", margin: "20px 5px 0px 20px" }}
          >
            {itemsArray.map((item: any) => {
              return getBlueprint(item, formStyles);
            })}
            {/* WATERMARK */}
            <div className="pdfWatermark">
              made with <span style={{ fontWeight: 600 }}>Resumez</span>
            </div>
          </div>
        </div>
        &nbsp;&nbsp;
        <div style={{ margin: "20px", display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginBottom: "12px" }}>
            <IconButton
              size="large"
              style={{
                background: "#fff",
                boxShadow: "3.6px 3.6px 7px #CDCDCD, -3.6px -3.6px 7px #FFFFFF",
                // boxShadow: "3px 3px 8px #DDDDDD, -3px -3px 8px #FFFFFF",
              }}
              onClick={async (e) => {
                // DOESNT WORK FOR FIREFOX
                e.preventDefault();
                const title = "MDN";
                const text = "Learn web development on MDN!";
                const url = "https://resumezin.netlify.app";
                const shareData = {
                  title: title,
                  text: text,
                  url: url,
                };
                try {
                  if (canShare) {
                    await navigator.share(shareData);
                    log("MDN shared successfully");
                  } else {
                    navigator.clipboard.writeText(url);
                  }
                } catch (err) {
                  log(`Error: ${err}`);
                }
              }}
            >
              <IosShareRoundedIcon fontSize="medium" htmlColor="#6b5be6" />
            </IconButton>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Alert severity="success">This is a success alert — check it out!</Alert>
          </div>

          <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <IconButton
              size="large"
              style={{ background: "#fff", boxShadow: "3.6px 3.6px 7px #CDCDCD, -3.6px -3.6px 7px #FFFFFF" }}
            >
              <DownloadRoundedIcon fontSize="medium" htmlColor="#6b5be6" />
            </IconButton>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Alert severity="success">This is a success alert — check it out!</Alert>
          </div>
          {/* <Button
            variant="contained"
            fullWidth
            // style={{ backgroundColor: "#5b6be6" }}
            onClick={() => {
              // Download PDF
            }}
          >
            Download
          </Button> */}
        </div>
      </div>
    </>
  );
};

export default Resume;

export const templateN = {
  formStyles: {
    titleFilled: false,
    titleFullWidth: true,
    titleUnderline: true,
    titleColor: "#000000",
    titleFillColor: "#ccffcc",
    accentColor: "#991ffe",
    fontFamily: "",
  },
  layout: [
    {
      name: "educations2",
      x: 0,
      y: 34,
      w: 12,
      h: 9,
      data: {
        title: "Educations",
        data: [
          {
            id: "education1664549014174",
            courseName: "Electrical Engg & Computer Science",
            courseResults: "Cumulative CGPA 3.70",
            organizationName: "University of Cambridge",
            courseDuration: "JUNE 2018 - JULY 2022",
          },
          {
            id: "education1664550618549",
            courseName: "Bachelors in Computer Science",
            courseDuration: "JUNE 2015 - JULY 2018",
            organizationName: "University of Oxford",
            courseResults: "Cumulative CGPA 3.50",
          },
          {
            id: "education1664550653365",
            courseName: "Higher Sceondary Science Course",
            courseDuration: "MAY 2015",
            organizationName: "Palo Alto High School",
            courseResults: "85% Marks",
          },
        ],
        style: { bgColor: "#ffffff", textColor: "#000000" },
      },
    },
    {
      name: "skills1",
      x: 0,
      y: 11,
      w: 4,
      h: 14,
      data: {
        color: "#9200f2",
        title: "Skills",
        chipRadius: 16,
        chipSize: 4,
        filled: true,
        flipped: true,
        data: [
          "HTML",
          "CSS",
          "JavaScript",
          "TypeScript",
          "ReactJS",
          "NextJS",
          "Flutter",
          "NodeJS",
          "ExpressJS",
          "Python",
          "MySql",
          "MongoDB",
          "Sqlite",
        ],
        style: { bgColor: "#ffffff", textColor: "#000000" },
      },
    },
    {
      name: "works2",
      x: 4,
      y: 11,
      w: 8,
      h: 23,
      data: {
        title: "Work Experience",
        data: [
          {
            id: "work1664549014174",
            workOrganizationName: "Company",
            workLocation: "Location",
            jobTitle: "Job Title",
            workDetails: [
              "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh. ",
              " Excepturi, reprehenderit at doloremque eaque aperiam.",
            ],
            workDuration: "MAR 2020 - PRESENT",
          },
          {
            id: "work1664552126131",
            workOrganizationName: "Company",
            workLocation: "Location",
            jobTitle: "Job Title",
            workDetails: [
              "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh. ",
              " Excepturi, reprehenderit at doloremque eaque aperiam.",
            ],
            workDuration: "APR 2018 - MAR 2020",
          },
          {
            id: "work1664552169244",
            workOrganizationName: "Company",
            workLocation: "Location",
            jobTitle: "Job Title",
            workDetails: [
              "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh. ",
              " Excepturi, reprehenderit at doloremque eaque aperiam.",
            ],
            workDuration: "JAN 2015 - APR 2018",
          },
        ],
        style: { bgColor: "#ffffff", textColor: "#000000" },
      },
    },
    {
      name: "ratings1",
      x: 0,
      y: 25,
      w: 4,
      h: 9,
      data: {
        title: "Languages",
        ratingType: "star",
        icon: "square",
        flipped: true,
        data: [
          { id: "rating1664552367539", ratingSubject: "Language", rateInPercentage: 100 },
          { id: "rating1664552411504", ratingSubject: "Language", rateInPercentage: 80 },
          { id: "rating1664552412260", ratingSubject: "Language ", rateInPercentage: 100 },
        ],
        style: { bgColor: "#ffffff", textColor: "#000000" },
      },
    },
    {
      name: "aboutwithcontact2",
      x: 0,
      y: 0,
      w: 12,
      h: 11,
      data: {
        name: "John Doe",
        profession: "Software Engineer",
        address: ["123 Street, City, State"],
        cityZip: "",
        phno: "+00 1234567890",
        emails: ["abc@example.com ", " Github.com/LoremIpsum"],
        about:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quae expedita architecto, doloribus recusandae iste harum fugit, maxime ipsa nemo magnam provident amet voluptate eveniet unde illo! Dolores, alias porro.\n  ",
        style: { bgColor: "#9b20ff", textColor: "#ffffff" },
      },
    },
    {
      name: "others1",
      x: 0,
      y: 43,
      w: 12,
      h: 10,
      data: {
        title: "Others",
        bullet: 9679,
        data: [
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quae expedita architecto, doloribus recusandae iste harum fugit.",
          " Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quae expedita architecto, doloribus recusandae iste harum fugit.",
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quae expedita architecto, doloribus recusandae iste harum fugit",
        ],
        style: { bgColor: "#ffffff", textColor: "#000000" },
      },
    },
  ],
};
