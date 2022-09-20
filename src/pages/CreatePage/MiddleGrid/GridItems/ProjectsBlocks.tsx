import React, { useEffect, useState } from "react";
import { v1 as uuidv1 } from "uuid";

import { checkHyperlink } from "../../../../helpers/checkHyperlink";
import { RemoveBlockButton } from "../../../../Components/CustomPageComponents";
import { GridItem } from "../../../../interfaces/GridItem";
import { Project, Projects } from "../../../../interfaces/Projects";
import { FormStyles } from "../../../../interfaces/FormStyles";
import { useBlockStyles } from "./_BlockStyles";
import { BlockTitle } from "./_BlockTitle";

const exampleProjects: Projects = {
  title: "Projects",
  data: [
    {
      id: "projectWed Jan 12 2022 13:38:12 GMT+0530 (India Standard Time)",
      projectName: "Project Name",
      projectDetails: [
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit quidem veniam. Github: FrontEnd(https://github.com/GourabPaul007/ResumeBuilder-Frontend), Backend(https://github.com/GourabPaul007/ResumeBuilder-Backend).",
        "Used Technologies: ReactJS, TS, Material UI, React-Redux, NodeJS, ExpressJS, EJS, TypeScript.",
      ],
    },
    {
      id: "projectWed Jan 12 2022 13:36:24 GMT+0530 (India Standard Time)",
      projectName: "Project Name",
      projectDetails: [
        "A WhatsApp like look and feel note taking app built with clean architechture which helps people take detailed notes. Github: Codebase(https://github.com/GourabPaul007/Notebook).",
        "Used Technologies: Flutter, Riverpod.",
      ],
    },
  ],
  style: {
    bgColor: "#fff",
    textColor: "#000",
  },
};

const isProjectsEmpty = (projects: Projects): boolean => {
  return projects.data.every((value) => {
    // 1st -> checks if name is empty string, 2nd -> checks if all array members are empty strings
    if (value.projectName === "" && value.projectDetails.join("").length === 0 && projects.title === "") {
      console.log("true");

      return true;
    }
    console.log("false");
    return false;
  });
};

interface ProjectsBlockProps {
  blockTitle: string;
  item: GridItem;
  removeItem: (item: GridItem) => void;
  projects: Projects;
  formStyles: FormStyles;
}

export const ProjectsBlock1: React.FC<ProjectsBlockProps> = (props) => {
  const blockClasses = useBlockStyles();

  // Check For Empty Projects
  const [isEmpty, setIsEmpty] = useState(false);
  useEffect(() => {
    setIsEmpty(isProjectsEmpty(props.projects));
  }, [props.projects]);

  const toBeShownProjects = isEmpty ? exampleProjects : props.projects;

  return (
    <div
      style={{
        backgroundColor: toBeShownProjects.style.bgColor,
        color: toBeShownProjects.style.textColor,
        height: "100%",
        width: "100%",
      }}
    >
      <div className={blockClasses.blockWrapper}>
        <BlockTitle formStyles={props.formStyles} title={toBeShownProjects.title} isOpaque={isEmpty} />
        <RemoveBlockButton item={props.item} removeItem={props.removeItem} blockTitle={props.blockTitle} />
        <div style={{ opacity: isEmpty ? 0.5 : 1 }}>
          {toBeShownProjects.data.map((eachProject: Project) => {
            return (
              <div key={eachProject.id} style={{ marginLeft: 12, marginTop: 8, fontSize: 14 }}>
                {/* Project Name */}
                <h4 style={{ fontSize: 18 }}>{eachProject.projectName}</h4>
                {/* Project Details */}
                <div style={{ margin: "4px 0px 8px 16px", fontWeight: 500 }}>
                  {eachProject.projectDetails.map((detail: string) => {
                    return (
                      <div
                        key={detail}
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "start",
                          alignItems: "start",
                          // marginBottom: 4,
                        }}
                      >
                        {checkHyperlink(detail)}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export const ProjectsBlock2: React.FC<ProjectsBlockProps> = (props) => {
  const blockClasses = useBlockStyles();

  // Check For Empty Projects
  const [isEmpty, setIsEmpty] = useState(false);
  useEffect(() => {
    setIsEmpty(isProjectsEmpty(props.projects));
  }, [props.projects]);

  const toBeShownProjects = isEmpty ? exampleProjects : props.projects;

  return (
    <div
      style={{
        backgroundColor: toBeShownProjects.style.bgColor,
        color: toBeShownProjects.style.textColor,
        height: "100%",
        width: "100%",
      }}
    >
      <div className={blockClasses.blockWrapper}>
        <BlockTitle formStyles={props.formStyles} title={toBeShownProjects.title} isOpaque={isEmpty} />
        <RemoveBlockButton item={props.item} removeItem={props.removeItem} blockTitle={props.blockTitle} />
        <div style={{ opacity: isEmpty ? 0.5 : 1 }}>
          {toBeShownProjects.data.map((eachProject: Project) => {
            return (
              <div key={eachProject.id} style={{ margin: "12px 0px 0px 8px", fontSize: 14 }}>
                {/* Project Name */}
                <h4 style={{ fontSize: 18 }}>{eachProject.projectName}</h4>
                {/* Project Details */}
                <div style={{ margin: "4px 0px 8px 0px", fontWeight: 500 }}>
                  {eachProject.projectDetails.map((detail: string) => {
                    return (
                      <div
                        key={detail}
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "start",
                          alignItems: "start",
                          // marginBottom: 4,
                        }}
                      >
                        {checkHyperlink(detail)}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
