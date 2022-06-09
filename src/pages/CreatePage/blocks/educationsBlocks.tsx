import React from "react";
import { Course } from "../../../interfaces/Course";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import { RemoveBlockButton } from "../../../Components/CustomPageComponents";
import { GridItem } from "../../../interfaces/GridItem";

const educations: Course[] = [
  {
    id: "education001",
    courseName: "Bachelor of Science in Computer Science",
    organizationName: "Dinabandhu Mahabidyalaya",
    courseResults: "Cumulative CGPA 9.00",
  },
  {
    id: "education002",
    courseName: "Higher Secondary Science Stream",
    organizationName: "Bangaon Higher Secondary School",
    courseResults: "Result Percentage 72%",
  },
];

interface EducationsBlockProps {
  item: GridItem;
  removeItem: (item: GridItem) => void;
}

export const EducationsBlock1: React.FC<EducationsBlockProps> = (props) => {
  return (
    <div style={{ margin: 12, fontFamily: "sans-serif", overflow: "hidden" }}>
      <h2 style={{ fontWeight: 600, marginBottom: 4, color: "#123456", display: "inline-block" }}>Education</h2>
      <RemoveBlockButton item={props.item} removeItem={props.removeItem} />
      <div
        style={{
          fontSize: 14,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
        }}
      >
        {educations.map((course) => {
          return (
            <div
              style={{ display: "flex", alignItems: "center", justifyContent: "start", marginBottom: 0, marginTop: 4 }}
              key={course.id}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginRight: 12,
                }}
              >
                <SchoolRoundedIcon style={{ color: "#434343" }} />
              </div>
              <div
                style={{ display: "flex", flexDirection: "column", alignItems: "start", justifyContent: "center" }}
                className="ms-3"
              >
                <p style={{ fontWeight: 600, color: "#434343" }}>{course.organizationName}</p>
                <p style={{ fontWeight: 500, color: "#434343" }}>
                  {course.courseName}, {course.courseResults}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
