import React from "react";
import "./App.css";
// import { jsPDF } from "jspdf";
import FormPage from "./pages/FormPage";
import { Button, createTheme } from "@mui/material";
import { orange } from "@mui/material/colors";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SubmitPage from "./pages/SubmitPage";
import LandingPage from "./pages/LandingPage";

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

async function downloadPDF() {
  await fetch("http://localhost:5000/api/resume/get-pdf", { method: "GET" })
    .then((response) => response.blob())
    .then((blob) => {
      let link = document.createElement("a");
      link.href = window.URL.createObjectURL(blob);
      link.download = "resume.pdf";
      link.click();
    })
    .catch(() => {
      console.log("Something went worng, please Try again");
    });
}

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
});

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/form" element={<FormPage downloadPDF={downloadPDF} />} />
        <Route
          path="submit"
          element={<SubmitPage downloadPDF={downloadPDF} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
