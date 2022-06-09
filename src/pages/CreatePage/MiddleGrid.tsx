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
  items: any;
  onLayoutChange: any;
  removeItem: (item: GridItem) => void;
}

const MiddleGrid: React.FC<MiddleGridProps> = (props) => {
  const classes = useStyles();

  return (
    <>
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
              {getItemBlueprint(item, props.removeItem)}
            </div>
          );
        })}
      </ResponsiveReactGridLayout>
    </>
  );
};

export default MiddleGrid;
function getItemBlueprint(item: GridItem, removeItem: (item: GridItem) => void): React.ReactNode {
  // Because react-grid-layout will put function in item.i for some reason, so ill have to check the real identifier + need to remove uuid

  let name = item.i;

  switch (name) {
    case "about1":
      return <AboutWithContactBlock1 removeItem={removeItem} item={item} />;

    case "about2":
      return <AboutWithContactBlock2 />;

    case "works1":
      return <WorksBlock1 />;

    case "skills1":
      return <SkillsBlock1 />;

    case "educations1":
      return <EducationsBlock1 />;

    case "others1":
      return <OthersBlock1 />;

    default:
      break;
  }
}
