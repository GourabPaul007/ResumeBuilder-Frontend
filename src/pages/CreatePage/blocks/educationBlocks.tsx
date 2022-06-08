import React from "react";
import { Course } from "../../../interfaces/Course";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";

export const EducationBlock1: React.FC = () => {
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
      courseResults: "72%",
    },
  ];

  return (
    <div style={{ margin: 8, fontFamily: "sans-serif", overflow: "hidden" }}>
      <h1 style={{ fontWeight: 600, marginBottom: 8, color: "#123456" }}>Education</h1>
      {educations.map((course) => {
        return (
          <div
            style={{ display: "flex", alignItems: "center", justifyContent: "start", marginBottom: 0, marginTop: 10 }}
            key={course.id}
          >
            <div
              style={{
                color: "#757575",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginRight: 12,
              }}
            >
              <SchoolRoundedIcon />
            </div>
            <div
              style={{ display: "flex", flexDirection: "column", alignItems: "start", justifyContent: "center" }}
              className="ms-3"
            >
              <p style={{ fontSize: 12, fontWeight: 600, color: "#757575", marginBottom: 0 }}>
                {course.organizationName}
              </p>
              <p style={{ fontSize: 12, fontWeight: 500, color: "#757575", marginBottom: 0 }}>
                {course.courseName}, {course.courseResults}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
