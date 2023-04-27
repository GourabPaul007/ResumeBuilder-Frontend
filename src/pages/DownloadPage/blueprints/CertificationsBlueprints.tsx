import React from "react";
import { Certificate, Certifications } from "../../../interfaces/Certification";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import { GridItem } from "../../../interfaces/GridItem";
import LaunchRoundedIcon from "@mui/icons-material/LaunchRounded";
import { FormStyles } from "../../../interfaces/FormStyles";
import { useBlueprintStyles } from "./_BlueprintStyles";
import { BlueprintTitle } from "./_BlueprintTitle";

interface CertificationsBlueprintProps {
  certifications: {
    name: string;
    x: number;
    y: number;
    w: number;
    h: number;
    data: Certifications;
  };
  formStyles: FormStyles;
}

export const CertificationsBlueprint1: React.FC<CertificationsBlueprintProps> = (props) => {
  const blueprintClasses = useBlueprintStyles({
    h: props.certifications.h,
    x: props.certifications.x,
    y: props.certifications.y,
    w: props.certifications.w,
    bgColor: props.certifications.data.style.bgColor,
    textColor: props.certifications.data.style.textColor,
  });

  return (
    <div className={blueprintClasses.blueprintWrapper} style={{ fontFamily: props.formStyles.fontFamily }}>
      <BlueprintTitle formStyles={props.formStyles} title={props.certifications.data.title} />
      <div
        style={{
          fontSize: 14,
          display: "flex",
          flexDirection: "column",
        }}
      >
        {props.certifications.data.data.map((certificate: Certificate) => {
          return (
            <div
              style={{
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
                margin: "8px 0px 4px 0px",
                width: "100%",
              }}
              key={certificate.id}
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
                  <div
                    style={{
                      marginRight: 20,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <h4
                      style={{
                        fontWeight: 600,
                        color: props.certifications.data.style.textColor,
                      }}
                    >
                      {certificate.certificateName}&nbsp;
                    </h4>
                    <a
                      href={certificate.certificateLink}
                      target="_blank"
                      style={{
                        fontSize: "12px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <LaunchRoundedIcon fontSize="small" />
                    </a>
                  </div>
                  <p style={{ color: props.formStyles.accentColor, fontSize: 12, flexShrink: 0, paddingTop: 2 }}>
                    {certificate.certificateDate}
                  </p>
                </div>

                <p style={{ fontWeight: 500, color: props.certifications.data.style.textColor, margin: 0 }}>
                  {certificate.organizationName}
                </p>
                {/* <div style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "start" }}>
                  <p style={{ fontWeight: 600, color: props.certifications.data.style.textColor, marginRight: 30 }}>
                    {certificate.organizationName}
                  </p>
                  <p style={{ color: props.formStyles.accentColor, fontSize: 12, flexShrink: 0, paddingTop: 2 }}>
                    {certificate.certificateDate}
                  </p>
                </div>

                <p style={{ fontWeight: 500, color: props.certifications.data.style.textColor, margin: 0 }}>
                  {certificate.certificateName}
                </p>
                <p style={{ fontWeight: 500, color: props.certifications.data.style.textColor }}>
                  {certificate.certificateLink}
                </p> */}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

// export const EducationsBlueprint2: React.FC<EducationsBlueprintProps> = (props) => {
//   const blueprintClasses = useBlueprintStyles({
//     h: props.educations.h,
//     x: props.educations.x,
//     y: props.educations.y,
//     w: props.educations.w,
//     bgColor: props.educations.data.style.bgColor,
//     textColor: props.educations.data.style.textColor,
//   });

//   return (
//     <div className={blueprintClasses.blueprintWrapper} style={{ fontFamily: props.formStyles.fontFamily }}>
//       <BlueprintTitle formStyles={props.formStyles} title={props.educations.data.title} />
//       <div
//         style={{
//           fontSize: 14,
//           display: "flex",
//           justifyContent: "space-evenly",
//           alignItems: "center",
//           margin: "0px 4px",
//           width: "100%",
//         }}
//       >
//         {props.educations.data.data.map((course: Course) => {
//           return (
//             <div
//               style={{
//                 display: "flex",
//                 flexDirection: "column",
//                 justifyContent: "center",
//                 alignItems: "center",
//                 margin: 0,
//               }}
//               key={course.id}
//             >
//               <SchoolRoundedIcon style={{ color: props.formStyles.accentColor }} />

//               <div style={{ fontWeight: 600, marginBottom: 1, textAlign: "center" }}>{course.organizationName}</div>
//               <div style={{ fontWeight: 500, margin: 1, textAlign: "center", color: props.formStyles.accentColor }}>
//                 {course.courseDuration}
//               </div>
//               <div style={{ fontWeight: 500, margin: 1, textAlign: "center" }}>{course.courseName}</div>
//               <div style={{ fontWeight: 500, margin: 1, textAlign: "center" }}>{course.courseResults}</div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };
