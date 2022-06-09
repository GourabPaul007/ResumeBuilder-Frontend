import React from "react";
import { v1 as uuidv1 } from "uuid";

import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import PhoneIcon from "@mui/icons-material/Phone";
import { checkHyperlink } from "../../../helpers/checkHyperlink";

const projects = [
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
];

export const ProjectsBlock1: React.FC = () => {
  return (
    <div style={{ margin: 8, fontFamily: "sans-serif" }}>
      <h2 style={{ fontWeight: 600, marginBottom: 0, color: "#123456" }}>Work Experience</h2>
      {projects.map((eachProjects) => {
        return (
          <div key={eachProjects.id} style={{ marginLeft: 12, marginTop: 4, fontSize: 14 }}>
            {/* Work Name */}
            <h4 style={{ fontSize: 20 }}>{eachProjects.projectName}</h4>
            {/* Work Details */}
            <div style={{ marginBottom: 4, marginLeft: 16, marginTop: 4, fontWeight: 500 }}>
              {eachProjects.projectDetails.map((detail) => {
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
                    &bull;&nbsp;{checkHyperlink(detail)}
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
