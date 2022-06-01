import { Button } from "@mui/material";
import * as React from "react";
import { useEffect } from "react";
import { Component } from "react";
import ReactGridLayout from "react-grid-layout";
import AppBarHeader from "../Components/AppBarHeader";
import "./CreatePage.css";
import LeftMenu from "./CreatePage/LeftMenu";
import MiddleGrid from "./CreatePage/MiddleGrid";
// import "/node_modules/react-grid-layout/css/styles.css";
// import "/node_modules/react-resizable/css/styles.css";

const CreatePage: React.FC = (props) => {
  // layout is an array of objects, see the demo for more complete usage
  const [layout, setLayout] = React.useState([
    { i: "about", x: 0, y: 0, w: 2, h: 2 },
    { i: "education", x: 1, y: 1, w: 1, h: 2 },
    { i: "work", x: 2, y: 2, w: 2, h: 1 },
    // { i: "projects", x: 2, y: 0, w: 2, h: 2 },
    // { i: "others", x: 2, y: 2, w: 2, h: 2 },
    // { i: "skills", x: 2, y: 4, w: 2, h: 2 },
  ]);

  function onLayoutChange(layout: any) {
    // props.onLayoutChange(layout);
    setLayout(layout);
    console.log(layout);
  }

  function addBlock(width: number = 1, height: number = 1) {
    let itemName = `test${layout.length}`;
    setLayout(layout.concat({ i: itemName, x: Infinity, y: Infinity, w: width, h: height }));
    // onLayoutChange(layout);
    console.log("pushed", layout);
  }

  return (
    <>
      <AppBarHeader />

      <div className="createPageWrapper">
        <div className="leftMenu">
          <LeftMenu addBlock={addBlock} />
        </div>
        <div className="middleGrid">
          <MiddleGrid layout={layout} onLayoutChange={onLayoutChange} />
        </div>
        <div className="rightForm">
          <Button
            onClick={async (e) => {
              e.preventDefault();
              await fetch("http://localhost:5000/api/custom/custom-resume", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json", //This is required
                },
                body: JSON.stringify(layout),
              })
                .then((data) => {
                  console.log(data);
                })
                .catch((e) => {
                  console.error(e);
                });
            }}
          >
            Get Resume
          </Button>
        </div>
      </div>
    </>
  );
};
export default CreatePage;
