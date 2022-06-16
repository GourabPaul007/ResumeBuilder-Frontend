import React, { Dispatch } from "react";
import { v1 as uuidv1 } from "uuid";
import { RemoveBlockButton } from "../../../Components/CustomPageComponents";
import { GridItem } from "../../../interfaces/GridItem";

interface SkillsBlockProps {
  item: GridItem;
  removeItem: (item: GridItem) => void;
  skills: string[];
  accentColor: string;
}

export const SkillsBlock1: React.FC<SkillsBlockProps> = (props) => {
  const toBeShownSkills =
    props.skills.length > 0
      ? props.skills
      : ["HTML/CSS/JS", "TypeScript", "ReactJS", "Flutter", "NodeJS", "ExpressJS", "MySql", "MongoDB", "Sqlite"];

  return (
    <div style={{ paddingLeft: 20, paddingRight: 20, paddingTop: 16, paddingBottom: 16, fontFamily: "sans-serif" }}>
      <h2 style={{ fontWeight: 600, color: "#123456", display: "inline-block" }}>Skills</h2>
      <RemoveBlockButton item={props.item} removeItem={props.removeItem} />
      <div style={{ marginTop: 4, paddingLeft: 8, fontWeight: 500 }}>
        {toBeShownSkills.map((eachSkill: string, index: number) => {
          return (
            <div
              key={eachSkill + index}
              style={{
                display: "inline-block",
                padding: "4px 8px",
                margin: 4,
                borderRadius: 6,
                color: "#fff",
                backgroundColor: props.accentColor,
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
