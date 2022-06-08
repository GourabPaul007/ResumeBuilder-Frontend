import React from "react";
import { v1 as uuidv1 } from "uuid";

export const SkillsBlock1: React.FC = () => {
  return (
    <div style={{ margin: 12, fontFamily: "sans-serif" }}>
      <h2 style={{ fontWeight: 600, color: "#123456" }}>Skills</h2>
      <div style={{ marginTop: 4, paddingLeft: 8 }}>
        {["HTML/CSS/JS", "TypeScript", "ReactJS", "Flutter", "NodeJS", "ExpressJS", "MySql", "MongoDB", "Sqlite"].map(
          (eachSkill: string) => {
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
          }
        )}
      </div>
    </div>
  );
};
