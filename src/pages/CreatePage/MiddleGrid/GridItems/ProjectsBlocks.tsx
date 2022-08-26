import React from "react";
import { v1 as uuidv1 } from "uuid";

import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import PhoneIcon from "@mui/icons-material/Phone";
import { checkHyperlink } from "../../../../helpers/checkHyperlink";
import { RemoveBlockButton } from "../../../../Components/CustomPageComponents";
import { GridItem } from "../../../../interfaces/GridItem";
import { Project, Projects } from "../../../../interfaces/Projects";
import { FormStyles } from "../../../../interfaces/FormStyles";
import { useBlockStyles } from "./_BlockStyles";
import { BlockTitle } from "./_BlockTitle";

const exampleProjects: Projects = {
  title: "ProjectsEx",
  data: [
    {
      id: "projectWed Jan 12 2022 13:38:12 GMT+0530 (India Standard Time)",
      projectName: "Resume Builder",
      projectDetails: [
        "Built a Full-Stack Application to generate pdf files according to Dynamic User Input. Github: FrontEnd(https://github.com/GourabPaul007/ResumeBuilder-Frontend), Backend(https://github.com/GourabPaul007/ResumeBuilder-Backend).",
        "Used Technologies: ReactJS, TS, Material UI, React-Redux, NodeJS, ExpressJS, EJS, TypeScript.",
      ],
    },
    {
      id: "projectWed Jan 12 2022 13:36:24 GMT+0530 (India Standard Time)",
      projectName: "WhatsNote",
      projectDetails: [
        "A WhatsApp like look and feel note taking app built with clean architechture which helps people take detailed notes. Github: Codebase(https://github.com/GourabPaul007/Notebook).",
        "Used Technologies: Flutter, Riverpod.",
      ],
    },
    {
      id: "projectWed Jan 12 2022 13:37:24 GMT+0530 (India Standard Time)",
      projectName: "Waqalat",
      projectDetails: [
        "A free legal document serving web application.",
        "Website: Waqalat.in(https://www.waqalat.in).",
        "Used Technologies: ReactJS, Firebase.",
      ],
    },
    {
      id: "projectWed Jan 12 2022 13:38:24 GMT+0530 (India Standard Time)",
      projectName: "Chill Winds Weather",
      projectDetails: [
        "A React Weather Application that looks up your ip address & uses openweather api to find weather. Github: Codebase(https://github.com/GourabPaul007/weather-search), Website: ChillWindsWeather(https://gourabpaul007.github.io/weather-search/).",
        "Used Technologies: ReactJS, Material UI.",
      ],
    },
  ],
  style: {
    bgColor: "#fff",
    textColor: "#000",
  },
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

  const isProjectsEmpty = (projects: Projects) => {
    return projects.data.every((value) => {
      // 1st -> checks if name is empty string, 2nd -> checks if all array members are empty strings
      if (value.projectName === "" && value.projectDetails.join("").length === 0) {
        return true;
      }
      return false;
    });
  };

  const toBeShownProjects = isProjectsEmpty(props.projects) ? exampleProjects : props.projects;

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
        <BlockTitle formStyles={props.formStyles} title={toBeShownProjects.title} />
        <RemoveBlockButton item={props.item} removeItem={props.removeItem} blockTitle={props.blockTitle} />
        {toBeShownProjects.data.map((eachProject: Project) => {
          return (
            <div key={eachProject.id} style={{ marginLeft: 12, marginTop: 4, fontSize: 14 }}>
              {/* Project Name */}
              <h4 style={{ fontSize: 20, fontWeight: 600, marginLeft: 8, marginBottom: 8, marginTop: 12 }}>
                {eachProject.projectName}
              </h4>
              {/* Project Details */}
              <div style={{ margin: "4px 0px 4px 16px", fontWeight: 500 }}>
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
  );
};
