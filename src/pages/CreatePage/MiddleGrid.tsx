import * as React from "react";
import { v1 as uuidv1 } from "uuid";
import { WidthProvider, Responsive } from "react-grid-layout";

// Required by react-grid-layout to function properly
import "./MiddleGrid.css";
import { GridItem } from "../../interfaces/GridItem";
import { SkillsBlock1 } from "./blocks/skillsBlocks";
import { makeStyles } from "@mui/styles";
import { EducationsBlock1 } from "./blocks/educationsBlocks";
import { OthersBlock1 } from "./blocks/othersBlocks";
import { AboutWithContactBlock1, AboutWithContactBlock2 } from "./blocks/aboutWithContactBlocks";
import { WorksBlock1 } from "./blocks/worksBlocks";
import { About } from "../../interfaces/About";
import { Course } from "../../interfaces/Course";
import { Work } from "../../interfaces/Work";
import { ProjectsBlock1 } from "./blocks/projectsBlock";
import { Project } from "../../interfaces/Project";
import { Theme } from "@mui/system";
import { Skills } from "../../interfaces/Skills";
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
    paddingLeft: "3%",
    paddingRight: "3%",
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
  about: About;
  skills: Skills;
  educations: Course[];
  others: string[];
  works: Work[];
  projects: Project[];
  accentColor: string;
  headerColor: string;
}

const MiddleGrid: React.FC<MiddleGridProps> = (props) => {
  const classes = useStyles();

  function getItemBlueprint(item: GridItem): React.ReactNode {
    let name = item.i;
    switch (name) {
      case "about1":
        return <AboutWithContactBlock1 removeItem={props.removeItem} item={item} about={props.about} />;
      case "about2":
        return <AboutWithContactBlock2 removeItem={props.removeItem} item={item} about={props.about} />;
      case "educations1":
        return <EducationsBlock1 removeItem={props.removeItem} item={item} educations={props.educations} />;
      case "skills1":
        return (
          <SkillsBlock1
            removeItem={props.removeItem}
            item={item}
            skills={props.skills}
            accentColor={props.accentColor}
            headerColor={props.headerColor}
          />
        );
      case "works1":
        return <WorksBlock1 removeItem={props.removeItem} item={item} works={props.works} />;
      case "projects1":
        return <ProjectsBlock1 removeItem={props.removeItem} item={item} projects={props.projects} />;
      case "others1":
        return <OthersBlock1 removeItem={props.removeItem} item={item} others={props.others} />;
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
          rowHeight={20}
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
