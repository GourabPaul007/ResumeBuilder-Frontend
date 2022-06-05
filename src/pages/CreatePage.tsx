import { Button } from "@mui/material";
import * as React from "react";
import { useEffect } from "react";
import { Component } from "react";
import ReactGridLayout from "react-grid-layout";
import AppBarHeader from "../Components/AppBarHeader";
import { GridItem } from "../interfaces/GridItem";
import "./CreatePage.css";
import LeftMenu from "./CreatePage/LeftMenu";
import MiddleGrid from "./CreatePage/MiddleGrid";
// import "/node_modules/react-grid-layout/css/styles.css";
// import "/node_modules/react-resizable/css/styles.css";

const CreatePage: React.FC = (props) => {
  // layout is an array of objects, see the demo for more complete usage
  const [layout, setLayout]: any = React.useState<GridItem[]>([
    { i: "about", x: 0, y: 0, w: 10, h: 6, isResizable: false },
    { i: "education", x: 3, y: 0, w: 3, h: 9, isResizable: true },
    { i: "work", x: 3, y: 4, w: 4, h: 9, isResizable: true },
    // { i: "projects", x: 2, y: 0, w: 2, h: 2 },
    // { i: "others", x: 2, y: 2, w: 2, h: 2 },
    // { i: "skills", x: 2, y: 4, w: 2, h: 2 },
  ]);

  // TODO: MAKE A COPY OF LAYOUT FOR STUFFS
  const makeItemsArray = (layout: any) => {
    const items: { name: string; x: number; y: number; w: number; h: number }[] = [];
    layout.forEach((element: any) => {
      items.push({
        name: element.i.substring(0, element.i.indexOf(" ")),
        x: element.x,
        y: element.y,
        w: element.w,
        h: element.h,
      });
    });
    console.log(items);
    return items;
  };

  function onLayoutChange(layout: any) {
    setLayout(layout);
    console.log(layout);
  }

  function addBlock(width: number = 1, height: number = 1, itemName: string) {
    // let itemName = `test${layout.length}`;
    setLayout(
      layout.concat({ name: itemName, i: itemName, x: Infinity, y: Infinity, w: width, h: height, isResizable: false })
    );
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
            variant="outlined"
            onClick={async (e) => {
              e.preventDefault();
              await fetch("http://localhost:5000/api/custom/custom-resume", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json", //This is required
                },
                body: JSON.stringify(makeItemsArray(layout)),
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
