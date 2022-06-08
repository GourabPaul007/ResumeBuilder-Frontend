import * as React from "react";
import { v1 as uuidv1 } from "uuid";
import ReactGridLayout, { WidthProvider, Responsive, Layout, Layouts } from "react-grid-layout";

// Required by react-grid-layout to function properly
import "./MiddleGrid.css";
import { AboutBlueprint1 } from "./blueprints/aboutBlueprints";
import { GridItem } from "../../interfaces/GridItem";
import { SkillsBlueprint1 } from "./blueprints/skillsBlueprints";
import { SkillsBlock1 } from "./blocks/skillsBlocks";
import { makeStyles } from "@mui/styles";
import { EducationBlock1 } from "./blocks/educationBlocks";
import { OthersBlock1 } from "./blocks/othersBlocks";
import { AboutWithContactBlock1, AboutWithContactBlock2 } from "./blocks/aboutBlocks";
// import ResponsiveReactGridLayout from "react-grid-layout";
const ResponsiveReactGridLayout = WidthProvider(Responsive);

const useStyles = makeStyles((theme) => ({
  blocks: {
    cursor: "grab",
    border: "1px solid #6b5be6",
    borderRadius: 8,
    backgroundColor: "white",
    overflow: "hidden",
  },
}));

interface MiddleGridProps {
  layout: any;
  onLayoutChange: any;
}

const MiddleGrid: React.FC<MiddleGridProps> = (props) => {
  const classes = useStyles();

  return (
    <>
      {/* <ReactGridLayout
        className="layout"
        // onLayoutChange={props.onLayoutChange}
        // onResizeStop={props.onLayoutChange}
        onDragStop={props.onLayoutChange}
        layout={props.layout}
        cols={10}
        rowHeight={60}
        width={900}
      >
        {props.layout.map((item: any) => {
          return (
            <div
              className="blocks"
              data-grid={item}
              key={item.i + uuidv1}
              style={{ cursor: "grab", border: "1px solid #6b5be6", borderRadius: 8, backgroundColor: "white" }}
            >
              {item.i.split(" ")[0] + " " + item.x + " " + item.y}
            </div>
          );
        })}
      </ReactGridLayout> */}
      <ResponsiveReactGridLayout
        className="layout"
        onLayoutChange={props.onLayoutChange}
        // onResizeStop={props.onLayoutChange}
        // onDragStop={props.onLayoutChange}
        // onDrop={props.onLayoutChange}
        autoSize={false}
        rowHeight={0.1}
        breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
        cols={{ lg: 10, md: 10, sm: 10, xs: 10, xxs: 10 }}
      >
        {props.layout.map((item: GridItem) => {
          return (
            <div className={classes.blocks} data-grid={item} key={item.i + uuidv1}>
              {getItemBlueprint(item.i)}
            </div>
          );
        })}
      </ResponsiveReactGridLayout>
    </>
  );
};

export default MiddleGrid;
function getItemBlueprint(name: string): React.ReactNode {
  // Because react-grid-layout will put function in item.i for some reason, so ill have to check the real identifier + need to remove uuid

  name = name.substring(0, name.indexOf("()uuid()"));

  switch (name) {
    case "about1":
      return <AboutWithContactBlock1 />;

    case "about2":
      return <AboutWithContactBlock2 />;

    case "skills1":
      return <SkillsBlock1 />;

    case "educations1":
      return <EducationBlock1 />;

    case "others1":
      return <OthersBlock1 />;

    default:
      break;
  }
}
