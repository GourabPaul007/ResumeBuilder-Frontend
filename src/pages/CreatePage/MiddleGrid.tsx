import * as React from "react";
import { v1 as uuidv1 } from "uuid";
import { WidthProvider, Responsive } from "react-grid-layout";

// Required by react-grid-layout to function properly
import "./MiddleGrid.css";
import { GridItem } from "../../interfaces/GridItem";
import { makeStyles } from "@mui/styles";
import { AboutWithContact } from "../../interfaces/AboutWithContact";
import { Educations } from "../../interfaces/Educations";
import { Works } from "../../interfaces/Works";
import { ProjectsBlock1 } from "./blocks/ProjectsBlocks";
import { Projects } from "../../interfaces/Projects";
import { Skills } from "../../interfaces/Skills";
import { FormStyles } from "../../interfaces/FormStyles";
import { Others } from "../../interfaces/Others";
import { About } from "../../interfaces/About";
import { AboutBlock1 } from "./blocks/AboutBlocks";
import { ContactBlock1, ContactBlock2 } from "./blocks/ContactBlocks";
import { Contact } from "../../interfaces/Contact";
import { Ratings } from "../../interfaces/Ratings";
import { RatingsBlock1 } from "./blocks/RatingsBlocks";
import { Theme } from "@mui/material/styles";
import { SkillsBlock1, SkillsBlock2 } from "./blocks/SkillsBlocks";
import { EducationsBlock1, EducationsBlock2 } from "./blocks/EducationsBlocks";
import { AboutWithContactBlock1, AboutWithContactBlock2 } from "./blocks/AboutWithContactBlocks";
import { WorksBlock1 } from "./blocks/WorksBlocks";
import { OthersBlock1 } from "./blocks/OthersBlocks";
// import ResponsiveReactGridLayout from "react-grid-layout";
const ResponsiveReactGridLayout = WidthProvider(Responsive);

const useStyles = makeStyles((theme: Theme) => ({
  blocks: {
    cursor: "grab",
    boxShadow: "3px 3px 4px #d5d5d7, -3px -3px 8px #f9f9fb",
    borderRadius: 8,
    backgroundColor: "white",
    overflow: "hidden",
  },
  gridLayoutWidth: {
    width: "250mm",
    paddingLeft: "2rem",
    paddingRight: "2rem",
    [theme.breakpoints.down("xl")]: {
      width: "200mm",
    },
    [theme.breakpoints.down("lg")]: {
      width: "150mm",
    },
    [theme.breakpoints.down("md")]: {
      width: "150mm",
    },
  },
}));

interface MiddleGridProps {
  items: any;
  onLayoutChange: any;
  removeItem: (item: GridItem) => void;
  aboutWithContact1: AboutWithContact;
  aboutWithContact2: AboutWithContact;
  about1: About;
  contact1: Contact;
  contact2: Contact;
  skills1: Skills;
  skills2: Skills;
  educations1: Educations;
  educations2: Educations;
  works1: Works;
  projects1: Projects;
  ratings1: Ratings;
  others1: Others;
  formStyles: FormStyles;
}

const MiddleGrid: React.FC<MiddleGridProps> = (props) => {
  const classes = useStyles();

  function getItemBlueprint(item: GridItem): React.ReactNode {
    let name = item.i;
    switch (name) {
      case "aboutwithcontact1":
        return (
          <AboutWithContactBlock1
            blockTitle={"About & Contact #1"}
            removeItem={props.removeItem}
            item={item}
            about={props.aboutWithContact1}
            formStyles={props.formStyles}
          />
        );
      case "aboutwithcontact2":
        return (
          <AboutWithContactBlock2
            blockTitle={"About & Contact #2"}
            removeItem={props.removeItem}
            item={item}
            about={props.aboutWithContact2}
            formStyles={props.formStyles}
          />
        );
      case "about1":
        return (
          <AboutBlock1
            blockTitle={"About #1"}
            removeItem={props.removeItem}
            item={item}
            about={props.about1}
            formStyles={props.formStyles}
          />
        );
      case "contact1":
        return (
          <ContactBlock1
            blockTitle={"Contact #1"}
            removeItem={props.removeItem}
            item={item}
            contact={props.contact1}
            formStyles={props.formStyles}
          />
        );
      case "contact2":
        return (
          <ContactBlock2
            blockTitle={"Contact #2"}
            removeItem={props.removeItem}
            item={item}
            contact={props.contact2}
            formStyles={props.formStyles}
          />
        );
      case "educations1":
        return (
          <EducationsBlock1
            blockTitle={"Education #1"}
            removeItem={props.removeItem}
            item={item}
            educations={props.educations1}
            formStyles={props.formStyles}
          />
        );
      case "educations2":
        return (
          <EducationsBlock2
            blockTitle={"Education #2"}
            removeItem={props.removeItem}
            item={item}
            educations={props.educations2}
            formStyles={props.formStyles}
          />
        );
      case "skills1":
        return (
          <SkillsBlock1
            blockTitle={"Skills #1"}
            removeItem={props.removeItem}
            item={item}
            skills={props.skills1}
            formStyles={props.formStyles}
          />
        );
      case "skills2":
        return (
          <SkillsBlock2
            blockTitle={"Skills #2"}
            removeItem={props.removeItem}
            item={item}
            skills={props.skills2}
            formStyles={props.formStyles}
          />
        );
      case "works1":
        return (
          <WorksBlock1
            blockTitle={"Work #1"}
            removeItem={props.removeItem}
            item={item}
            works={props.works1}
            formStyles={props.formStyles}
          />
        );
      case "projects1":
        return (
          <ProjectsBlock1
            blockTitle={"Projects #1"}
            removeItem={props.removeItem}
            item={item}
            projects={props.projects1}
            formStyles={props.formStyles}
          />
        );
      case "ratings1":
        return (
          <RatingsBlock1
            blockTitle={"Ratings #1"}
            removeItem={props.removeItem}
            item={item}
            ratings={props.ratings1}
            formStyles={props.formStyles}
          />
        );
      case "others1":
        return (
          <OthersBlock1
            blockTitle={"Others #1"}
            removeItem={props.removeItem}
            item={item}
            others={props.others1}
            formStyles={props.formStyles}
          />
        );
      default:
        break;
    }
  }

  return (
    <>
      <div className={classes.gridLayoutWidth}>
        <ResponsiveReactGridLayout
          className="layout"
          onLayoutChange={props.onLayoutChange}
          autoSize={false}
          rowHeight={10}
          breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
          cols={{ lg: 12, md: 12, sm: 12, xs: 12, xxs: 12 }}
        >
          {props.items.map((item: GridItem) => {
            return (
              <div className={classes.blocks} data-grid={item} key={item.i + uuidv1}>
                {getItemBlueprint(item)}
              </div>
            );
          })}
        </ResponsiveReactGridLayout>
      </div>
    </>
  );
};

export default MiddleGrid;
