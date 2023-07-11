import * as React from "react";
import { v1 as uuidv1 } from "uuid";
import RGL, { WidthProvider, Responsive } from "react-grid-layout";

// Required by react-grid-layout to function properly
import "./MiddleGrid.css";
import { GridItem } from "../../../interfaces/GridItem";
import { makeStyles } from "@mui/styles";
import { AboutWithContact } from "../../../interfaces/AboutWithContact";
import { Educations } from "../../../interfaces/Educations";
import { Works } from "../../../interfaces/Works";
import { ProjectsBlock1, ProjectsBlock2 } from "./GridItems/ProjectsBlocks";
import { Projects } from "../../../interfaces/Projects";
import { Skills } from "../../../interfaces/Skills";
import { FormStyles } from "../../../interfaces/FormStyles";
import { Others } from "../../../interfaces/Others";
import { About } from "../../../interfaces/About";
import { AboutBlock1 } from "./GridItems/AboutBlocks";
import { ContactBlock1, ContactBlock2, ContactBlock3 } from "./GridItems/ContactBlocks";
import { Contact, ContactBlock } from "../../../interfaces/Contact";
import { Ratings } from "../../../interfaces/Ratings";
import { RatingsBlock1, RatingsBlock2 } from "./GridItems/RatingsBlocks";
import { Theme } from "@mui/material/styles";
import { SkillsBlock1, SkillsBlock2 } from "./GridItems/SkillsBlocks";
import { EducationsBlock1, EducationsBlock2 } from "./GridItems/EducationsBlocks";
import { AboutWithContactBlock1, AboutWithContactBlock2 } from "./GridItems/AboutWithContactBlocks";
import { WorksBlock1, WorksBlock2 } from "./GridItems/WorksBlocks";
import { OthersBlock1 } from "./GridItems/OthersBlocks";
import { SpacerBlock1, SpacerBlock2, SpacerBlock3 } from "./GridItems/SpacerBlocks";
import { Name } from "../../../interfaces/Name";
import { NameBlock1 } from "./GridItems/NameBlocks";
import { Certifications } from "../../../interfaces/Certification";
import { CertificationsBlock1 } from "./GridItems/CertificationBlocks";
import { PhotoBlock1Memo } from "./GridItems/PhotoBlocks";
import { Photo } from "../../../interfaces/Photo";
// import ResponsiveReactGridLayout from "react-grid-layout";

// const ResponsiveReactGridLayout = WidthProvider(Responsive);
const ReactGridLayout = WidthProvider(RGL);

const useStyles = makeStyles((theme: Theme) => ({
  blocks: {
    cursor: "grab",
    boxShadow: "3px 3px 4px #d5d5d7, -3px -3px 8px #f9f9fb",
    borderRadius: 8,
    backgroundColor: "white",
    overflow: "hidden",
  },
  gridLayoutWidth: {
    margin: "0px 0px 20px 0px",
    width: "226mm",
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
  items: GridItem[];
  onLayoutChange: any;
  removeItem: (item: GridItem) => void;
  aboutWithContact1: AboutWithContact;
  aboutWithContact2: AboutWithContact;
  about1: About;
  name1: Name;
  contact1: ContactBlock;
  contact2: ContactBlock;
  contact3: ContactBlock;
  skills1: Skills;
  skills2: Skills;
  educations1: Educations;
  educations2: Educations;
  works1: Works;
  works2: Works;
  projects1: Projects;
  projects2: Projects;
  ratings1: Ratings;
  ratings2: Ratings;
  others1: Others;
  photo1: Photo;
  certifications1: Certifications;
  formStyles: FormStyles;
}

const MiddleGrid: React.FC<MiddleGridProps> = (props) => {
  const classes = useStyles();

  // GO TO THE RELATED FORM IN RIGHT-FORM ON CLICKING IN THE MIDDLE-GIRD BLOCKS
  const handleNavigateToBlock = (itemBlock: GridItem) => {
    try {
      document.getElementById(itemBlock.name)!.scrollIntoView({ behavior: "smooth" });
    } catch (error) {
      console.error(error);
    }
  };

  function getItemBlock(item: GridItem): React.ReactNode {
    switch (item.name) {
      case "aboutwithcontact1":
        return (
          <AboutWithContactBlock1
            blockTitle={"About & Contact #1"}
            removeItem={props.removeItem}
            item={item}
            aboutWithContact={props.aboutWithContact1}
            formStyles={props.formStyles}
          />
        );
      case "aboutwithcontact2":
        return (
          <AboutWithContactBlock2
            blockTitle={"About & Contact #2"}
            removeItem={props.removeItem}
            item={item}
            aboutWithContact={props.aboutWithContact2}
            formStyles={props.formStyles}
          />
        );
      case "photo1":
        return (
          <PhotoBlock1Memo
            blockTitle={"Photo #1"}
            removeItem={props.removeItem}
            item={item}
            photo={props.photo1}
            // image={{ imageString: "", hasImage: false, style: { bgColor: "#ffffff", textColor: "#000000" } }}
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
      case "name1":
        return (
          <NameBlock1
            blockTitle={"Name #1"}
            removeItem={props.removeItem}
            item={item}
            name={props.name1}
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
      case "contact3":
        return (
          <ContactBlock3
            blockTitle={"Contact #3"}
            removeItem={props.removeItem}
            item={item}
            contact={props.contact3}
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
      case "works2":
        return (
          <WorksBlock2
            blockTitle={"Work #2"}
            removeItem={props.removeItem}
            item={item}
            works={props.works2}
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
      case "projects2":
        return (
          <ProjectsBlock2
            blockTitle={"Projects #2"}
            removeItem={props.removeItem}
            item={item}
            projects={props.projects2}
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
      case "ratings2":
        return (
          <RatingsBlock2
            blockTitle={"Ratings #2"}
            removeItem={props.removeItem}
            item={item}
            ratings={props.ratings2}
            formStyles={props.formStyles}
          />
        );
      case "certifications1":
        return (
          <CertificationsBlock1
            blockTitle={"Certification #1"}
            removeItem={props.removeItem}
            item={item}
            certifications={props.certifications1}
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

      case "spacer1":
        return <SpacerBlock1 blockTitle={"Spacer #1"} removeItem={props.removeItem} item={item} />;
      case "spacer2":
        return <SpacerBlock2 blockTitle={"Spacer #2"} removeItem={props.removeItem} item={item} />;
      case "spacer3":
        return <SpacerBlock3 blockTitle={"Spacer #3"} removeItem={props.removeItem} item={item} />;
      default:
        return <>elementName does not exist in getItemBlock() in MiddleGrid.tsx`</>;
    }
  }

  return (
    <>
      <div className={classes.gridLayoutWidth}>
        <ReactGridLayout
          className="layout"
          onLayoutChange={props.onLayoutChange}
          autoSize={false}
          rowHeight={10}
          cols={12}
          // breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
          // cols={{ lg: 12, md: 12, sm: 12, xs: 12, xxs: 12 }}
        >
          {props.items.map((item: GridItem, index: number) => {
            return (
              <div
                key={item.name + index + uuidv1}
                className={classes.blocks}
                data-grid={{ x: item.x, y: item.y, w: item.w, h: item.h }}
                onClick={() => {
                  handleNavigateToBlock(item);
                }}
              >
                {getItemBlock(item)}
              </div>
            );
          })}
        </ReactGridLayout>
      </div>
      {/* <div style={{ paddingTop: "4rem" }}>&nbsp;</div> */}
    </>
  );
};

export default MiddleGrid;
