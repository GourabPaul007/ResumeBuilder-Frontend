import React, { Dispatch } from "react";
import { v1 as uuidv1 } from "uuid";
import { FormStyles } from "../../../interfaces/FormStyles";
import { Skills } from "../../../interfaces/Skills";
import { useBlueprintStyles } from "./_BlueprintStyles";
import { BlueprintTitle } from "./_BlueprintTitle";

interface SkillsBlueprintProps {
  skills: {
    name: string;
    x: number;
    y: number;
    w: number;
    h: number;
    data: Skills;
  };
  formStyles: FormStyles;
}

export const SkillsBlueprint1: React.FC<SkillsBlueprintProps> = (props) => {
  const blueprintClasses = useBlueprintStyles({
    h: props.skills.h,
    x: props.skills.x,
    y: props.skills.y,
    w: props.skills.w,
    bgColor: props.skills.data.style.bgColor,
    textColor: props.skills.data.style.textColor,
  });

  return (
    <div className={blueprintClasses.blueprintWrapper} style={{ fontFamily: props.formStyles.fontFamily }}>
      <BlueprintTitle
        formStyles={props.formStyles}
        title={props.skills.data.title}
        flipped={props.skills.data.flipped}
      />
      <div
        style={{
          marginTop: 8,
          // paddingLeft: 8,
          fontWeight: 500,
          // for aligning to left or right
          display: "flex",
          flexFlow: "wrap",
          flexDirection: props.skills.data.flipped ? "row-reverse" : "row",
        }}
      >
        {props.skills.data.data.map((eachSkill: string, index: number) => {
          return (
            <div
              key={eachSkill + index}
              style={{
                display: "inline-blueprint",
                padding: `${props.skills.data.chipSize}px ${props.skills.data.chipSize * 2}px`,
                margin: "4px 0px 4px 4px",
                border: props.skills.data.filled ? `1px solid transparent` : `1px solid ${props.skills.data.color}`,
                borderRadius: props.skills.data.chipRadius,
                color: props.skills.data.filled ? "#fff" : props.skills.data.color,
                backgroundColor: props.skills.data.filled ? props.skills.data.color : "transparent",
                fontSize: 15,
              }}
            >
              {eachSkill}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const SkillsBlueprint2: React.FC<SkillsBlueprintProps> = (props) => {
  const blueprintClasses = useBlueprintStyles({
    h: props.skills.h,
    x: props.skills.x,
    y: props.skills.y,
    w: props.skills.w,
    bgColor: props.skills.data.style.bgColor,
    textColor: props.skills.data.style.textColor,
  });

  return (
    <div className={blueprintClasses.blueprintWrapper} style={{ fontFamily: props.formStyles.fontFamily }}>
      <div style={{ display: "flex", flexDirection: props.skills.data.flipped ? "row-reverse" : "row" }}>
        <BlueprintTitle formStyles={props.formStyles} title={props.skills.data.title} />
      </div>
      <div
        style={{
          marginTop: 8,
          // paddingLeft: 8,
          fontWeight: 500,
          // for aligning to left or right
          display: "flex",
          flexFlow: "wrap",
          flexDirection: props.skills.data.flipped ? "row-reverse" : "row",
        }}
      >
        {props.skills.data.data.map((eachSkill: string, index: number) => {
          return (
            <div
              key={eachSkill + index}
              style={{
                display: "inline-blueprint",
                padding: `${props.skills.data.chipSize}px ${props.skills.data.chipSize * 2}px`,
                margin: "4px 0px 4px 4px",
                border: props.skills.data.filled ? `1px solid transparent` : `1px solid ${props.skills.data.color}`,
                borderRadius: props.skills.data.chipRadius,
                color: props.skills.data.filled ? "#fff" : props.skills.data.color,
                backgroundColor: props.skills.data.filled ? props.skills.data.color : "transparent",
                fontSize: 15,
              }}
            >
              {eachSkill}
            </div>
          );
        })}
      </div>
    </div>
  );
};
