import React, { Dispatch } from "react";
import { v1 as uuidv1 } from "uuid";
import { RemoveBlockButton } from "../../../Components/CustomPageComponents";
import { FormStyles } from "../../../interfaces/FormStyles";
import { GridItem } from "../../../interfaces/GridItem";
import { Skills } from "../../../interfaces/Skills";
import { useBlockStyles } from "./_BlockStyles";

const dummySkills: Skills = {
  color: "#123456",
  title: "Skills Title",
  chipRadius: 10,
  data: ["HTML/CSS/JS", "TypeScript", "ReactJS", "Flutter", "NodeJS", "ExpressJS", "MySql", "MongoDB", "Sqlite"],
};

interface SkillsBlockProps {
  item: GridItem;
  removeItem: (item: GridItem) => void;
  skills: Skills;
  formStyles: FormStyles;
}

export const SkillsBlock1: React.FC<SkillsBlockProps> = (props) => {
  const blockClasses = useBlockStyles(props.formStyles);
  const toBeShownSkills = props.skills.data.length > 0 ? props.skills : dummySkills;

  return (
    <div style={{ paddingLeft: 20, paddingRight: 20, paddingTop: 16, paddingBottom: 16, fontFamily: "sans-serif" }}>
      <div className={blockClasses.blockTitleDiv}>
        <h2 className={blockClasses.blockTitleH2}>{props.skills.title}</h2>
      </div>
      <RemoveBlockButton item={props.item} removeItem={props.removeItem} />
      <div style={{ marginTop: 4, paddingLeft: 8, fontWeight: 500 }}>
        {toBeShownSkills.data.map((eachSkill: string, index: number) => {
          return (
            <div
              key={eachSkill + index}
              style={{
                display: "inline-block",
                padding: "4px 8px",
                margin: 4,
                border: `1px solid transparent`,
                borderRadius: props.skills.chipRadius,
                color: "#fff",
                backgroundColor: props.skills.color,
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
  const toBeShownSkills = props.skills.data.length > 0 ? props.skills : dummySkills;

  return (
    <div style={{ paddingLeft: 20, paddingRight: 20, paddingTop: 16, paddingBottom: 16, fontFamily: "sans-serif" }}>
      <div className={blockClasses.blockTitleDiv}>
        <h2 className={blockClasses.blockTitleH2}>{props.skills.title}</h2>
      </div>
      <RemoveBlockButton item={props.item} removeItem={props.removeItem} />
      <div style={{ marginTop: 4, paddingLeft: 8, fontWeight: 500 }}>
        {toBeShownSkills.data.map((eachSkill: string, index: number) => {
          return (
            <div
              key={eachSkill + index}
              style={{
                display: "inline-block",
                padding: "4px 8px",
                margin: 4,
                border: `1px solid ${props.skills.color}`,
                borderRadius: props.skills.chipRadius,
                color: props.skills.color,
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
