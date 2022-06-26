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
import { Course, Educations } from "../interfaces/Educations";
import { Work, Works } from "../interfaces/Works";
import { Project, Projects } from "../interfaces/Projects";
import { Skills } from "../interfaces/Skills";
import { FormStyles } from "../interfaces/FormStyles";
import { Others } from "../interfaces/Others";
import { AboutIcon2 } from "./CreatePage/LeftMenuIcons/AboutIcons";
// import "/node_modules/react-grid-layout/css/styles.css";
// import "/node_modules/react-resizable/css/styles.css";

const CreatePage: React.FC = (props) => {
  const [about1, setAbout1] = useState<About>({
    name: "",
    profession: "",
    address: [""],
    cityZip: "",
    phno: "",
    emails: [""],
    about: "",
  });
  const [about2, setAbout2] = useState<About>({
    name: "",
    profession: "",
    address: [""],
    cityZip: "",
    phno: "",
    emails: [""],
    about: "",
  });
  const [skills1, setSkills1] = useState<Skills>({
    color: "#123456",
    title: "",
    chipRadius: 10,
    filled: true,
    data: [],
  });
  const [skills2, setSkills2] = useState<Skills>({
    color: "#123456",
    title: "",
    chipRadius: 10,
    filled: true,
    data: [],
  });
  const [educations, setEducations] = useState<Educations>({
    title: "Education Init",
    data: [
      { id: `education${Date.now()}`, courseName: "", courseResults: "", organizationName: "", courseDuration: "" },
    ],
  });
  const [works, setWorks] = useState<Works>({
    title: "Works Init",
    data: [{ id: `work${Date.now()}`, workOrganizationName: "", workDetails: [""], workDuration: "" }],
  });
  const [projects, setProjects] = useState<Projects>({
    title: "Works Init",
    data: [{ id: `project${Date.now()}`, projectName: "", projectDetails: [""] }],
  });
  const [others, setOthers] = useState<Others>({ title: "", bullet: -1, data: [""] });
  const [formStyles, setFormStyles] = useState<FormStyles>({
    titleFilled: false,
    titleFullWidth: false,
    titleUnderline: false,
    titleColor: "#ff0000",
    titleFillColor: "#00ff00",
    accentColor: "#0000ff",
  });

  useEffect(() => {
    setAbout1({
      name: "Gourab Paul",
      profession: "Software Engineer",
      address: ["Saktigarh, Railgate Rd.", "Bongaon WB 743235"],
      cityZip: "Bangaon WB 743235",
      phno: "+91 9064040525",
      emails: ["gourabpaul900@gmail.com", "Github.com/GourabPaul007(https://github.com/GourabPaul007)"],
      about:
        "Hello There, I'm a Full-Stack Software Engineer. I like to build softwares to solve existing problems & to overcome major or minor inconveniences.",
    });
    setEducations({
      title: "Educations UseEffect",
      data: [
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
      ],
    });
    setSkills1({
      color: "#123456",
      title: "Skills UseEffect",
      chipRadius: 10,
      filled: true,
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
    setWorks({
      title: "Works UseEffect",
      data: [
        {
          id: "work1",
          workOrganizationName: "Company 1",
          workDetails: [
            "Lorem ipsum dolor sit amet consectetur adipisicing elit adipisci labore minima doloribus animi.",
            "Excepturi, beatae reprehenderit at doloremque sunt eaque cum aperiam quod exercitationem ipsam quam minus inventore non qui.",
          ],
          workDuration: "2022 - 2023",
        },
      ],
    });
    setProjects({
      title: "Projects UseEffect",
      data: [
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
      ],
    });
    setOthers({
      title: "Others UseEffect",
      bullet: 9679,
      data: [
        "Lorem ipsum dolor sit amet consectetur.",
        "Adipisicing Nulla repellat dolorum earum.",
        "officiis distinctio ipsa officia soluta.",
        "accusantium exercit ationem.",
      ],
    });
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
            case "about1":
              return about1;
            case "about2":
              return AboutIcon2;
            case "educations":
              return educations;
            case "skills1":
              return skills1;
            case "skills2":
              return skills2;
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
    const newFormName = itemName;
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
    const newItemsNameArray = newItems.map((item) => item.i);
    if (newItemsNameArray.includes(toBeRemovedItemName)) {
      console.log("Another item with same form exists", newItemsNameArray);
    } else {
      console.log("Removing Form", toBeRemovedItemName);
      setForms(forms.filter((formItem) => formItem != toBeRemovedItemName)); // remove from form array where matches the `toBeRemovedItemName`
    }
  };

  // const addItemNew = (width: number = 1, height: number = 1, itemName: string, isResizable?: boolean) => {
  //   // iterate through each member in items, if exists, ++counter & set the forms according to the number
  //   let numberOfSameItemsAlreadyInArray = 0;
  //   for (let i = 0; i < items.length; i++) {
  //     if (items[i].i === itemName) {
  //       numberOfSameItemsAlreadyInArray += 1;
  //     }
  //   }
  //   setItems(
  //     items.concat({
  //       i: `${itemName}#${numberOfSameItemsAlreadyInArray}`,
  //       x: Infinity,
  //       y: Infinity,
  //       w: width,
  //       h: height,
  //       isResizable: isResizable ? true : false,
  //     })
  //   );
  //   // Add to Form
  //   const newFormsArray = forms;
  //   //setting formName. (exmaple, about1 -> about1#1 or about1#2)
  //   const newFormName = `${itemName}#${numberOfSameItemsAlreadyInArray})`;
  //   newFormsArray.push(newFormName);
  //   setForms(newFormsArray);
  //   console.log(items, forms);
  // };

  return (
    <>
      <AppBarHeader />

      <div className="createPageWrapper">
        <aside className="leftMenu">
          <LeftMenu addBlock={addItem} items={items} />
        </aside>
        <div className="middleGrid">
          <MiddleGrid
            items={items}
            onLayoutChange={onLayoutChange}
            removeItem={removeItem}
            about1={about1}
            about2={about2}
            skills1={skills1}
            skills2={skills2}
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
            about1={about1}
            setAbout1={setAbout1}
            about2={about2}
            setAbout2={setAbout2}
            skills1={skills1}
            setSkills1={setSkills1}
            skills2={skills2}
            setSkills2={setSkills2}
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
