import React, { Dispatch } from "react";
import { v1 as uuidv1 } from "uuid";
import { FormStyles } from "../../../interfaces/FormStyles";
import { GridItem } from "../../../interfaces/GridItem";
import { Others } from "../../../interfaces/Others";
import { useBlueprintStyles } from "./_BlueprintStyles";
import { BlueprintTitle } from "./_BlueprintTitle";

const dummyOthers = {
  title: "Others Title",
  data: [
    "Lorem ipsum dolor sit amet.",
    "C onsectetur adipisicing repellat",
    "Dolorum earum officiis.",
    "distinctio ipsa officia soluta.",
    "accusantium exercit ationem.",
  ],
  style: {
    bgColor: "#fff",
    textColor: "#000",
  },
};

interface OthersBlueprintProps {
  others: {
    name: string;
    x: number;
    y: number;
    w: number;
    h: number;
    data: Others;
  };
  formStyles: FormStyles;
}

export const OthersBlueprint1: React.FC<OthersBlueprintProps> = (props) => {
  const blueprintClasses = useBlueprintStyles({
    h: props.others.h,
    x: props.others.x,
    y: props.others.y,
    w: props.others.w,
    bgColor: props.others.data.style.bgColor,
    textColor: props.others.data.style.textColor,
  });

  return (
    <div
      style={{
        backgroundColor: props.others.data.style.bgColor,
        color: props.others.data.style.textColor,
        height: "100%",
        width: "100%",
      }}
    >
      <div className={blueprintClasses.blueprintWrapper} style={{ fontFamily: props.formStyles.fontFamily }}>
        <BlueprintTitle title={props.others.data.title} formStyles={props.formStyles} />
        <div style={{ paddingLeft: 8, fontSize: 15, marginTop: "8px" }}>
          {props.others.data.data.map((eachLine: string) => {
            return (
              <div
                key={eachLine + uuidv1}
                style={{
                  display: "flex",
                  justifyContent: "start",
                  alignItems: "start",
                  marginBottom: 8,
                }}
              >
                <div>
                  {props.others.data.bullet === -1 ? "" : String.fromCharCode(props.others.data.bullet)}&nbsp;&nbsp;
                </div>
                <div style={{ fontWeight: 500 }}>{eachLine}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
