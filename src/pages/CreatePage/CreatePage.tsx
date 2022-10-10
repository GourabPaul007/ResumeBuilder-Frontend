import * as React from "react";
import { useEffect, useState } from "react";
import AppBarHeader from "../../Components/AppBarHeader";
import { GridItem } from "../../interfaces/GridItem";
import "./CreatePage.css";
import { v1 as uuidv1 } from "uuid";
import LeftMenu from "./LeftMenu/LeftMenu";
import MiddleGrid from "./MiddleGrid/MiddleGrid";
import { AboutWithContact } from "../../interfaces/AboutWithContact";
import { RightForm } from "./RightForm/RightForm";
import { Educations } from "../../interfaces/Educations";
import { Works } from "../../interfaces/Works";
import { Projects } from "../../interfaces/Projects";
import { Skills } from "../../interfaces/Skills";
import { FormStyles } from "../../interfaces/FormStyles";
import { Others } from "../../interfaces/Others";
import { About } from "../../interfaces/About";
import { Contact, ContactBlock } from "../../interfaces/Contact";
import { Ratings } from "../../interfaces/Ratings";
import { LocalStorageItem } from "../../interfaces/LocalStorageItem";
import { log } from "../../helpers/logger";
// import "/node_modules/react-grid-layout/css/styles.css";
// import "/node_modules/react-resizable/css/styles.css";

const CreatePage: React.FC = (props) => {
  const [layout, setLayout] = useState<GridItem[]>(getFromLS() || []);
  // The actual Items
  const [items, setItems] = useState<GridItem[]>([]);
  // The Forms corresponding to items in grid
  const [forms, setForms] = useState<string[]>([]);

  const [aboutWithContact1, setAboutWithContact1] = useState<AboutWithContact>({
    name: "",
    profession: "",
    address: [""],
    cityZip: "",
    phno: "",
    emails: [""],
    about: "",
    style: {
      bgColor: "#ffffff",
      textColor: "#000000",
    },
  });
  const [aboutWithContact2, setAboutWithContact2] = useState<AboutWithContact>({
    name: "",
    profession: "",
    address: [""],
    cityZip: "",
    phno: "",
    emails: [""],
    about: "",
    style: {
      bgColor: "#ffffff",
      textColor: "#000000",
    },
  });
  const [about1, setAbout1] = useState<About>({
    name: "",
    profession: "",
    about: "",
    style: {
      bgColor: "#ffffff",
      textColor: "#000000",
    },
  });
  const [contact1, setContact1] = useState<ContactBlock>({
    title: "",
    flipped: false,
    data: { address: [""], emails: [""], phno: "" },
    style: {
      bgColor: "#ffffff",
      textColor: "#000000",
    },
  });
  const [contact2, setContact2] = useState<ContactBlock>({
    title: "",
    flipped: false,
    data: { address: [""], emails: [""], phno: "" },
    style: {
      bgColor: "#ffffff",
      textColor: "#000000",
    },
  });
  const [contact3, setContact3] = useState<ContactBlock>({
    title: "",
    flipped: false,
    data: { address: [""], emails: [""], phno: "" },
    style: {
      bgColor: "#ffffff",
      textColor: "#000000",
    },
  });
  const [skills1, setSkills1] = useState<Skills>({
    color: "#123456",
    title: "",
    chipRadius: 10,
    chipSize: 4,
    filled: true,
    flipped: false,
    data: [],
    style: {
      bgColor: "#ffffff",
      textColor: "#000000",
    },
  });
  const [skills2, setSkills2] = useState<Skills>({
    color: "#123456",
    title: "",
    chipRadius: 10,
    chipSize: 4,
    filled: false,
    flipped: false,
    data: [],
    style: {
      bgColor: "#ffffff",
      textColor: "#000000",
    },
  });
  const [educations1, setEducations1] = useState<Educations>({
    title: "",
    data: [
      { id: `education${Date.now()}`, courseName: "", courseResults: "", organizationName: "", courseDuration: "" },
    ],
    style: {
      bgColor: "#ffffff",
      textColor: "#000000",
    },
  });
  const [educations2, setEducations2] = useState<Educations>({
    title: "",
    data: [
      { id: `education${Date.now()}`, courseName: "", courseResults: "", organizationName: "", courseDuration: "" },
    ],
    style: {
      bgColor: "#ffffff",
      textColor: "#000000",
    },
  });
  const [works1, setWorks1] = useState<Works>({
    title: "",
    data: [
      {
        id: `work${Date.now()}`,
        workOrganizationName: "",
        workLocation: "",
        jobTitle: "",
        workDetails: [""],
        workDuration: "",
      },
    ],
    style: {
      bgColor: "#ffffff",
      textColor: "#000000",
    },
  });
  const [works2, setWorks2] = useState<Works>({
    title: "",
    data: [
      {
        id: `work${Date.now()}`,
        workOrganizationName: "",
        workLocation: "",
        jobTitle: "",
        workDetails: [""],
        workDuration: "",
      },
    ],
    style: {
      bgColor: "#ffffff",
      textColor: "#000000",
    },
  });
  const [projects1, setProjects1] = useState<Projects>({
    title: "",
    data: [{ id: `project${Date.now()}`, projectName: "", projectDetails: [""] }],
    style: {
      bgColor: "#ffffff",
      textColor: "#000000",
    },
  });
  const [projects2, setProjects2] = useState<Projects>({
    title: "",
    data: [{ id: `project${Date.now()}`, projectName: "", projectDetails: [""] }],
    style: {
      bgColor: "#ffffff",
      textColor: "#000000",
    },
  });
  const [others1, setOthers1] = useState<Others>({
    title: "",
    bullet: -1,
    data: [""],
    style: {
      bgColor: "#ffffff",
      textColor: "#000000",
    },
  });
  const [ratings1, setRatings1] = useState<Ratings>({
    title: "",
    ratingType: "star",
    icon: "star",
    flipped: false,
    data: [],
    style: {
      bgColor: "#ffffff",
      textColor: "#000000",
    },
  });
  const [ratings2, setRatings2] = useState<Ratings>({
    title: "",
    ratingType: "star",
    icon: "circle",
    flipped: false,
    data: [],
    style: {
      bgColor: "#ffffff",
      textColor: "#000000",
    },
  });
  const [formStyles, setFormStyles] = useState<FormStyles>(
    JSON.parse(localStorage.getItem("FormStyles") as string) || {
      titleFilled: false,
      titleFullWidth: false,
      titleUnderline: false,
      titleColor: "#000000",
      titleFillColor: "#ccffcc",
      accentColor: "#0000ff",
      fontFamily: "sans-serif",
    }
  );

  useEffect(() => {
    // const oldFormStyles: FormStyles = JSON.parse(localStorage.getItem("FormStyles") as string) || {
    //   titleFilled: false,
    //   titleFullWidth: false,
    //   titleUnderline: false,
    //   titleColor: "#000000",
    //   titleFillColor: "#ccffcc",
    //   accentColor: "#0000ff",
    // };
    // setFormStyles(oldFormStyles);

    const oldLayout = JSON.parse(localStorage.getItem("ItemsArray") as string);
    setLayout(oldLayout);
    // SET LAYOUT AND ITS DATA
    if (oldLayout && oldLayout.length != 0) {
      layout.forEach((item: GridItem) => {
        // Add Item to itemsArray
        addItem(item.name, item.x, item.y, item.w, item.h, item.data, true);
        // Set The Data
        switch (item.name) {
          case "aboutwithcontact1":
            setAboutWithContact1(item.data);
            break;
          case "aboutwithcontact2":
            setAboutWithContact2(item.data);
            break;
          case "about1":
            setAbout1(item.data);
            break;
          case "contact1":
            setContact1(item.data);
            break;
          case "contact2":
            setContact2(item.data);
            break;
          case "contact3":
            setContact3(item.data);
            break;
          case "educations1":
            setEducations1(item.data);
            break;
          case "educations2":
            setEducations2(item.data);
            break;
          case "skills1":
            setSkills1(item.data);
            break;
          case "skills2":
            setSkills2(item.data);
            break;
          case "works1":
            setWorks1(item.data);
            break;
          case "works2":
            setWorks2(item.data);
            break;
          case "projects1":
            setProjects1(item.data);
            break;
          case "projects2":
            setProjects2(item.data);
            break;
          case "ratings1":
            setRatings1(item.data);
            break;
          case "ratings2":
            setRatings2(item.data);
            break;
          case "others1":
            setOthers1(item.data);
            break;

          default:
            break;
        }
      });
    }
  }, []);

  function onLayoutChange(layout: GridItem[]) {
    saveToLS(layout);
    setLayout(layout);
  }

  function addItem(
    name: string,
    x: number = Infinity,
    y: number = Infinity,
    width: number = 1,
    height: number = 1,
    data: any,
    isResizable: boolean
  ) {
    // add to Items
    for (let i = 0; i < items.length; i++) {
      const element = items[i];
      if (element.i === name) {
        log(element.i, name, "this item already exists");
        name = "";
        return;
      }
    }
    // FINALLY AAAAAAAAAAAAAAAAAAAAAAAAAAA
    setItems((oldItems) =>
      oldItems.concat({
        name: name,
        i: name,
        x: x,
        y: y,
        w: width,
        h: height,
        isResizable: isResizable ? true : false,
        data: data ? data : {},
      })
    );

    // Add to Form
    const newFormsArray = forms;
    const newFormName = name;
    if (newFormsArray.includes(newFormName)) {
      log("Form Item already exists", newFormName, forms);
      return;
    }
    newFormsArray.push(newFormName);
    setForms(newFormsArray);
  }

  function removeItem(toBeRemovedItem: GridItem) {
    log("removing", toBeRemovedItem);
    for (let i = 0; i < items.length; i++) {
      if (items[i].i === toBeRemovedItem.i) {
        const newItems = items.filter(function (el) {
          return el != toBeRemovedItem;
        });
        setItems(newItems);

        // remove From Forms Array
        const newItemsNameArray = newItems.map((item) => item.i);
        if (newItemsNameArray.includes(toBeRemovedItem.i)) {
          log("Another item with same form exists", newItemsNameArray);
        } else {
          log("Removing Form", toBeRemovedItem.i);
          setForms(forms.filter((formItem) => formItem != toBeRemovedItem.i)); // remove from form array where matches the `toBeRemovedItemName`
        }
      }
    }
  }

  function getFromLS() {
    let ls = [];
    if (global.localStorage) {
      try {
        ls = JSON.parse(localStorage.getItem("ItemsArray") as string) || [];
      } catch (e) {
        /*Ignore*/
      }
    }
    return ls;
  }

  // MAKE A COPY OF LAYOUT FOR DOWNLOAD PAGE
  const saveToLS = (layout: GridItem[]) => {
    const finalItems: LocalStorageItem[] = [];
    log("layout", layout);

    for (let i = 0; i < layout.length; i++) {
      const element = layout[i];
      const elementName = element.i.substring(0, element.i.indexOf("function") - 1);

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
            case "contact2":
              return contact2;
            case "contact3":
              return contact3;
            case "educations1":
              return educations1;
            case "educations2":
              return educations2;
            case "skills1":
              return skills1;
            case "skills2":
              return skills2;
            case "works1":
              return works1;
            case "works2":
              return works2;
            case "projects1":
              return projects1;
            case "projects2":
              return projects2;
            case "ratings1":
              return ratings1;
            case "ratings2":
              return ratings2;
            case "others1":
              return others1;
            default:
              return "bruh";
          }
        })(elementName),
      });
    }
    log("finalItems", finalItems);
    localStorage.setItem("ItemsArray", JSON.stringify(finalItems));
    localStorage.setItem("FormStyles", JSON.stringify(formStyles));
  };

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
            contact2={contact2}
            contact3={contact3}
            skills1={skills1}
            skills2={skills2}
            educations1={educations1}
            educations2={educations2}
            works1={works1}
            works2={works2}
            projects1={projects1}
            projects2={projects2}
            ratings1={ratings1}
            ratings2={ratings2}
            others1={others1}
            formStyles={formStyles}
          />
        </div>
        <div className="divider"></div>
        <div className="rightForm">
          <RightForm
            makeItemsArray={saveToLS}
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
            contact2={contact2}
            setContact2={setContact2}
            contact3={contact3}
            setContact3={setContact3}
            skills1={skills1}
            setSkills1={setSkills1}
            skills2={skills2}
            setSkills2={setSkills2}
            educations1={educations1}
            setEducations1={setEducations1}
            educations2={educations2}
            setEducations2={setEducations2}
            works1={works1}
            setWorks1={setWorks1}
            works2={works2}
            setWorks2={setWorks2}
            projects1={projects1}
            setProjects1={setProjects1}
            projects2={projects2}
            setProjects2={setProjects2}
            others1={others1}
            setOthers1={setOthers1}
            ratings1={ratings1}
            setRatings1={setRatings1}
            ratings2={ratings2}
            setRatings2={setRatings2}
            formStyles={formStyles}
            setFormStyles={setFormStyles}
            layout={layout}
          />
        </div>
      </div>
    </>
  );
};
export default CreatePage;
