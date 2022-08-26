import React from "react";
import { Course, Educations } from "../../../../interfaces/Educations";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import { RemoveBlockButton } from "../../../../Components/CustomPageComponents";
import { GridItem } from "../../../../interfaces/GridItem";
import { FormStyles } from "../../../../interfaces/FormStyles";
import { useBlockStyles } from "./_BlockStyles";
import { BlockTitle } from "./_BlockTitle";

const dummyEducations: Educations = {
  title: "Bruh Education",
  data: [
    {
      id: "education001",
      courseName: "Bachelor of Science in Computer Science",
      organizationName: "Dinabandhu Mahabidyalaya",
      courseDuration: "2019 - 2022",
      courseResults: "Cumulative CGPA 9.00",
    },
    {
      id: "education002",
      courseName: "Higher Secondary Science Stream",
      organizationName: "Bangaon Higher Secondary School",
      courseDuration: "2017 - 2019",
      courseResults: "Result Percentage 72%",
    },
  ],
  style: {
    bgColor: "#fff",
    textColor: "#000",
  },
};

const isEmptyObjArr = (arr: Course[]) => {
  return arr.every((value) => {
    if (value.courseName === "" && value.courseResults === "" && value.organizationName === "") {
      return true;
    }
    return false;
  });
};

interface EducationsBlockProps {
  blockTitle: string;
  item: GridItem;
  removeItem: (item: GridItem) => void;
  educations: Educations;
  formStyles: FormStyles;
}

export const EducationsBlock1: React.FC<EducationsBlockProps> = (props) => {
  const blockClasses = useBlockStyles();
  const toBeShownEducations = !isEmptyObjArr(props.educations.data) ? props.educations : dummyEducations;

  return (
    <div
      style={{
        backgroundColor: toBeShownEducations.style.bgColor,
        color: toBeShownEducations.style.textColor,
        height: "100%",
        width: "100%",
      }}
    >
      <div className={blockClasses.blockWrapper}>
        <BlockTitle formStyles={props.formStyles} title={toBeShownEducations.title} />
        <RemoveBlockButton item={props.item} removeItem={props.removeItem} blockTitle={props.blockTitle} />
        <div
          style={{
            fontSize: 14,
            display: "flex",
            flexDirection: "column",
          }}
        >
          {toBeShownEducations.data.map((course: Course) => {
            return (
              <div
                style={{
                  display: "flex",
                  justifyContent: "start",
                  alignItems: "center",
                  margin: "0px 0px 8px 0px",
                  width: "100%",
                }}
                key={course.id}
              >
                <div style={{ marginRight: 12 }}>
                  <SchoolRoundedIcon style={{ color: props.formStyles.accentColor }} />
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "start",
                    flex: 1,
                  }}
                >
                  <div style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "start" }}>
                    <p style={{ fontWeight: 600, color: toBeShownEducations.style.textColor, marginRight: 30 }}>
                      {course.organizationName}
                    </p>
                    <p style={{ color: props.formStyles.accentColor, fontSize: 12, flexShrink: 0, paddingTop: 3 }}>
                      {course.courseDuration}
                    </p>
                  </div>

                  <p style={{ fontWeight: 500, color: toBeShownEducations.style.textColor, margin: 0, fontSize: 13 }}>
                    {course.courseName}
                  </p>
                  <p style={{ fontWeight: 500, color: toBeShownEducations.style.textColor, fontSize: 13 }}>
                    {course.courseResults}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export const EducationsBlock2: React.FC<EducationsBlockProps> = (props) => {
  const blockClasses = useBlockStyles({ formStyles: props.formStyles });
  const toBeShownEducations = !isEmptyObjArr(props.educations.data) ? props.educations : dummyEducations;

  return (
    <div
      style={{
        backgroundColor: toBeShownEducations.style.bgColor,
        color: toBeShownEducations.style.textColor,
        height: "100%",
        width: "100%",
      }}
    >
      <div className={blockClasses.blockWrapper}>
        <BlockTitle formStyles={props.formStyles} title={toBeShownEducations.title} />
        <RemoveBlockButton item={props.item} removeItem={props.removeItem} blockTitle={props.blockTitle} />
        <div
          style={{
            fontSize: 14,
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            margin: "0px 4px",
            width: "100%",
          }}
        >
          {toBeShownEducations.data.map((course: Course) => {
            return (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  margin: 0,
                }}
                key={course.id}
              >
                <SchoolRoundedIcon style={{ color: props.formStyles.accentColor }} />

                <div style={{ fontWeight: 600, marginBottom: 1, textAlign: "center" }}>{course.organizationName}</div>
                <div style={{ fontWeight: 500, margin: 1, textAlign: "center", color: props.formStyles.accentColor }}>
                  {course.courseDuration}
                </div>
                <div style={{ fontWeight: 500, margin: 1, textAlign: "center" }}>{course.courseName}</div>
                <div style={{ fontWeight: 500, margin: 1, textAlign: "center" }}>{course.courseResults}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
