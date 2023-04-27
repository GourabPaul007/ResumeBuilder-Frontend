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
import { Navigate, useParams } from "react-router-dom";
import { doc, getDoc, getFirestore } from "firebase/firestore";

import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import EditIcon from "@mui/icons-material/Edit";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import { isResumeOwner } from "../../services/ResumeService";
import { FormStyles } from "../../interfaces/FormStyles";

interface ResumePageProps {}

const ResumePage: React.FC<ResumePageProps> = () => {
  const { resumeName } = useParams();

  const [itemsArray, setItemsArray] = useState<any>();
  const [formStyles, setFormStyles] = useState<FormStyles>();

  const componentRef = useRef(null);

  // THE SHARE MODAL WITH DIFFERENT SHARE OPTIONS
  const [shareModalOpen, setShareModalOpen] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  // SHOW EDIT BUTTON IF ITS THE OWNER
  const [isOwner, setIsOwner] = useState(false);
  useEffect(() => {
    (async () => setIsOwner(await isResumeOwner(resumeName || "")))();
  }, []);

  // Get Google Analytics
  const analytics = getAnalytics();

  useEffect(() => {
    (async () => {
      setIsOwner(await isResumeOwner(resumeName || ""));
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

          {isOwner && (
            <IconButton
              size="large"
              style={{
                background: "#fff",
                boxShadow: "3.6px 3.6px 7px #CDCDCD, -3.6px -3.6px 7px #FFFFFF",
                margin: "0px 6px 12px 6px",
              }}
              onClick={() => {
                window.location.href = "/create";
              }}
            >
              <EditIcon fontSize="medium" htmlColor="#6b5be6" />
            </IconButton>
          )}

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

          {/* HOME BUTTON */}
          <IconButton
            size="large"
            style={{
              background: "#fff",
              boxShadow: "3.6px 3.6px 7px #CDCDCD, -3.6px -3.6px 7px #FFFFFF",
              margin: "0px 6px 12px 6px",
            }}
            onClick={() => {
              window.location.href = "/";
            }}
          >
            <HomeRoundedIcon fontSize="medium" htmlColor="#6b5be6" />
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
          <div
            id="shareCopyUrl"
            onClick={() => {
              navigator.clipboard.writeText(window.location.href);
              setIsCopied(true);
              setTimeout(() => {
                setIsCopied(false);
              }, 2000);
            }}
          >
            <p style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "clip" }}>{window.location.href}</p>
            ...
            {isCopied ? <p style={{ color: "#5b6be6" }}>&nbsp;&nbsp;Copied!</p> : <p>&nbsp;&nbsp;&nbsp;&nbsp;Copy</p>}
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default ResumePage;
