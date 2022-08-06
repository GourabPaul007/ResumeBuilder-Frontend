import React, { useEffect } from "react";
import "./App.css";
// import { jsPDF } from "jspdf";
import { Button, createTheme, ThemeProvider } from "@mui/material";
import { orange } from "@mui/material/colors";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DownloadPage from "./pages/DownloadPage";
import LandingPage from "./pages/LandingPage";
import CreatePage from "./pages/CreatePage";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./firebase";

// async function makePDF() {
//   // var s = '<div id="myDiv"></div>';
//   var s = await fetch("http://localhost:5000/")
//     .then((response) => response.json())
//     .then((data) => data);

//   var htmlObject = document.createElement("div");
//   htmlObject.innerHTML = s;
//   console.log(htmlObject);

//   var doc = new jsPDF("portrait", "mm");
//   doc.html(s, {
//     callback: function (doc) {
//       doc.save();
//     },
//     width: 210,
//     windowWidth: 1000,
//     autoPaging: true,
//   });
// }

declare module "@mui/material/styles" {
  interface Theme {
    status: {
      danger: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
}

const theme = createTheme({
  status: {
    danger: orange[500],
  },
  palette: {
    primary: {
      main: "#6b5be6",
    },
    secondary: {
      main: "#edf2ff",
    },
  },
});

const App: React.FC = () => {
  // useEffect(() => {
  //   // Initialize Firebase
  //   const app = initializeApp(firebaseConfig);
  // }, []);
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          {/* <Route path="/form" element={<FormPage />} /> */}
          <Route path="/create" element={<CreatePage />} />
          <Route path="/download/:resumeID" element={<DownloadPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
