import { Button, Card, CircularProgress, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import AppBarHeader from "../Components/AppBarHeader";
import Footer from "../Components/Footer";

const useStyles = makeStyles({
  centerChildren: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

interface SubmitPageProps {
  downloadPDF: () => void;
}

const SubmitPage: React.FC<SubmitPageProps> = ({ downloadPDF }) => {
  const [disabled, setDisabled] = useState(true);
  const [progress, setProgress] = useState(5);

  const randomColor = () => {
    const colorArray = ["tomato", "violet", "#ff6f00", "#ad1457"];
    return colorArray[Math.floor(Math.random() * colorArray.length)];
  };
  const classes = useStyles();

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDisabled(false);
    }, 5000);

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
        <Card
          style={{
            backgroundColor: "#ddd",
            border: "1px solid #aaa",
            boxShadow: "24px 24px #ccc",
            padding: 42,
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
      <div style={{ position: "fixed", bottom: 0, right: 0, left: 0 }}>
        <Footer />
      </div>
    </>
  );
};

export default SubmitPage;
