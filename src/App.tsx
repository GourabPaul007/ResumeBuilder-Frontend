import React, { useEffect } from "react";
import "./App.css";
// import { jsPDF } from "jspdf";
import { Button, createTheme, ThemeProvider } from "@mui/material";
import { orange } from "@mui/material/colors";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DownloadPage from "./pages/DownloadPage/DownloadPage";
import LandingPage from "./pages/LandingPage/LandingPage";
import CreatePage from "./pages/CreatePage/CreatePage";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./firebase";
import AuthRoute from "./Components/AuthRoute";
import LoginPage from "./pages/auth/LoginPage";
import SignupPage from "./pages/auth/SignupPage";
import ForgotPassword from "./pages/auth/ForgotPassword";
import ClientDownloadPage from "./pages/DownloadPage/ClientDownloadPage";
import ContactPage from "./pages/ContactPage/ContactPage";

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

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
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              // <AuthRoute>
              <LandingPage />
              // </AuthRoute>
            }
          />
          {/* <Route path="/form" element={<FormPage />} /> */}
          <Route
            path="/create"
            element={
              <AuthRoute>
                <CreatePage />
              </AuthRoute>
            }
          />
          <Route
            path="/download/:resumeID"
            element={
              <AuthRoute>
                {/* <DownloadPage /> */}
                <ClientDownloadPage />
              </AuthRoute>
            }
          />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
