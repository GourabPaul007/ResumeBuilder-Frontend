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
// import ResponsiveReactGridLayout from "react-grid-layout";
const ResponsiveReactGridLayout = WidthProvider(Responsive);

const useStyles = makeStyles((theme) => ({
  blocks: {
    cursor: "grab",
    boxShadow: "3px 3px 4px #d5d5d7, -3px -3px 8px #f9f9fb",
    borderRadius: 8,
    backgroundColor: "white",
    overflow: "hidden",
  },
}));

interface MiddleGridProps {
  items: any;
  onLayoutChange: any;
  removeItem: (item: GridItem) => void;
  about: About;
  skills: string[];
  educations: Course[];
}

const MiddleGrid: React.FC<MiddleGridProps> = (props) => {
  const classes = useStyles();

  return (
    <>
      <div style={{ paddingLeft: 60, paddingRight: 50 }}>
        <ResponsiveReactGridLayout
          className="layout"
          onLayoutChange={props.onLayoutChange}
          autoSize={false}
          rowHeight={20}
          breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
          cols={{ lg: 10, md: 10, sm: 10, xs: 10, xxs: 10 }}
        >
          {props.items.map((item: GridItem) => {
            return (
              <div className={classes.blocks} data-grid={item} key={item.i + uuidv1}>
                {getItemBlueprint(item, props.removeItem, props.about, props.skills, props.educations)}
              </div>
            );
          })}
        </ResponsiveReactGridLayout>
      </div>
    </>
  );
};

export default MiddleGrid;
function getItemBlueprint(
  item: GridItem,
  removeItem: (item: GridItem) => void,
  about: About,
  skills: string[],
  educations: Course[]
): React.ReactNode {
  // Because react-grid-layout will put function in item.i for some reason, so ill have to check the real identifier + need to remove uuid

  let name = item.i;

  switch (name) {
    case "about1":
      return <AboutWithContactBlock1 removeItem={removeItem} item={item} about={about} />;

    case "about2":
      return <AboutWithContactBlock2 removeItem={removeItem} item={item} about={about} />;

    case "works1":
      return <WorksBlock1 removeItem={removeItem} item={item} />;

    case "skills1":
      return <SkillsBlock1 removeItem={removeItem} item={item} skills={skills} />;

    case "educations1":
      return <EducationsBlock1 removeItem={removeItem} item={item} educations={educations} />;

    case "others1":
      return <OthersBlock1 removeItem={removeItem} item={item} />;

    default:
      break;
  }
}
