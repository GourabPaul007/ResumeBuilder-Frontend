import React, { Dispatch } from "react";
import { v1 as uuidv1 } from "uuid";

import { checkHyperlink } from "../../../helpers/checkHyperlink";
import { RemoveBlockButton } from "../../../Components/CustomPageComponents";
import { GridItem } from "../../../interfaces/GridItem";
import { Work, Works } from "../../../interfaces/Works";
import { FormStyles } from "../../../interfaces/FormStyles";
import { useBlockStyles } from "./_BlockStyles";

const dummyWorks: Works = {
  title: "Bruh Works",
  data: [
    {
      id: "work1",
      workOrganizationName: "Company 1",
      workDetails: [
        "Lorem ipsum dolor sit amet consectetur adipisicing elit adipisci labore minima doloribus animi.",
        "Excepturi, beatae reprehenderit at doloremque sunt eaque cum aperiam quod exercitationem ipsam quam minus inventore non qui.",
      ],
      workDuration: "2022 - 2025",
    },
    {
      id: "work2",
      workOrganizationName: "Company 2",
      workDetails: [
        "Lorem ipsum dolor sit amet consectetur adipisicing elit adipisci labore minima doloribus animi.",
        "Excepturi, beatae reprehenderit at doloremque sunt eaque cum aperiam quod exercitationem ipsam quam minus inventore non qui.",
      ],
      workDuration: "2025 - 2030",
    },
  ],
  style: {
    bgColor: "#fff",
    textColor: "#000",
  },
};

interface WorksBlockProps {
  blockTitle: string;
  item: GridItem;
  removeItem: (item: GridItem) => void;
  works: Works;
  formStyles: FormStyles;
}

export const WorksBlock1: React.FC<WorksBlockProps> = (props) => {
  const blockClasses = useBlockStyles({ formStyles: props.formStyles });
  const isEmptyObjArr = (arr: Work[]) => {
    return arr.every((value) => {
      // 1st -> checks if name is empty string, 2nd -> checks if all array members are empty strings
      if (value.workOrganizationName === "" && value.workDetails.join("").length === 0) {
        return true;
      }
      return false;
    });
  };

  const toBeDisplayedWorks = !isEmptyObjArr(props.works.data) ? props.works : dummyWorks;

  return (
    <div
      style={{
        backgroundColor: toBeDisplayedWorks.style.bgColor,
        color: toBeDisplayedWorks.style.textColor,
        height: "100%",
        width: "100%",
      }}
    >
      <div className={blockClasses.blockWrapper}>
        <div className={blockClasses.blockTitleDiv}>
          <h2 className={blockClasses.blockTitleH2}>{props.works.title}</h2>
        </div>
        <RemoveBlockButton item={props.item} removeItem={props.removeItem} blockTitle={props.blockTitle} />
        {toBeDisplayedWorks.data.map((eachWork: Work) => {
          return (
            <div key={eachWork.id} style={{ marginLeft: 12, marginTop: 4, fontSize: 15 }}>
              {/* Work Name & Duration*/}
              <div style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "start" }}>
                <h4 style={{ fontSize: 20 }}>{eachWork.workOrganizationName}</h4>
                <p style={{ color: props.formStyles.accentColor, fontSize: 12, flexShrink: 0, paddingTop: 3 }}>
                  {eachWork.workDuration}
                </p>
              </div>
              {/* Work Details */}
              <div style={{ marginBottom: 4, marginLeft: 16, marginTop: 4, fontWeight: 500 }}>
                {eachWork.workDetails.map((detail) => {
                  return (
                    <div
                      key={detail}
                      style={{ display: "flex", flexDirection: "row", justifyContent: "start", alignItems: "start" }}
                    >
                      &bull;&nbsp;{checkHyperlink(detail)}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
