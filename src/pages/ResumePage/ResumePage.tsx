import { Dialog, IconButton } from "@mui/material";
import { getAnalytics, logEvent } from "firebase/analytics";
import React, { useState, useRef, useEffect } from "react";
import { useReactToPrint } from "react-to-print";
import { DOWNLOADED_RESUME } from "../../constants";
import { getBlueprint } from "../../helpers/chooseBlueprint";
import IosShareRoundedIcon from "@mui/icons-material/IosShareRounded";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";
import { log } from "../../helpers/logger";

import "./ResumePage.css";
import Footer from "../../Components/Footer";
import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore } from "firebase/firestore";

import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

interface ResumePageProps {}

const ResumePage: React.FC<ResumePageProps> = () => {
  const { resumeName } = useParams();
  console.log(resumeName);

  const [itemsArray, setItemsArray] = useState<any>();
  const [formStyles, setFormStyles] = useState<any>();

  const itemsArrayString = localStorage.getItem("ItemsArray") as string;
  const formStylesString = localStorage.getItem("FormStyles") as string;
  // const itemsArray = templateN.layout || JSON.parse(itemsArrayString);
  // const formStyles = templateN.formStyles || JSON.parse(formStylesString);
  const componentRef = useRef(null);

  // THE SHARE MODAL WITH DIFFERENT SHARE OPTIONS
  const [shareModalOpen, setShareModalOpen] = useState(false);

  // Get Google Analytics
  const analytics = getAnalytics();

  useEffect(() => {
    (async () => {
      try {
        const resumeData = await getResumeData();
        console.log(resumeData);
        if (resumeData) {
          setItemsArray(resumeData.layout);
          setFormStyles(resumeData.formStyles);
        }
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);

  const getResumeData = async () => {
    if (!resumeName) return;
    const db = getFirestore();
    const docRef = doc(db, "resumes", resumeName);
    const docSnap = await getDoc(docRef);
    const data = docSnap.data();
    return data;
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

  return (
    <>
      <div id="resumePageWrapper">
        <div
          style={{
            backgroundColor: "#fff",
            padding: "0x 5px 0px 5px",
            marginTop: "20px",
            boxShadow: "3.6px 3.6px 7px #CDCDCD, -3.6px -3.6px 7px #FFFFFF",
            borderRadius: "10px",
          }}
        >
          <div
            ref={componentRef}
            id="resumeWrapper"
            // style={{
            //   position: "relative",
            //   width: "211mm",
            //   height: "297mm",
            //   margin: "20px 5px 0px 20px",
            // }}
          >
            {itemsArray &&
              formStyles &&
              itemsArray.map((item: any) => {
                return getBlueprint(item, formStyles);
              })}
            {/* WATERMARK */}
            <div className="pdfWatermark">
              made with <span style={{ fontWeight: 600 }}>Resumez</span>
            </div>
          </div>
        </div>
        &nbsp;&nbsp;
        <div id="resumeOptions">
          <IconButton
            size="large"
            style={{
              background: "#fff",
              boxShadow: "3.6px 3.6px 7px #CDCDCD, -3.6px -3.6px 7px #FFFFFF",
              margin: "0px 6px 12px 6px",
            }}
            onClick={async (e) => {
              // DOESNT WORK FOR FIREFOX
              e.preventDefault();
              setShareModalOpen(true);
              const title = "MDN";
              const text = "Learn web development on MDN!";
              const url = "https://resumezin.netlify.app";
              const shareData = {
                title: title,
                text: text,
                url: url,
              };
              try {
                await navigator.share(shareData);
                log("MDN shared successfully");
                navigator.clipboard.writeText(url);
              } catch (err) {
                log(`Error: ${err}`);
              }
            }}
          >
            <IosShareRoundedIcon fontSize="medium" htmlColor="#6b5be6" />
          </IconButton>

          <IconButton
            size="large"
            style={{
              background: "#fff",
              boxShadow: "3.6px 3.6px 7px #CDCDCD, -3.6px -3.6px 7px #FFFFFF",
              margin: "0px 6px 12px 6px",
            }}
            onClick={() => {
              handlePrint();
            }}
          >
            <DownloadRoundedIcon fontSize="medium" htmlColor="#6b5be6" />
          </IconButton>
        </div>
      </div>
      <div style={{ height: "60px", backgroundColor: "#fafafa" }}>&nbsp;</div>
      <Footer />
      {/* <div style={{ width: "100%", display: "flex", justifyContent: "center", padding: "24px" }}>Resumez</div> */}

      <Dialog
        open={shareModalOpen}
        onClose={() => {
          setShareModalOpen(false);
        }}
        PaperProps={{
          style: { borderRadius: 16 },
        }}
      >
        <div id="shareModal">
          <div id="shareModalHeader">
            <p>Share This Resume</p>
            <IconButton style={{ marginLeft: "auto", alignSelf: "end" }} onClick={() => setShareModalOpen(false)}>
              <CloseRoundedIcon />
            </IconButton>
          </div>
          <div
            className="shareListItem"
            onClick={() => {
              const url = `mailto:?subject=Check out this resume!&body=Check out this resume! - ${window.location.href}.`;
              window.open(url, "_blank");
            }}
          >
            <EmailRoundedIcon />
            &nbsp; &nbsp; Share On Email
            <ArrowForwardIosRoundedIcon style={{ marginLeft: "auto" }} />
          </div>
          <div
            className="shareListItem"
            onClick={() => {
              const url = `https://www.facebook.com/sharer.php?u=${window.location.href}`;
              window.open(url, "_blank");
            }}
          >
            <FacebookIcon />
            &nbsp; &nbsp; Share On Facebook
            <ArrowForwardIosRoundedIcon style={{ marginLeft: "auto" }} />
          </div>
          <div
            className="shareListItem"
            onClick={() => {
              const url = `https://www.linkedin.com/sharing/share-offsite/?url=${window.location.href}`;
              window.open(url, "_blank");
            }}
          >
            <LinkedInIcon />
            &nbsp; &nbsp; Share On LinkedIn
            <ArrowForwardIosRoundedIcon style={{ marginLeft: "auto" }} />
          </div>
          <div
            className="shareListItem"
            onClick={() => {
              const url = `https://wa.me/?text=Check%20out%20this%20Resume!%20-%20${window.location.href}`;
              window.open(url, "_blank");
            }}
          >
            <WhatsAppIcon />
            &nbsp; &nbsp; Share On WhatsApp
            <ArrowForwardIosRoundedIcon style={{ marginLeft: "auto" }} />
          </div>
          <div
            className="shareListItem"
            onClick={() => {
              const url = `https://twitter.com/intent/tweet?text=Check%20out%20this%20Resume!%20-%20${window.location.href}`;
              window.open(url, "_blank");
            }}
          >
            <TwitterIcon />
            &nbsp; &nbsp; Share On Twitter
            <ArrowForwardIosRoundedIcon style={{ marginLeft: "auto" }} />
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default ResumePage;

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
