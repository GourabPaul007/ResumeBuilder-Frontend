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
  const blueprintClasses = useBlueprintStyles({
    h: props.about.h,
    x: props.about.x,
    y: props.about.y,
    w: props.about.w,
    bgColor: props.about.data.style.bgColor,
    textColor: props.about.data.style.textColor,
  });

  // blueprintWrapper
  return (
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
  );
};
