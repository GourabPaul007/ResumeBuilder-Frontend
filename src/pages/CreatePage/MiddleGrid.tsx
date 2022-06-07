import * as React from "react";
import { v1 as uuidv1 } from "uuid";
import ReactGridLayout, { WidthProvider, Responsive, Layout, Layouts } from "react-grid-layout";

// Required by react-grid-layout to function properly
import "./MiddleGrid.css";
import { AboutBlueprint1 } from "./blueprints/aboutBlueprints";
import { GridItem } from "../../interfaces/GridItem";
import { SkillsBlueprint1 } from "./blueprints/skillsBlueprints";
// import ResponsiveReactGridLayout from "react-grid-layout";
const ResponsiveReactGridLayout = WidthProvider(Responsive);

interface MiddleGridProps {
  layout: any;
  onLayoutChange: any;
}

const MiddleGrid: React.FC<MiddleGridProps> = (props) => {
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
        // onLayoutChange={props.onLayoutChange}
        // onResizeStop={props.onLayoutChange}
        onDragStop={props.onLayoutChange}
        onDrop={props.onLayoutChange}
        autoSize={false}
        rowHeight={0.1}
        breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
        cols={{ lg: 10, md: 10, sm: 10, xs: 10, xxs: 10 }}
      >
        {props.layout.map((item: GridItem) => {
          return (
            <div
              className="blocks"
              data-grid={item}
              key={item.i + uuidv1}
              style={{ cursor: "grab", border: "1px solid #6b5be6", borderRadius: 8, backgroundColor: "white" }}
            >
              {getItemBlueprint(item.i)}
              {/* <div>
                <AboutBlueprint1 />
              </div> */}
              {/* {item.i.split(" ")[0] + " " + item.x + " " + item.y} */}
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
      return <AboutBlueprint1 />;

    case "skills1":
      return <SkillsBlueprint1 />;

    default:
      break;
  }
}
