import { Button } from "@mui/material";
import * as React from "react";
import { useEffect, useState } from "react";
import { Component } from "react";
import ReactGridLayout from "react-grid-layout";
import AppBarHeader from "../Components/AppBarHeader";
import { GridItem } from "../interfaces/GridItem";
import "./CreatePage.css";
import { v1 as uuidv1 } from "uuid";
import LeftMenu from "./CreatePage/LeftMenu";
import MiddleGrid from "./CreatePage/MiddleGrid";
import { About } from "../interfaces/About";
import { RightForm } from "./CreatePage/RightForm";
import { Course } from "../interfaces/Course";
import { Work } from "../interfaces/Work";
// import "/node_modules/react-grid-layout/css/styles.css";
// import "/node_modules/react-resizable/css/styles.css";

const CreatePage: React.FC = (props) => {
  // layout is an array of objects, see the demo for more complete usage
  // const [layout, setLayout] = React.useState<GridItem[]>([
  //   { name: "about1()uuid()", i: "about1()uuid()", x: 0, y: 0, w: 10, h: 22, isResizable: false },
  //   // { i: "education", x: 6, y: 22, w: 4, h: 24, isResizable: true },
  //   // { i: "skills", x: 6, y: 46, w: 4, h: 24, isResizable: true },
  //   // { i: "skills1", x: 6, y: 70, w: 4, h: 24, isResizable: true },
  //   // { i: "projects", x: 2, y: 0, w: 2, h: 2 },
  //   // { i: "others", x: 2, y: 2, w: 2, h: 2 },
  //   // { i: "skills", x: 2, y: 4, w: 2, h: 2 },
  // ]);

  // const [name,setName] = React.useState<string>("");
  // const [profession,setProfession] = React.useState<string>("");
  const [about, setAbout] = useState<About>({
    name: "",
    profession: "",
    address: [""],
    cityZip: "",
    phno: "",
    emails: [""],
    about: "",
  });
  const [skills, setSkills] = useState<string[]>([]);
  const [educations, setEducations] = useState<Course[]>([
    { id: `education${Date.now()}`, courseName: "", courseResults: "", organizationName: "" },
  ]);
  const [works, setWorks] = useState<Work[]>([
    { id: `work${Date.now()}`, workOrganizationName: "", workDetails: [""] },
  ]);
  const [others, setOthers] = useState<string[]>([]);

  useEffect(() => {
    setAbout({
      name: "Gourab Paul",
      profession: "Software Engineer",
      address: ["Saktigarh, Railgate Rd.", "Bongaon WB 743235"],
      cityZip: "Bangaon WB 743235",
      phno: "+91 9064040525",
      emails: ["gourabpaul900@gmail.com", "Github.com/GourabPaul007(https://github.com/GourabPaul007)"],
      about:
        "Hello There, I'm a Full-Stack Software Engineer. I like to build softwares to solve existing problems & to overcome major or minor inconveniences.",
    });
    addItem(10, 7, "about1", true);
  }, []);

  const [layout, setLayout] = React.useState<GridItem[]>([]);
  // The actual Items
  const [items, setItems] = React.useState<GridItem[]>([]);
  // The Forms corresponding to items in grid
  const [forms, setForms] = useState<string[]>([]);

  // TODO: MAKE A COPY OF LAYOUT FOR STUFFS
  const makeItemsArray = (layout: any) => {
    // const newItems: { name: string; x: number; y: number; w: number; h: number }[] = [];
    // layout.forEach((element: any) => {
    //   newItems.push({
    //     name: element.i.substring(0, element.i.indexOf(" ")),
    //     x: element.x,
    //     y: element.y,
    //     w: element.w,
    //     h: element.h,
    //   });
    // });
    // console.log(items);
    // setItems(newItems);
  };

  function onLayoutChange(layout: GridItem[]) {
    setLayout(layout);
    // console.log(layout);
  }

  function addItem(width: number = 1, height: number = 1, itemName: string, isResizable?: boolean) {
    // add to Items
    for (let i = 0; i < items.length; i++) {
      const element = items[i];
      if (element.i === itemName) {
        console.log(element.i, itemName, "this item already exists");
        itemName = "";
        return;
      }
    }
    setItems(
      items.concat({
        i: itemName,
        x: Infinity,
        y: Infinity,
        w: width,
        h: height,
        isResizable: isResizable ? true : false,
      })
    );
    // Add to Form
    const newFormsArray = forms;
    const newFormName = itemName.substring(0, itemName.length - 1); //setting formName. (exmaple, about1 -> about)
    if (newFormsArray.includes(newFormName)) {
      console.log("Form Item already exists", newFormName, forms);
      return;
    }
    newFormsArray.push(newFormName);
    setForms(newFormsArray);
    console.log("pushed", items, itemName, forms);
  }

  function removeItem(toBeRemovedItem: GridItem) {
    console.log("removing", toBeRemovedItem);
    for (let i = 0; i < items.length; i++) {
      if (items[i].i === toBeRemovedItem.i) {
        const newItems = items.filter(function(el) {
          return el != toBeRemovedItem;
        });
        setItems(newItems);
        removeFromFormsArray(newItems, toBeRemovedItem.i);
      }
    }
  }

  /*
   * check if the item name without number still exists in the items array after deletion because ['about1','about2'] -> ['about1'] -> ['about']
   * if exists(there were 2 different instances of same items i.e. ['about1','about2']) then dont remove from forms array
   * else remove from form array
   */
  const removeFromFormsArray = (newItems: GridItem[], toBeRemovedItemName: string) => {
    const newItemsNameArrayWithoutNumber = newItems.map((item) => {
      return item.i.substring(0, item.i.length - 1);
    });
    const toBeRemovedItemWithoutNumber = toBeRemovedItemName.substring(0, toBeRemovedItemName.length - 1);
    if (newItemsNameArrayWithoutNumber.includes(toBeRemovedItemWithoutNumber)) {
      console.log("Another item with same form exists", newItemsNameArrayWithoutNumber);
    } else {
      console.log("Removing Form", toBeRemovedItemWithoutNumber);
      setForms(forms.filter((formItem) => formItem != toBeRemovedItemWithoutNumber)); // remove from form array where matches the `toBeRemovedItemName`
    }
  };

  return (
    <>
      <AppBarHeader />

      <div className="createPageWrapper">
        <aside className="leftMenu">
          <LeftMenu addBlock={addItem} />
        </aside>
        <div className="middleGrid">
          <MiddleGrid
            items={items}
            onLayoutChange={onLayoutChange}
            removeItem={removeItem}
            about={about}
            skills={skills}
            educations={educations}
            works={works}
            others={others}
          />
        </div>
        <div className="rightForm">
          <RightForm
            makeItemsArray={makeItemsArray}
            items={items}
            about={about}
            setAbout={setAbout}
            skills={skills}
            setSkills={setSkills}
            educations={educations}
            setEducations={setEducations}
            works={works}
            setWorks={setWorks}
            forms={forms}
            others={others}
            setOthers={setOthers}
          />
        </div>
      </div>
    </>
  );
};
export default CreatePage;
