import React, { Dispatch } from "react";
import { v1 as uuidv1 } from "uuid";
import { RemoveBlockButton } from "../../../Components/CustomPageComponents";
import { FormStyles } from "../../../interfaces/FormStyles";
import { GridItem } from "../../../interfaces/GridItem";
import { Skills } from "../../../interfaces/Skills";
import { useBlockStyles } from "./_BlockStyles";

const dummySkills: Skills = {
  color: "#ff5656",
  title: "Skills Title",
  chipRadius: 10,
  chipSize: 5,
  filled: true,
  flipped: false,
  data: ["HTML/CSS/JSS", "TypeScript", "ReactJS", "Flutter", "NodeJS", "ExpressJS", "MySql", "MongoDB", "Sqlite"],
};

interface SkillsBlockProps {
  blockTitle: string;
  item: GridItem;
  removeItem: (item: GridItem) => void;
  skills: Skills;
  formStyles: FormStyles;
}

export const SkillsBlock1: React.FC<SkillsBlockProps> = (props) => {
  const blockClasses = useBlockStyles({ formStyles: props.formStyles, flipped: props.skills.flipped });
  const toBeShownSkills = props.skills.data.length === 0 && props.skills.title === "" ? dummySkills : props.skills;
  console.log(toBeShownSkills.chipSize);

  return (
    <div className={blockClasses.blockWrapper}>
      <div style={{ display: "flex", flexDirection: props.skills.flipped ? "row-reverse" : "row" }}>
        <div className={blockClasses.blockTitleDiv}>
          <h2 className={blockClasses.blockTitleH2}>{toBeShownSkills.title}</h2>
        </div>
        <RemoveBlockButton
          item={props.item}
          removeItem={props.removeItem}
          blockTitle={props.blockTitle}
          flipped={props.skills.flipped}
        />
      </div>
      <div
        style={{
          marginTop: 4,
          paddingLeft: 8,
          fontWeight: 500,
          // for aligning to left or right
          display: "flex",
          flexFlow: "wrap",
          flexDirection: props.skills.flipped ? "row-reverse" : "row",
          // opacity: props.skills.data.length == 0 ? 0.1 : 1,
        }}
      >
        {toBeShownSkills.data.map((eachSkill: string, index: number) => {
          return (
            <div
              key={eachSkill + index}
              style={{
                display: "inline-block",
                padding: `${toBeShownSkills.chipSize}px ${toBeShownSkills.chipSize * 2}px`,
                margin: 4,
                border: toBeShownSkills.filled ? `1px solid transparent` : `1px solid ${toBeShownSkills.color}`,
                borderRadius: toBeShownSkills.chipRadius,
                color: toBeShownSkills.filled ? "#fff" : toBeShownSkills.color,
                backgroundColor: toBeShownSkills.filled ? toBeShownSkills.color : "transparent",
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

export const SkillsBlock2: React.FC<SkillsBlockProps> = (props) => {
  const blockClasses = useBlockStyles({ formStyles: props.formStyles, flipped: props.skills.flipped });
  const toBeShownSkills = props.skills.data.length === 0 && props.skills.title === "" ? dummySkills : props.skills;

  return (
    <div className={blockClasses.blockWrapper}>
      <div style={{ display: "flex", flexDirection: props.skills.flipped ? "row-reverse" : "row" }}>
        <div className={blockClasses.blockTitleDiv}>
          <h2 className={blockClasses.blockTitleH2}>{toBeShownSkills.title}</h2>
        </div>
        <RemoveBlockButton
          item={props.item}
          removeItem={props.removeItem}
          blockTitle={props.blockTitle}
          flipped={props.skills.flipped}
        />
      </div>
      <div
        style={{
          marginTop: 4,
          paddingLeft: 8,
          fontWeight: 500,
          // for aligning to left or right
          display: "flex",
          flexFlow: "wrap",
          flexDirection: props.skills.flipped ? "row-reverse" : "row",
          // opacity: props.skills.data.length == 0 ? 0.1 : 1,
        }}
      >
        {toBeShownSkills.data.map((eachSkill: string, index: number) => {
          return (
            <div
              key={eachSkill + index}
              style={{
                display: "inline-block",
                padding: `${toBeShownSkills.chipSize}px ${toBeShownSkills.chipSize * 2}px`,
                margin: 4,
                border: props.skills.filled ? `1px solid transparent` : `1px solid ${props.skills.color}`,
                borderRadius: props.skills.chipRadius,
                color: props.skills.filled ? "#fff" : props.skills.color,
                backgroundColor: props.skills.filled ? props.skills.color : "transparent",
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
