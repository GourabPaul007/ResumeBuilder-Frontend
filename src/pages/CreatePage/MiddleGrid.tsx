import * as React from "react";
import { v1 as uuidv1 } from "uuid";
import { WidthProvider, Responsive, Layout, Layouts } from "react-grid-layout";

// Required by react-grid-layout to function properly
import "./MiddleGrid.css";
// import ResponsiveReactGridLayout from "react-grid-layout";
const ResponsiveReactGridLayout = WidthProvider(Responsive);

interface MiddleGridProps {
  layout: any;
  onLayoutChange: any;
}

const MiddleGrid: React.FC<MiddleGridProps> = (props) => {
  return (
    <>
      {/* <ResponsiveReactGridLayout className="layout" layout={layout} cols={5} rowHeight={60} width={900}> */}
      <ResponsiveReactGridLayout
        // onLayoutChange={props.onLayoutChange}
        onResizeStop={props.onLayoutChange}
        onDragStop={props.onLayoutChange}
        onDrop={props.onLayoutChange}
        className="layout"
        rowHeight={60}
        breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
        cols={{ lg: 10, md: 10, sm: 10, xs: 10, xxs: 10 }}
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
        {/* <div className="blocks" key="about">
          about
        </div>
        <div className="blocks" key="education">
          education
        </div>
        <div className="blocks" key="work">
          work
        </div>
        <div className="blocks" key="projects">
          projects
        </div>
        <div className="blocks" key="others">
          others
        </div>
        <div className="blocks" key="skills">
          skills
        </div> */}
      </ResponsiveReactGridLayout>
    </>
  );
};

export default MiddleGrid;
