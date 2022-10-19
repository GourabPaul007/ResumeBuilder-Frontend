import React from "react";
import { FormStyles } from "../../../interfaces/FormStyles";
import { useBlueprintStyles } from "./_BlueprintStyles";
import { Name } from "../../../interfaces/Name";

interface AboutBlueprintProps {
  name: {
    name: string;
    x: number;
    y: number;
    w: number;
    h: number;
    data: Name;
  };
  formStyles: FormStyles;
}

export const NameBlueprint1: React.FC<AboutBlueprintProps> = (props) => {
  const blueprintClasses = useBlueprintStyles({
    h: props.name.h,
    x: props.name.x,
    y: props.name.y,
    w: props.name.w,
    bgColor: props.name.data.style.bgColor,
    textColor: props.name.data.style.textColor,
  });

  return (
    <div className={blueprintClasses.blueprintWrapper} style={{ fontFamily: props.formStyles.fontFamily }}>
      <div
        style={{
          display: "flex",
          justifyContent: props.name.data.align,
          alignItems: "center",
        }}
      >
        <h1 style={{ fontSize: props.name.data.fontSize, fontWeight: 600, marginBottom: 0, display: "inline-block" }}>
          {props.name.data.name}
        </h1>
        <p style={{ marginTop: props.name.data.fontSize - 22, display: "inline-block" }}>
          &nbsp;&nbsp;{props.name.data.profession}
        </p>
      </div>
    </div>
  );
};
