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
import { Project } from "../interfaces/Project";
import { Skills } from "../interfaces/Skills";
import { FormStyles } from "../interfaces/FormStyles";
// import "/node_modules/react-grid-layout/css/styles.css";
// import "/node_modules/react-resizable/css/styles.css";

const CreatePage: React.FC = (props) => {
  const [about, setAbout] = useState<About>({
    name: "",
    profession: "",
    address: [""],
    cityZip: "",
    phno: "",
    emails: [""],
    about: "",
  });
  const [skills, setSkills] = useState<Skills>({ color: "#123456", title: "", chipRadius: 10, data: [] });
  const [educations, setEducations] = useState<Course[]>([
    { id: `education${Date.now()}`, courseName: "", courseResults: "", organizationName: "", courseDuration: "" },
  ]);
  const [works, setWorks] = useState<Work[]>([
    { id: `work${Date.now()}`, workOrganizationName: "", workDetails: [""], workDuration: "" },
  ]);
  const [projects, setProjects] = useState<Project[]>([
    { id: `project${Date.now()}`, projectName: "", projectDetails: [""] },
  ]);
  const [others, setOthers] = useState<string[]>([]);
  const [formStyles, setFormStyles] = useState<FormStyles>({
    titleFilled: false,
    titleFullWidth: false,
    titleUnderline: false,
    accentColor: "",
    titleColor: "",
    titleFillColor: "",
  });

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
    setEducations([
      {
        id: "education001",
        courseName: "Bachelor of Science in Computer Science",
        courseDuration: "2019 - 2022",
        organizationName: "Dinabandhu Mahabidyalaya",
        courseResults: "Cumulative CGPA 9.00",
      },
      {
        id: "education002",
        courseName: "Higher Secondary Science Stream",
        courseDuration: "2017 - 2019",
        organizationName: "Bangaon Higher Secondary School",
        courseResults: "Result Percentage 72%",
      },
    ]);
    setSkills({
      color: "#123456",
      title: "Skills Title 123",
      chipRadius: 10,
      data: [
        "Lorem ipsum",
        "dolor sit amet",
        "consectetur.",
        "Adipisicing",
        "Nulla",
        "accusantium",
        "officiis",
        "distinctio",
        "ipsa",
        "officia",
        "soluta",
      ],
    });
    setWorks([
      {
        id: "work1",
        workOrganizationName: "Company 1",
        workDetails: [
          "Lorem ipsum dolor sit amet consectetur adipisicing elit adipisci labore minima doloribus animi.",
          "Excepturi, beatae reprehenderit at doloremque sunt eaque cum aperiam quod exercitationem ipsam quam minus inventore non qui.",
        ],
        workDuration: "2022 - 2023",
      },
    ]);
    setProjects([
      {
        id: "projectWed Jan 12 2022 13:38:12 GMT+0530 (India Standard Time)",
        projectName: "Resume Builder",
        projectDetails: [
          "Built a Full-Stack Application to generate pdf files according to Dynamic User Input. Github: FrontEnd(https://github.com/GourabPaul007/ResumeBuilder-Frontend), Backend(https://github.com/GourabPaul007/ResumeBuilder-Backend).",
          "Used Technologies: ReactJS, TS, Material UI, React-Redux, NodeJS, ExpressJS, EJS, TypeScript.",
        ],
      },
      {
        id: "projectWed Jan 12 2022 13:36:24 GMT+0530 (India Standard Time)",
        projectName: "WhatsNote",
        projectDetails: [
          "A WhatsApp like look and feel note taking app built with clean architechture which helps people take detailed notes. Github: Codebase(https://github.com/GourabPaul007/Notebook).",
          "Used Technologies: Flutter, Riverpod.",
        ],
      },
    ]);
    setOthers([
      "Lorem ipsum dolor sit amet consectetur.",
      "Adipisicing Nulla repellat dolorum earum, accusantium exercit ationem.",
      "officiis distinctio ipsa officia soluta.",
    ]);
    addItem(12, 7, "about1", true);
  }, []);

  const [layout, setLayout] = useState<GridItem[]>([]);
  // The actual Items
  const [items, setItems] = useState<GridItem[]>([]);
  // The Forms corresponding to items in grid
  const [forms, setForms] = useState<string[]>([]);

  // MAKE A COPY OF LAYOUT FOR STUFFS
  const makeItemsArray = () => {
    const finalItems: { name: string; x: number; y: number; w: number; h: number; data: any }[] = [];
    layout.forEach((element: any) => {
      const elementName = element.i.substring(0, element.i.indexOf("function ") - 1);
      finalItems.push({
        name: elementName,
        x: element.x,
        y: element.y,
        w: element.w,
        h: element.h,
        data: ((elementName: string) => {
          console.log(elementName);
          switch (elementName) {
            case "about":
              return about;
            case "educations":
              return educations;
            case "skills":
              return skills;
            case "works":
              return works;
            case "projects":
              return projects;
            case "others":
              return others;
            default:
              return "bruh";
          }
        })(elementName),
      });
    });
    console.log(finalItems);
    return finalItems;
  };

  // const setItemsData = (elementName: string) => {

  // };

  function onLayoutChange(layout: GridItem[]) {
    setLayout(layout);
    // console.log(layout);
  }

  function addItem(width: number = 1, height: number = 1, itemName: string, isResizable?: boolean) {
    // add to Items
    for (let i = 0; i < items.length; i++) {
      const element = items[i];
      if (element.i === itemName) {
        // console.log(element.i, itemName, "this item already exists");
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
      // console.log("Form Item already exists", newFormName, forms);
      return;
    }
    newFormsArray.push(newFormName);
    setForms(newFormsArray);
    // console.log("pushed", items, itemName, forms);
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

  /**
   * check if the `itemName w/o number` still exists in the `items` after deletion, because ['about1','about2'] -> ['about1'] -> ['about']
   *
   * if exists (there were 2 different instances of same items i.e. ['about1' , 'about2']) then dont remove from forms array, else remove from form array
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
            projects={projects}
            others={others}
            formStyles={formStyles}
          />
        </div>
        <div className="divider"></div>
        <div className="rightForm">
          <RightForm
            makeItemsArray={makeItemsArray}
            items={items}
            forms={forms}
            about={about}
            setAbout={setAbout}
            skills={skills}
            setSkills={setSkills}
            educations={educations}
            setEducations={setEducations}
            works={works}
            setWorks={setWorks}
            projects={projects}
            setProjects={setProjects}
            others={others}
            setOthers={setOthers}
            formStyles={formStyles}
            setFormStyles={setFormStyles}
          />
        </div>
      </div>
    </>
  );
};
export default CreatePage;
