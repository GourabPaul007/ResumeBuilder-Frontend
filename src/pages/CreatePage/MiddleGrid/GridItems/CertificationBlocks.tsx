import React, { useEffect, useState } from "react";
import { Certificate, Certifications } from "../../../../interfaces/Certification";
import WorkspacePremiumRoundedIcon from "@mui/icons-material/WorkspacePremiumRounded";
import LaunchRoundedIcon from "@mui/icons-material/LaunchRounded";
import { RemoveBlockButton } from "../../../../Components/CustomPageComponents";
import { GridItem } from "../../../../interfaces/GridItem";
import { FormStyles } from "../../../../interfaces/FormStyles";
import { useBlockStyles } from "./_BlockStyles";
import { BlockTitle } from "./_BlockTitle";

const dummyCertifications: Certifications = {
  title: "Certification Title",
  data: [
    {
      id: "certification001",
      certificateName: "Web Developement Certificate",
      organizationName: "Udemy",
      certificateDate: "April 14, 2023",
      certificateLink: "https://example.com",
    },
    {
      id: "certification002",
      certificateName: "Machine Learning Certificate",
      organizationName: "Udemy",
      certificateDate: "December 31, 2022",
      certificateLink: "https://example.com",
    },
  ],
  style: {
    bgColor: "#ffffff",
    textColor: "#000000",
  },
};

const isEmptyCertifications = (certifications: Certifications) => {
  return certifications.data.every((value) => {
    if (
      certifications.title === "" &&
      value.certificateName === "" &&
      value.certificateDate === "" &&
      value.organizationName === ""
    ) {
      return true;
    }
    return false;
  });
};

interface CertificationsBlockProps {
  blockTitle: string;
  item: GridItem;
  removeItem: (item: GridItem) => void;
  certifications: Certifications;
  formStyles: FormStyles;
}

export const CertificationsBlock1: React.FC<CertificationsBlockProps> = (props) => {
  const blockClasses = useBlockStyles();

  // Check For Empty Certifications
  const [isEmpty, setIsEmpty] = useState(false);
  useEffect(() => {
    setIsEmpty(isEmptyCertifications(props.certifications));
  }, [props.certifications]);

  const toBeShownCertifications = isEmpty ? dummyCertifications : props.certifications;

  return (
    <div
      style={{
        backgroundColor: toBeShownCertifications.style.bgColor,
        color: toBeShownCertifications.style.textColor,
        height: "100%",
        width: "100%",
      }}
    >
      <div className={blockClasses.blockWrapper} style={{ fontFamily: props.formStyles.fontFamily }}>
        <BlockTitle formStyles={props.formStyles} title={toBeShownCertifications.title} isOpaque={isEmpty} />
        <RemoveBlockButton item={props.item} removeItem={props.removeItem} blockTitle={props.blockTitle} />
        <div
          style={{
            fontSize: 14,
            display: "flex",
            flexDirection: "column",
            opacity: isEmpty ? 0.5 : 1,
          }}
        >
          {toBeShownCertifications.data.map((certificate: Certificate) => {
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
                  <WorkspacePremiumRoundedIcon style={{ color: props.formStyles.accentColor }} fontSize="medium" />
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
                          color: toBeShownCertifications.style.textColor,
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

                  <p style={{ fontWeight: 500, color: toBeShownCertifications.style.textColor, margin: 0 }}>
                    {certificate.organizationName}
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

export const CertificationsBlock2: React.FC<CertificationsBlockProps> = (props) => {
  const blockClasses = useBlockStyles({ formStyles: props.formStyles });

  // Check For Empty Certifications
  const [isEmpty, setIsEmpty] = useState(false);
  useEffect(() => {
    setIsEmpty(isEmptyCertifications(props.certifications));
  }, [props.certifications]);

  const toBeShownCertifications = isEmpty ? dummyCertifications : props.certifications;

  return (
    <div
      style={{
        backgroundColor: toBeShownCertifications.style.bgColor,
        color: toBeShownCertifications.style.textColor,
        height: "100%",
        width: "100%",
      }}
    >
      <div className={blockClasses.blockWrapper} style={{ fontFamily: props.formStyles.fontFamily }}>
        <BlockTitle formStyles={props.formStyles} title={toBeShownCertifications.title} isOpaque={isEmpty} />
        <RemoveBlockButton item={props.item} removeItem={props.removeItem} blockTitle={props.blockTitle} />
        <div
          style={{
            fontSize: 14,
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            margin: "0px 4px",
            width: "100%",
            opacity: isEmpty ? 0.5 : 1,
          }}
        >
          {toBeShownCertifications.data.map((certificate: Certificate) => {
            return (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  margin: 0,
                }}
                key={certificate.id}
              >
                <WorkspacePremiumRoundedIcon style={{ color: props.formStyles.accentColor }} fontSize="large" />

                <div style={{ fontWeight: 600, marginBottom: 1, textAlign: "center" }}>
                  {certificate.certificateName}
                  <a href={certificate.certificateLink}>
                    <LaunchRoundedIcon />
                  </a>
                </div>
                <div style={{ fontWeight: 500, margin: 1, textAlign: "center", color: props.formStyles.accentColor }}>
                  {certificate.certificateDate}
                </div>
                <div style={{ fontWeight: 500, margin: 1, textAlign: "center" }}>{certificate.organizationName}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
