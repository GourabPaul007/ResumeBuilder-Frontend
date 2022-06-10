import React, { Dispatch } from "react";
import { v1 as uuidv1 } from "uuid";
import { RemoveBlockButton } from "../../../Components/CustomPageComponents";
import { GridItem } from "../../../interfaces/GridItem";

interface SkillsBlockProps {
  item: GridItem;
  removeItem: (item: GridItem) => void;
  skills: string[];
  // setSkills: Dispatch<React.SetStateAction<string[]>>;
}

export const SkillsBlock1: React.FC<SkillsBlockProps> = (props) => {
  const toBeShownSkills =
    props.skills.length > 0
      ? props.skills
      : ["HTML/CSS/JS", "TypeScript", "ReactJS", "Flutter", "NodeJS", "ExpressJS", "MySql", "MongoDB", "Sqlite"];

  return (
    <div style={{ margin: 12, fontFamily: "sans-serif" }}>
      <h2 style={{ fontWeight: 600, color: "#123456", display: "inline-block" }}>Skills</h2>
      <RemoveBlockButton item={props.item} removeItem={props.removeItem} />
      <div style={{ marginTop: 4, paddingLeft: 8 }}>
        {toBeShownSkills.map((eachSkill: string) => {
          return (
            <div
              key={eachSkill + uuidv1}
              style={{
                display: "inline-block",
                padding: "4px 8px",
                margin: 4,
                borderRadius: 6,
                color: "#fff",
                backgroundColor: "#123456",
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
