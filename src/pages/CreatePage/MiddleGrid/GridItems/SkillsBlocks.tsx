import React, { Dispatch, useEffect, useState } from "react";
import { v1 as uuidv1 } from "uuid";
import { RemoveBlockButton } from "../../../../Components/CustomPageComponents";
import { FormStyles } from "../../../../interfaces/FormStyles";
import { GridItem } from "../../../../interfaces/GridItem";
import { Skills } from "../../../../interfaces/Skills";
import { useBlockStyles } from "./_BlockStyles";
import { BlockTitle } from "./_BlockTitle";

const dummySkills1: Skills = {
  color: "#ff6565",
  title: "Skills",
  chipRadius: 10,
  chipSize: 4,
  filled: true,
  flipped: false,
  data: [
    "HTML/CSS/JSS",
    "TypeScript",
    "ReactJS",
    "NextJS",
    "Flutter",
    "NodeJS",
    "ExpressJS",
    "Python",
    "MySql",
    "MongoDB",
    "Sqlite",
  ],
  style: {
    bgColor: "#ffffff",
    textColor: "#000000",
  },
};

const dummySkills2: Skills = {
  color: "#ff5656",
  title: "Skills Title",
  chipRadius: 16,
  chipSize: 4,
  filled: false,
  flipped: false,
  data: ["HTML/CSS/JSS", "TypeScript", "ReactJS", "Flutter", "NodeJS", "ExpressJS", "MySql", "MongoDB", "Sqlite"],
  style: {
    bgColor: "#ffffff",
    textColor: "#000000",
  },
};

const dummySkills3: Skills = {
  color: "#ff5656",
  title: "Skills Title",
  chipRadius: 10,
  chipSize: 4,
  filled: true,
  flipped: false,
  data: ["HTML/CSS/JSS", "TypeScript", "ReactJS", "Flutter", "NodeJS", "ExpressJS", "MySql", "MongoDB", "Sqlite"],
  style: {
    bgColor: "#ffffff",
    textColor: "#000000",
  },
};

const isSkillsEmpty = (skills: Skills): boolean => {
  if (skills.data.join("") === "" && skills.title === "") return true;
  return false;
};

interface SkillsBlockProps {
  blockTitle: string;
  item: GridItem;
  removeItem: (item: GridItem) => void;
  skills: Skills;
  formStyles: FormStyles;
}

export const SkillsBlock1: React.FC<SkillsBlockProps> = (props) => {
  const blockClasses = useBlockStyles();

  // Check For Empty Skills
  const [isEmpty, setIsEmpty] = useState(false);
  useEffect(() => {
    setIsEmpty(isSkillsEmpty(props.skills));
  }, [props.skills]);

  const toBeShownSkills = isEmpty ? dummySkills1 : props.skills;

  return (
    <div
      style={{
        backgroundColor: toBeShownSkills.style.bgColor,
        color: toBeShownSkills.style.textColor,
        height: "100%",
        width: "100%",
      }}
    >
      <div className={blockClasses.blockWrapper}>
        <div style={{ display: "flex", flexDirection: props.skills.flipped ? "row-reverse" : "row" }}>
          <BlockTitle
            formStyles={props.formStyles}
            title={toBeShownSkills.title}
            isOpaque={isEmpty}
            flipped={props.skills.flipped}
          />
          <RemoveBlockButton
            item={props.item}
            removeItem={props.removeItem}
            blockTitle={props.blockTitle}
            flipped={props.skills.flipped}
          />
        </div>
        <div
          style={{
            marginTop: 8,
            // paddingLeft: 8,
            fontWeight: 500,
            // for aligning to left or right
            display: "flex",
            flexFlow: "wrap",
            flexDirection: props.skills.flipped ? "row-reverse" : "row",
            opacity: isEmpty ? 0.5 : 1,
          }}
        >
          {toBeShownSkills.data.map((eachSkill: string, index: number) => {
            return (
              <div
                key={eachSkill + index}
                style={{
                  display: "inline-block",
                  padding: `${toBeShownSkills.chipSize}px ${toBeShownSkills.chipSize * 2}px`,
                  margin: "4px 0px 4px 4px",
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
    </div>
  );
};

export const SkillsBlock2: React.FC<SkillsBlockProps> = (props) => {
  const blockClasses = useBlockStyles();

  // Check For Empty Skills
  const [isEmpty, setIsEmpty] = useState(false);
  useEffect(() => {
    setIsEmpty(isSkillsEmpty(props.skills));
  }, [props.skills]);

  const toBeShownSkills = isEmpty ? dummySkills2 : props.skills;

  return (
    <div
      style={{
        backgroundColor: toBeShownSkills.style.bgColor,
        color: toBeShownSkills.style.textColor,
        height: "100%",
        width: "100%",
      }}
    >
      <div className={blockClasses.blockWrapper}>
        <div style={{ display: "flex", flexDirection: props.skills.flipped ? "row-reverse" : "row" }}>
          <BlockTitle
            formStyles={props.formStyles}
            title={toBeShownSkills.title}
            isOpaque={isEmpty}
            flipped={props.skills.flipped}
          />
          <RemoveBlockButton
            item={props.item}
            removeItem={props.removeItem}
            blockTitle={props.blockTitle}
            flipped={props.skills.flipped}
          />
        </div>
        <div
          style={{
            marginTop: 8,
            // paddingLeft: 8,
            fontWeight: 500,
            // for aligning to left or right
            display: "flex",
            flexFlow: "wrap",
            flexDirection: props.skills.flipped ? "row-reverse" : "row",
            opacity: isEmpty ? 0.5 : 1,
          }}
        >
          {toBeShownSkills.data.map((eachSkill: string, index: number) => {
            return (
              <div
                key={eachSkill + index}
                style={{
                  display: "inline-block",
                  padding: `${toBeShownSkills.chipSize}px ${toBeShownSkills.chipSize * 2}px`,
                  margin: "4px 0px 4px 4px",
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
    </div>
  );
};
