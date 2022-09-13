import React from "react";
import { Course, Educations } from "../../../interfaces/Educations";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import { GridItem } from "../../../interfaces/GridItem";
import { FormStyles } from "../../../interfaces/FormStyles";
import { useBlueprintStyles } from "./_BlueprintStyles";
import { BlueprintTitle } from "./_BlueprintTitle";

interface EducationsBlueprintProps {
  educations: {
    name: string;
    x: number;
    y: number;
    w: number;
    h: number;
    data: Educations;
  };
  formStyles: FormStyles;
}

export const EducationsBlueprint1: React.FC<EducationsBlueprintProps> = (props) => {
  const blueprintClasses = useBlueprintStyles({
    h: props.educations.h,
    x: props.educations.x,
    y: props.educations.y,
    w: props.educations.w,
    bgColor: props.educations.data.style.bgColor,
    textColor: props.educations.data.style.textColor,
  });

  return (
    <div className={blueprintClasses.blueprintWrapper}>
      <BlueprintTitle formStyles={props.formStyles} title={props.educations.data.title} />
      <div
        style={{
          fontSize: 14,
          display: "flex",
          flexDirection: "column",
        }}
      >
        {props.educations.data.data.map((course: Course) => {
          return (
            <div
              style={{
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
                margin: "8px 0px 4px 0px",
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
                  <p style={{ fontWeight: 600, color: props.educations.data.style.textColor, marginRight: 30 }}>
                    {course.organizationName}
                  </p>
                  <p style={{ color: props.formStyles.accentColor, fontSize: 12, flexShrink: 0, paddingTop: 2 }}>
                    {course.courseDuration}
                  </p>
                </div>

                <p style={{ fontWeight: 500, color: props.educations.data.style.textColor, margin: 0 }}>
                  {course.courseName}
                </p>
                <p style={{ fontWeight: 500, color: props.educations.data.style.textColor }}>{course.courseResults}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const EducationsBlueprint2: React.FC<EducationsBlueprintProps> = (props) => {
  const blueprintClasses = useBlueprintStyles({
    h: props.educations.h,
    x: props.educations.x,
    y: props.educations.y,
    w: props.educations.w,
    bgColor: props.educations.data.style.bgColor,
    textColor: props.educations.data.style.textColor,
  });

  return (
    <div className={blueprintClasses.blueprintWrapper}>
      <BlueprintTitle formStyles={props.formStyles} title={props.educations.data.title} />
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
        {props.educations.data.data.map((course: Course) => {
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
  );
};
