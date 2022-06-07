import { Button } from "@mui/material";
import * as React from "react";
import { useEffect } from "react";
import { Component } from "react";
import ReactGridLayout from "react-grid-layout";
import AppBarHeader from "../Components/AppBarHeader";
import { GridItem } from "../interfaces/GridItem";
import "./CreatePage.css";
import { v1 as uuidv1 } from "uuid";
import LeftMenu from "./CreatePage/LeftMenu";
import MiddleGrid from "./CreatePage/MiddleGrid";
// import "/node_modules/react-grid-layout/css/styles.css";
// import "/node_modules/react-resizable/css/styles.css";

const CreatePage: React.FC = (props) => {
  // layout is an array of objects, see the demo for more complete usage
  const [layout, setLayout] = React.useState<GridItem[]>([
    { name: "about1()uuid()", i: "about1()uuid()", x: 0, y: 0, w: 10, h: 22, isResizable: false },
    // { i: "education", x: 6, y: 22, w: 4, h: 24, isResizable: true },
    // { i: "skills", x: 6, y: 46, w: 4, h: 24, isResizable: true },
    // { i: "skills1", x: 6, y: 70, w: 4, h: 24, isResizable: true },
    // { i: "projects", x: 2, y: 0, w: 2, h: 2 },
    // { i: "others", x: 2, y: 2, w: 2, h: 2 },
    // { i: "skills", x: 2, y: 4, w: 2, h: 2 },
  ]);

  const [items, setItems] = React.useState<{ name: string; x: number; y: number; w: number; h: number }[]>([
    { name: "about1", x: 0, y: 0, w: 10, h: 22 },
  ]);

  // TODO: MAKE A COPY OF LAYOUT FOR STUFFS
  const makeItemsArray = (layout: any) => {
    const newItems: { name: string; x: number; y: number; w: number; h: number }[] = [];
    layout.forEach((element: any) => {
      newItems.push({
        name: element.i.substring(0, element.i.indexOf(" ")),
        x: element.x,
        y: element.y,
        w: element.w,
        h: element.h,
      });
    });
    console.log(items);
    setItems(newItems);
  };

  function onLayoutChange(layout: GridItem[]) {
    setLayout(layout);
    console.log(layout);
  }

  function addBlock(width: number = 1, height: number = 1, itemName: string) {
    // let itemName = `test${layout.length}`;
    itemName = itemName + "()uuid()" + uuidv1();
    for (let i = 0; i < layout.length; i++) {
      const element = layout[i];
      if (
        element.i.substring(0, element.i.indexOf("()uuid()")) == itemName.substring(0, itemName.indexOf("()uuid()"))
      ) {
        console.log(element.i, itemName, "this item already exists");
        itemName = "";
        return;
      }
    }
    setLayout(
      layout.concat({
        name: itemName,
        i: itemName,
        x: Infinity,
        y: Infinity,
        w: width,
        h: height,
        isResizable: false,
      })
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
