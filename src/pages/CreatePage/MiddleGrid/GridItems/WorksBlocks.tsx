import React, { Dispatch, useEffect, useState } from "react";
import { v1 as uuidv1 } from "uuid";

import { checkHyperlink } from "../../../../helpers/checkHyperlink";
import { RemoveBlockButton } from "../../../../Components/CustomPageComponents";
import { GridItem } from "../../../../interfaces/GridItem";
import { Work, Works } from "../../../../interfaces/Works";
import { FormStyles } from "../../../../interfaces/FormStyles";
import { useBlockStyles } from "./_BlockStyles";
import { BlockTitle } from "./_BlockTitle";

const dummyWorks: Works = {
  title: "Work Experience",
  data: [
    {
      id: "work1",
      workOrganizationName: "Company",
      workLocation: "Location",
      jobTitle: "Job Title",
      workDetails: [
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh.",
        "Excepturi, reprehenderit at doloremque eaque aperiam.",
      ],
      workDuration: "MARCH 2022 - AUGUST 2025",
    },
    {
      id: "work2",
      workOrganizationName: "Company",
      workLocation: "Location",
      jobTitle: "Job Title",
      workDetails: ["Lorem ipsum dolor sit amet consectetur adipisicing elit adipisci labore minima doloribus animi."],
      workDuration: "OCTOBER 2025 - PRESENT",
    },
  ],
  style: {
    bgColor: "#fff",
    textColor: "#000",
  },
};

const isEmptyWorks = (works: Works) => {
  return works.data.every((value) => {
    // 1st -> checks if name is empty string, 2nd -> checks if all array members are empty strings
    if (
      works.title === "" &&
      value.workOrganizationName === "" &&
      value.jobTitle === "" &&
      value.workLocation === "" &&
      value.workDuration === "" &&
      value.workDetails.join("").length === 0
    ) {
      return true;
    }
    return false;
  });
};

interface WorksBlockProps {
  blockTitle: string;
  item: GridItem;
  removeItem: (item: GridItem) => void;
  works: Works;
  formStyles: FormStyles;
}

export const WorksBlock1: React.FC<WorksBlockProps> = (props) => {
  const blockClasses = useBlockStyles();

  // const toBeDisplayedWorks = !isEmptyObjArr(props.works.data) ? props.works : dummyWorks;

  // Check For Empty Ratings
  const [isEmpty, setIsEmpty] = useState(false);
  useEffect(() => {
    setIsEmpty(isEmptyWorks(props.works));
  }, [props.works]);

  const toBeDisplayedWorks = isEmpty ? dummyWorks : props.works;

  return (
    <div
      style={{
        backgroundColor: toBeDisplayedWorks.style.bgColor,
        color: toBeDisplayedWorks.style.textColor,
        height: "100%",
        width: "100%",
      }}
    >
      <div className={blockClasses.blockWrapper} style={{ fontFamily: props.formStyles.fontFamily }}>
        <BlockTitle formStyles={props.formStyles} title={toBeDisplayedWorks.title} isOpaque={isEmpty} />
        <RemoveBlockButton item={props.item} removeItem={props.removeItem} blockTitle={props.blockTitle} />
        <div style={{ opacity: isEmpty ? 0.5 : 1 }}>
          {toBeDisplayedWorks.data.map((eachWork: Work) => {
            return (
              <div key={eachWork.id} style={{ margin: "12px 0px 8px 8px", fontSize: 15 }}>
                {/* Work Name & Duration*/}
                <div style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "start" }}>
                  <span style={{ fontSize: 18 }}>
                    <h4 style={{ display: "inline" }}>{eachWork.workOrganizationName}</h4>
                    {eachWork.workLocation !== "" ? (
                      <h4 style={{ display: "inline", fontWeight: 500 }}> , {eachWork.workLocation}</h4>
                    ) : null}
                    {eachWork.jobTitle !== "" ? (
                      <h4 style={{ display: "inline", fontWeight: 500, fontStyle: "italic" }}>
                        {" "}
                        — {eachWork.jobTitle}
                      </h4>
                    ) : null}
                  </span>
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
    </div>
  );
};

export const WorksBlock2: React.FC<WorksBlockProps> = (props) => {
  const blockClasses = useBlockStyles();

  // const toBeDisplayedWorks = !isEmptyObjArr(props.works.data) ? props.works : dummyWorks;

  // Check For Empty Ratings
  const [isEmpty, setIsEmpty] = useState(false);
  useEffect(() => {
    setIsEmpty(isEmptyWorks(props.works));
  }, [props.works]);

  const toBeDisplayedWorks = isEmpty ? dummyWorks : props.works;

  return (
    <div
      style={{
        backgroundColor: toBeDisplayedWorks.style.bgColor,
        color: toBeDisplayedWorks.style.textColor,
        height: "100%",
        width: "100%",
      }}
    >
      <div className={blockClasses.blockWrapper} style={{ fontFamily: props.formStyles.fontFamily }}>
        <BlockTitle formStyles={props.formStyles} title={toBeDisplayedWorks.title} isOpaque={isEmpty} />
        <RemoveBlockButton item={props.item} removeItem={props.removeItem} blockTitle={props.blockTitle} />
        <div style={{ opacity: isEmpty ? 0.5 : 1 }}>
          {toBeDisplayedWorks.data.map((eachWork: Work) => {
            return (
              <div key={eachWork.id} style={{ margin: "12px 0px 8px 8px", fontSize: 15 }}>
                {/* Work Name & Duration*/}
                <div style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "start" }}>
                  <span style={{ display: "inline", fontSize: 18 }}>
                    <h4 style={{ display: "inline" }}>{eachWork.workOrganizationName}</h4>
                    {eachWork.workLocation !== "" ? (
                      <h4 style={{ display: "inline", fontWeight: 500 }}> , {eachWork.workLocation}</h4>
                    ) : null}
                    {eachWork.jobTitle !== "" ? (
                      <h4 style={{ display: "inline", fontWeight: 500, fontStyle: "italic" }}>
                        &nbsp;—&nbsp;{eachWork.jobTitle}
                      </h4>
                    ) : null}
                  </span>
                </div>
                <p style={{ color: props.formStyles.accentColor, fontSize: 12, flexShrink: 0, paddingTop: 3 }}>
                  {eachWork.workDuration}
                </p>
                {/* Work Details */}
                <div style={{ marginBottom: 4, fontWeight: 500 }}>
                  {eachWork.workDetails.map((detail) => {
                    return (
                      <div
                        key={detail}
                        style={{ display: "flex", flexDirection: "row", justifyContent: "start", alignItems: "start" }}
                      >
                        {checkHyperlink(detail)}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
