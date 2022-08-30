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
    <div className={blueprintClasses.blueprintWrapper}>
      <BlueprintTitle formStyles={props.formStyles} title={props.works.data.title} />
      {props.works.data.data.map((eachWork: Work) => {
        return (
          <div key={eachWork.id} style={{ marginLeft: 12, marginTop: 4, fontSize: 15 }}>
            {/* Work Name & Duration*/}
            <div style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "start" }}>
              <h4 style={{ fontSize: 20 }}>{eachWork.workOrganizationName}</h4>
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
