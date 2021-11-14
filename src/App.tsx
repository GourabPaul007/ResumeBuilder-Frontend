import React from "react";
import logo from "./logo.svg";
import "./App.css";
// import { jsPDF } from "jspdf";
import FormPage from "./pages/FormPage";
import { Button, createTheme } from "@mui/material";
import { orange } from "@mui/material/colors";

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
  await fetch("http://localhost:5000/", { method: "GET" })
    .then((response) => response.blob())
    .then((blob) => {
      let link = document.createElement("a");
      link.href = window.URL.createObjectURL(blob);
      link.download = "myFileName.pdf";
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
    overrides: {
      MuiFormControl: {
        root: {
          height: string;
        };
      };
      MuiInputBase: {
        root: {
          height: string;
        };
      };
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
    overrides: {
      MuiFormControl: {
        root: {
          height: string;
        };
      };
      MuiInputBase: {
        root: {
          height: string;
        };
      };
    };
  }
}

const theme = createTheme({
  status: {
    danger: orange[500],
  },
  overrides: {
    MuiFormControl: {
      root: {
        height: "24px",
      },
    },
    MuiInputBase: {
      root: {
        height: "24px",
      },
    },
  },
});

const App: React.FC = () => {
  return (
    <div className="App">
      <Button
        color="inherit"
        style={{ backgroundColor: "green" }}
        onClick={downloadPDF}
      >
        Download
      </Button>
      <FormPage />
    </div>
  );
};

export default App;
