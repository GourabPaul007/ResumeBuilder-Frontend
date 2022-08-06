import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CircularProgress from "@mui/material/CircularProgress";
import { makeStyles } from "@mui/styles";
import Typography from "@mui/material/Typography";
import React, { useEffect, useState } from "react";

interface DownloadModalProps {
  resumeID: string;
}

const useStyles = makeStyles({
  centerChildren: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

const DownloadModal: React.FC<DownloadModalProps> = (props) => {
  const classes = useStyles();

  const [disabled, setDisabled] = useState(true);
  const [progress, setProgress] = useState(5);

  // Download PDF
  async function downloadPDF() {
    // await fetch(`http://localhost:5000/api/custom/get-pdf/${props.id}`, {
    //   method: "GET",
    // });
    await fetch(`http://localhost:5000/api/custom/get-pdf/${props.resumeID}`, {
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
      .catch((e) => {
        console.log("Something went worng, please Try again", e);
      });
  }

  const randomColor = () => {
    const colorArray = ["tomato", "violet", "#ff6f00", "#ad1457"];
    return colorArray[Math.floor(Math.random() * colorArray.length)];
  };

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
      <div
        className={classes.centerChildren}
        style={{
          height: "400px",
          width: "70vh",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <Card
          style={{
            backgroundColor: "#ddd",
            border: "1px solid #aaa",
            // boxShadow: "24px 24px #ccc",
            padding: 48,
          }}
        >
          <Typography
            fontSize={24}
            align="center"
            fontFamily="monospace"
            fontWeight="600"
            color="yellow"
            style={{
              marginBottom: 28,
              color: `${randomColor()}`,
              margin: 20,
            }}
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
              color="inherit"
              disabled={disabled}
              style={{
                backgroundColor: `${randomColor()}`,
                margin: 20,
                fontWeight: 600,
              }}
              onClick={downloadPDF}
            >
              Download
            </Button>
          </div>
        </Card>
      </div>
    </>
  );
};

export default DownloadModal;
