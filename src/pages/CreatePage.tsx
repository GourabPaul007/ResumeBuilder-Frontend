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
import { AboutWithContact } from "../interfaces/AboutWithContact";
import { RightForm } from "./CreatePage/RightForm";
import { Course, Educations } from "../interfaces/Educations";
import { Work, Works } from "../interfaces/Works";
import { Project, Projects } from "../interfaces/Projects";
import { Skills } from "../interfaces/Skills";
import { FormStyles } from "../interfaces/FormStyles";
import { Others } from "../interfaces/Others";
import { AboutAndContactIcon2 } from "./CreatePage/LeftMenuIcons/AboutAndContactIcons";
import { About } from "../interfaces/About";
import { Contact } from "../interfaces/Contact";
import { Ratings } from "../interfaces/Ratings";
// import "/node_modules/react-grid-layout/css/styles.css";
// import "/node_modules/react-resizable/css/styles.css";

const CreatePage: React.FC = (props) => {
  const [aboutWithContact1, setAboutWithContact1] = useState<AboutWithContact>({
    name: "",
    profession: "",
    address: [""],
    cityZip: "",
    phno: "",
    emails: [""],
    about: "",
  });
  const [aboutWithContact2, setAboutWithContact2] = useState<AboutWithContact>({
    name: "",
    profession: "",
    address: [""],
    cityZip: "",
    phno: "",
    emails: [""],
    about: "",
  });
  const [about1, setAbout1] = useState<About>({
    name: "",
    profession: "",
    about: "",
  });
  const [contact1, setContact1] = useState<Contact>({
    address: [""],
    emails: [""],
    phno: "",
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
  const [educations1, setEducations1] = useState<Educations>({
    title: "Education Init",
    data: [
      { id: `education${Date.now()}`, courseName: "", courseResults: "", organizationName: "", courseDuration: "" },
    ],
  });
  const [works1, setWorks1] = useState<Works>({
    title: "Works Init",
    data: [{ id: `work${Date.now()}`, workOrganizationName: "", workDetails: [""], workDuration: "" }],
  });
  const [projects1, setProjects1] = useState<Projects>({
    title: "Works Init",
    data: [{ id: `project${Date.now()}`, projectName: "", projectDetails: [""] }],
  });
  const [others1, setOthers1] = useState<Others>({ title: "", bullet: -1, data: [""] });
  const [ratings1, setRatings1] = useState<Ratings>({
    title: "Language",
    ratingType: "star",
    icon: "star",
    data: [
      { id: `rating${Date.now()}`, ratingSubject: "English", rateInPercentage: 75 },
      { id: `rating${Date.now()}`, ratingSubject: "Hindi", rateInPercentage: 75 },
      { id: `rating${Date.now()}`, ratingSubject: "Bengali", rateInPercentage: 100 },
    ],
  });
  const [formStyles, setFormStyles] = useState<FormStyles>({
    titleFilled: false,
    titleFullWidth: false,
    titleUnderline: false,
    titleColor: "#ff0000",
    titleFillColor: "#00ff00",
    accentColor: "#0000ff",
  });

  useEffect(() => {
    setAboutWithContact1({
      name: "Gourab Paul",
      profession: "Software Engineer",
      address: ["Saktigarh, Railgate Rd.", "Bongaon WB 743235"],
      cityZip: "Bangaon WB 743235",
      phno: "+91 9064040525",
      emails: ["gourabpaul900@gmail.com", "Github.com/GourabPaul007(https://github.com/GourabPaul007)"],
      about: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quae expedita architecto, doloribus recusandae iste harum fugit, maxime ipsa nemo magnam provident amet voluptate eveniet unde illo! Dolores, alias porro.`,
    });
    setAbout1({
      name: "Bruh Doe",
      profession: "Bruhware Engineer",
      about:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam quod dolorem libero reprehenderit maxime maiores officiis? Beatae fuga, quia dolorum sequi accusamus omnis ab corrupti, atque architecto expedita ipsa inventore.",
    });
    setContact1({
      address: ["123 BV Rd, California"],
      emails: ["abc@gmail.com", "Github.com/JohnDoe"],
      phno: "123 456 7890",
    });
    setEducations1({
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
      color: "#ff5656",
      title: "Skills UseEffect",
      chipRadius: 16,
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
    setWorks1({
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
    setProjects1({
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
    setOthers1({
      title: "Others UseEffect",
      bullet: 9679,
      data: [
        "Lorem ipsum dolor sit amet consectetur.",
        "Adipisicing Nulla repellat dolorum earum.",
        "officiis distinctio ipsa officia soluta.",
        "accusantium exercit ationem.",
      ],
    });
    addItem(8, 7, "about1", true);
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
      const elementName = element.i.substring(0, element.i.indexOf("function"));

      finalItems.push({
        name: elementName,
        x: element.x,
        y: element.y,
        w: element.w,
        h: element.h,
        data: ((elementName: string) => {
          switch (elementName) {
            case "aboutwithcontact1":
              return aboutWithContact1;
            case "aboutwithcontact2":
              return aboutWithContact2;
            case "about1":
              return about1;
            case "contact1":
              return contact1;
            case "educations1":
              return educations1;
            case "skills1":
              return skills1;
            case "skills2":
              return skills2;
            case "works1":
              return works1;
            case "projects1":
              return projects1;
            case "ratings1":
              return ratings1;
            case "others1":
              return others1;
            default:
              return "bruh";
          }
        })(elementName),
      });
    });
    console.log(finalItems);
    return finalItems;
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
        const newItems = items.filter(function (el) {
          return el != toBeRemovedItem;
        });
        setItems(newItems);

        // remove From Forms Array
        const newItemsNameArray = newItems.map((item) => item.i);
        if (newItemsNameArray.includes(toBeRemovedItem.i)) {
          console.log("Another item with same form exists", newItemsNameArray);
        } else {
          console.log("Removing Form", toBeRemovedItem.i);
          setForms(forms.filter((formItem) => formItem != toBeRemovedItem.i)); // remove from form array where matches the `toBeRemovedItemName`
        }
      }
    }
  }

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
            aboutWithContact1={aboutWithContact1}
            aboutWithContact2={aboutWithContact2}
            about1={about1}
            contact1={contact1}
            skills1={skills1}
            skills2={skills2}
            educations1={educations1}
            works1={works1}
            projects1={projects1}
            ratings1={ratings1}
            others1={others1}
            formStyles={formStyles}
          />
        </div>
        <div className="divider"></div>
        <div className="rightForm">
          <RightForm
            makeItemsArray={makeItemsArray}
            items={items}
            forms={forms}
            aboutWithContact1={aboutWithContact1}
            setAboutWithContact1={setAboutWithContact1}
            aboutWithContact2={aboutWithContact2}
            setAboutWithContact2={setAboutWithContact2}
            about1={about1}
            setAbout1={setAbout1}
            contact1={contact1}
            setContact1={setContact1}
            skills1={skills1}
            setSkills1={setSkills1}
            skills2={skills2}
            setSkills2={setSkills2}
            educations1={educations1}
            setEducations1={setEducations1}
            works1={works1}
            setWorks1={setWorks1}
            projects1={projects1}
            setProjects1={setProjects1}
            others1={others1}
            setOthers1={setOthers1}
            ratings1={ratings1}
            setRatings1={setRatings1}
            formStyles={formStyles}
            setFormStyles={setFormStyles}
          />
        </div>
      </div>
    </>
  );
};
export default CreatePage;
