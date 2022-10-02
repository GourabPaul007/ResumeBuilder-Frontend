import React, { Dispatch } from "react";
import { v1 as uuidv1 } from "uuid";

import { checkHyperlink } from "../../../helpers/checkHyperlink";
import { Work, Works } from "../../../interfaces/Works";
import { FormStyles } from "../../../interfaces/FormStyles";
import { useBlueprintStyles } from "./_BlueprintStyles";
import { BlueprintTitle } from "./_BlueprintTitle";

interface WorksBlueprintProps {
  works: {
    name: string;
    x: number;
    y: number;
    w: number;
    h: number;
    data: Works;
  };
  formStyles: FormStyles;
}

export const WorksBlueprint1: React.FC<WorksBlueprintProps> = (props) => {
  const blueprintClasses = useBlueprintStyles({
    h: props.works.h,
    x: props.works.x,
    y: props.works.y,
    w: props.works.w,
    bgColor: props.works.data.style.bgColor,
    textColor: props.works.data.style.textColor,
  });

  return (
    <div className={blueprintClasses.blueprintWrapper} style={{ fontFamily: props.formStyles.fontFamily }}>
      <BlueprintTitle formStyles={props.formStyles} title={props.works.data.title} />
      {props.works.data.data.map((eachWork: Work) => {
        return (
          <div key={eachWork.id} style={{ marginLeft: 12, marginTop: 4, fontSize: 15 }}>
            {/* Work Name & Duration*/}
            <div style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "start" }}>
              <span style={{ fontSize: 18 }}>
                <h4 style={{ display: "inline" }}>{eachWork.workOrganizationName}</h4>
                {eachWork.workLocation !== "" ? (
                  <h4 style={{ display: "inline", fontWeight: 500 }}> , {eachWork.workLocation}</h4>
                ) : null}
                {eachWork.jobTitle !== "" ? (
                  <h4 style={{ display: "inline", fontWeight: 500, fontStyle: "italic" }}> — {eachWork.jobTitle}</h4>
                ) : null}
              </span>
              <p style={{ color: props.formStyles.accentColor, fontSize: 12, flexShrink: 0, paddingTop: 3 }}>
                {eachWork.workDuration}
              </p>
            </div>
            {/* Work Details */}
            <div style={{ marginBottom: 4, marginLeft: 16, marginTop: 4, fontWeight: 500 }}>
              {eachWork.workDetails.map((detail) => {
                return (
                  <div
                    key={detail}
                    style={{ display: "flex", flexDirection: "row", justifyContent: "start", alignItems: "start" }}
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

export const WorksBlueprint2: React.FC<WorksBlueprintProps> = (props) => {
  const blueprintClasses = useBlueprintStyles({
    h: props.works.h,
    x: props.works.x,
    y: props.works.y,
    w: props.works.w,
    bgColor: props.works.data.style.bgColor,
    textColor: props.works.data.style.textColor,
  });

  return (
    <div className={blueprintClasses.blueprintWrapper} style={{ fontFamily: props.formStyles.fontFamily }}>
      <BlueprintTitle formStyles={props.formStyles} title={props.works.data.title} />
      {props.works.data.data.map((eachWork: Work) => {
        return (
          <div key={eachWork.id} style={{ margin: "12px 0px 8px 8px", fontSize: 15 }}>
            {/* Work Name & Duration*/}
            <div style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "start" }}>
              <span style={{ display: "inline", fontSize: 18 }}>
                <h4 style={{ display: "inline" }}>{eachWork.workOrganizationName}</h4>
                {eachWork.workLocation !== "" ? (
                  <h4 style={{ display: "inline", fontWeight: 500 }}> , {eachWork.workLocation}</h4>
                ) : null}
                {eachWork.jobTitle !== "" ? (
                  <h4 style={{ display: "inline", fontWeight: 500, fontStyle: "italic" }}>
                    &nbsp;—&nbsp;{eachWork.jobTitle}
                  </h4>
                ) : null}
              </span>
            </div>
            <p style={{ color: props.formStyles.accentColor, fontSize: 12, flexShrink: 0, paddingTop: 3 }}>
              {eachWork.workDuration}
            </p>
            {/* Work Details */}
            <div style={{ marginBottom: 4, fontWeight: 500 }}>
              {eachWork.workDetails.map((detail) => {
                return (
                  <div
                    key={detail}
                    style={{ display: "flex", flexDirection: "row", justifyContent: "start", alignItems: "start" }}
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
