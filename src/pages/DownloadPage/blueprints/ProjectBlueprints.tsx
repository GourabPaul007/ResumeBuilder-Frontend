import React from "react";
import { v1 as uuidv1 } from "uuid";

import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import PhoneIcon from "@mui/icons-material/Phone";
import { checkHyperlink } from "../../../helpers/checkHyperlink";
import { GridItem } from "../../../interfaces/GridItem";
import { Project, Projects } from "../../../interfaces/Projects";
import { FormStyles } from "../../../interfaces/FormStyles";
import { useBlueprintStyles } from "./_BlueprintStyles";
import { BlueprintTitle } from "./_BlueprintTitle";

interface ProjectsBlueprintProps {
  projects: {
    name: string;
    x: number;
    y: number;
    w: number;
    h: number;
    data: Projects;
  };
  formStyles: FormStyles;
}

export const ProjectsBlueprint1: React.FC<ProjectsBlueprintProps> = (props) => {
  const blueprintClasses = useBlueprintStyles({
    h: props.projects.h,
    x: props.projects.x,
    y: props.projects.y,
    w: props.projects.w,
    bgColor: props.projects.data.style.bgColor,
    textColor: props.projects.data.style.textColor,
  });

  return (
    <div className={blueprintClasses.blueprintWrapper}>
      <BlueprintTitle formStyles={props.formStyles} title={props.projects.data.title} />
      {props.projects.data.data.map((eachProject: Project) => {
        return (
          <div key={eachProject.id} style={{ marginLeft: 12, marginTop: 8, fontSize: 14 }}>
            {/* Project Name */}
            <h4 style={{ fontSize: 20 }}>{eachProject.projectName}</h4>
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
  );
};

export const ProjectsBlueprint2: React.FC<ProjectsBlueprintProps> = (props) => {
  const blueprintClasses = useBlueprintStyles({
    h: props.projects.h,
    x: props.projects.x,
    y: props.projects.y,
    w: props.projects.w,
    bgColor: props.projects.data.style.bgColor,
    textColor: props.projects.data.style.textColor,
  });
  console.log(props.projects.data);

  return (
    <div className={blueprintClasses.blueprintWrapper}>
      <BlueprintTitle formStyles={props.formStyles} title={props.projects.data.title} />
      {props.projects.data.data.map((eachProject: Project) => {
        return (
          <div key={eachProject.id} style={{ margin: "12px 0px 0px 8px", fontSize: 14 }}>
            {/* Project Name */}
            <h4 style={{ fontSize: 20 }}>{eachProject.projectName}</h4>
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
  );
};
