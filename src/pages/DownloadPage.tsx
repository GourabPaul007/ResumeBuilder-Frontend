import React from "react";
import { Box, Button, Card, CircularProgress, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AppBarHeader from "../Components/AppBarHeader";
import Footer from "../Components/Footer";

const useStyles = makeStyles({
  centerChildren: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  downloadButton: {
    backgroundColor: `#6b5be6`,
    color: "#fdfdfd",
    margin: 20,
    fontWeight: 600,
    "&:disabled": {
      backgroundColor: "red",
    },
  },
});

interface DownloadPageProps {}

const DownloadPage: React.FC<DownloadPageProps> = (props) => {
  const params = useParams();

  const [disabled, setDisabled] = useState(true);
  const [progress, setProgress] = useState(5);

  // Download PDF
  async function downloadPDF() {
    await fetch(`http://localhost:5000/api/custom/get-pdf/${params.resumeID}`, {
      method: "GET",
    })
      .then((response) => response.blob())
      .then((blob) => {
        let link = document.createElement("a");
        link.href = window.URL.createObjectURL(blob);
        link.download = "resume.pdf";
        link.click();
      })
      .then(() => {
        setDisabled(true);
      })
      .catch(() => {
        console.log("Something went worng, please Try again");
      });
  }

  const randomColor = () => {
    const colorArray = ["#f44336", "#e91e63", "#673ab7", "#ff5722", "#4caf50"];
    return colorArray[Math.floor(Math.random() * colorArray.length)];
  };
  const classes = useStyles();

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDisabled(false);
    }, 1000);

    const interval = setInterval(() => {
      setProgress((prevProgress) => (prevProgress <= 0 ? 0 : prevProgress - 1));
    }, 1000);

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <AppBarHeader />
      <div
        className={classes.centerChildren}
        style={{
          height: "70vh",
        }}
      >
        <div style={{ padding: 42 }}>
          <Typography
            fontSize={24}
            align="center"
            fontFamily="monospace"
            fontWeight="600"
            color="#6b5be6"
            style={{ marginBottom: 28, /* color: `${randomColor()}`,*/ margin: 20 }}
          >
            Please wait 5 seconds while we prepare your resume
            <br />
            then click the download button
          </Typography>
          <div className={classes.centerChildren} style={{ margin: 20 }}>
            <Box sx={{ position: "relative", display: "inline-flex" }}>
              <CircularProgress style={{ color: `${randomColor()}` }} />
              <Box
                sx={{
                  top: 0,
                  left: 0,
                  bottom: 0,
                  right: 0,
                  position: "absolute",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography variant="h6" component="div" color="text.secondary">
                  {progress === 0 ? "" : progress}
                </Typography>
              </Box>
            </Box>
          </div>

          <div className={classes.centerChildren}>
            <Button
              size="large"
              variant="contained"
              disabled={disabled}
              className={classes.downloadButton}
              onClick={downloadPDF}
            >
              Download
            </Button>
          </div>
        </div>
      </div>
      <div style={{ position: "fixed", bottom: 0, right: 0, left: 0 }}>
        <Footer />
      </div>
    </>
  );
};

export default DownloadPage;
