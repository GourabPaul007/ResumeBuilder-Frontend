import React from "react";
import { v1 as uuidv1 } from "uuid";
import { checkHyperlink } from "../../../helpers/checkHyperlink";
import { FormStyles } from "../../../interfaces/FormStyles";
import { About } from "../../../interfaces/About";
import { useBlueprintStyles } from "./_BlueprintStyles";

interface AboutBlueprintProps {
  about: {
    name: string;
    x: number;
    y: number;
    w: number;
    h: number;
    data: About;
  };
  formStyles: FormStyles;
}

export const AboutBlueprint1: React.FC<AboutBlueprintProps> = (props) => {
  const blueprintClasses = useBlueprintStyles();
  console.log(props.about);

  // blueprintWrapper
  return (
    <div
      style={{
        position: "absolute",
        left: `${props.about.x * 17.5}mm`,
        top: `${props.about.y * 10 + (props.about.y - 1) * 10 + 10}px`,
        width: `${props.about.w * 17.5 - 3}mm`,
        height: `${props.about.h * 10 + (props.about.h - 1) * 10}px`,
        borderRadius: 5,
        backgroundColor: props.about.data.style.bgColor,
        color: props.about.data.style.textColor,
      }}
    >
      <div className={blueprintClasses.blueprintWrapper}>
        <h1 style={{ fontWeight: 600, marginBottom: 0, display: "inline-block" }}>{props.about.data.name}</h1>
        <p style={{ display: "inline-block" }}>&nbsp;&nbsp;{props.about.data.profession}</p>
        <div style={{ fontWeight: 500, fontSize: 15, marginTop: 8 }}>
          {/* the about extra */}
          <div style={{ paddingRight: 4, paddingLeft: 4 }}>
            <p>{props.about.data.about}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
