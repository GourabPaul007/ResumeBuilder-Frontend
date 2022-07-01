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
  filled: true,
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
  const blockClasses = useBlockStyles(props.formStyles);
  const toBeShownSkills = props.skills.data.length === 0 && props.skills.title === "" ? dummySkills : props.skills;

  return (
    <div className={blockClasses.blockWrapper}>
      <div className={blockClasses.blockTitleDiv}>
        <h2 className={blockClasses.blockTitleH2}>{toBeShownSkills.title}</h2>
      </div>
      <RemoveBlockButton item={props.item} removeItem={props.removeItem} blockTitle={props.blockTitle} />
      <div style={{ marginTop: 4, paddingLeft: 8, fontWeight: 500 }}>
        {toBeShownSkills.data.map((eachSkill: string, index: number) => {
          return (
            <div
              key={eachSkill + index}
              style={{
                display: "inline-block",
                padding: "5px 10px",
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

export const SkillsBlock2: React.FC<SkillsBlockProps> = (props) => {
  const blockClasses = useBlockStyles(props.formStyles);
  const toBeShownSkills = props.skills.data.length === 0 && props.skills.title === "" ? dummySkills : props.skills;

  return (
    <div style={{ paddingLeft: 20, paddingRight: 20, paddingTop: 16, paddingBottom: 16, fontFamily: "sans-serif" }}>
      <div className={blockClasses.blockTitleDiv}>
        <h2 className={blockClasses.blockTitleH2}>{toBeShownSkills.title}</h2>
      </div>
      <RemoveBlockButton item={props.item} removeItem={props.removeItem} blockTitle={props.blockTitle} />
      <div style={{ marginTop: 4, paddingLeft: 8, fontWeight: 500 }}>
        {toBeShownSkills.data.map((eachSkill: string, index: number) => {
          return (
            <div
              key={eachSkill + index}
              style={{
                display: "inline-block",
                padding: "5px 10px",
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
