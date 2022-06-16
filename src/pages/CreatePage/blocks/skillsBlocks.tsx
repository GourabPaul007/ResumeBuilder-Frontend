import React, { Dispatch } from "react";
import { v1 as uuidv1 } from "uuid";
import { RemoveBlockButton } from "../../../Components/CustomPageComponents";
import { GridItem } from "../../../interfaces/GridItem";
import { Skills } from "../../../interfaces/Skills";

const dummySkills: Skills = {
  color: "#123456",
  title: "Skills Title",
  data: ["HTML/CSS/JS", "TypeScript", "ReactJS", "Flutter", "NodeJS", "ExpressJS", "MySql", "MongoDB", "Sqlite"],
};

interface SkillsBlockProps {
  item: GridItem;
  removeItem: (item: GridItem) => void;
  skills: Skills;
  accentColor: string;
  headerColor: string;
}

export const SkillsBlock1: React.FC<SkillsBlockProps> = (props) => {
  const toBeShownSkills = props.skills.data.length > 0 ? props.skills : dummySkills;

  return (
    <div style={{ paddingLeft: 20, paddingRight: 20, paddingTop: 16, paddingBottom: 16, fontFamily: "sans-serif" }}>
      <h2 style={{ fontWeight: 600, color: props.headerColor, display: "inline-block" }}>{props.skills.title}</h2>
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
                borderRadius: 6,
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
