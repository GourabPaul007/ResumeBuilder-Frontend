import React from "react";
import { Course, Educations } from "../../../interfaces/Educations";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import { RemoveBlockButton } from "../../../Components/CustomPageComponents";
import { GridItem } from "../../../interfaces/GridItem";
import { FormStyles } from "../../../interfaces/FormStyles";
import { useBlockStyles } from "./_BlockStyles";

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
};

interface EducationsBlockProps {
  item: GridItem;
  removeItem: (item: GridItem) => void;
  educations: Educations;
  formStyles: FormStyles;
}

export const EducationsBlock1: React.FC<EducationsBlockProps> = (props) => {
  const blockClasses = useBlockStyles(props.formStyles);

  const isEmptyObjArr = (arr: Course[]) => {
    return arr.every((value) => {
      if (value.courseName === "" && value.courseResults === "" && value.organizationName === "") {
        return true;
      }
      return false;
    });
  };

  const toBeShownEducations = !isEmptyObjArr(props.educations.data) ? props.educations : dummyEducations;

  return (
    <div
      style={{
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 16,
        paddingBottom: 16,
        fontFamily: "sans-serif",
        overflow: "hidden",
      }}
    >
      <div className={blockClasses.blockTitleDiv}>
        <h2 className={blockClasses.blockTitleH2}>{props.educations.title}</h2>
      </div>
      {/* <hr
        style={{ border: `1px solid ${props.formStyles.titleUnderline ? props.formStyles.titleColor : "transparent"}` }}
      /> */}
      <RemoveBlockButton item={props.item} removeItem={props.removeItem} />
      <div
        style={{
          fontSize: 15,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
        }}
      >
        {toBeShownEducations.data.map((course: Course) => {
          return (
            <div
              style={{
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
                marginBottom: 0,
                marginTop: 4,
                width: "100%",
              }}
              key={course.id}
            >
              <div style={{ marginRight: 12 }}>
                <SchoolRoundedIcon style={{ color: "#434343" || props.formStyles.accentColor }} />
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
                  <p style={{ fontWeight: 600, color: "#434343", marginRight: 8 }}>{course.organizationName}</p>
                  <p style={{ color: props.formStyles.accentColor, fontSize: 12, flexShrink: 0, paddingTop: 3 }}>
                    {course.courseDuration}
                  </p>
                </div>

                <p style={{ fontWeight: 500, color: "#434343" }}>
                  {course.courseName} {course.courseResults}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
