import React, { FC } from "react";

interface SectionHeaderProps {
  supportHeader: string;
  mainHeader: string;
}

const SectionHeader: FC<SectionHeaderProps> = (props) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        margin: 48,
      }}
    >
      <div
        style={{
          color: "#6b5be6",
          fontSize: "0.80rem",
          lineHeight: "1rem",
          letterSpacing: "0.08rem",
          fontWeight: 600,
        }}
      >
        {props.supportHeader}
      </div>
      <div style={{ color: "#000", fontSize: "1.875rem", lineHeight: "2.25rem", fontWeight: 600, marginTop: 4 }}>
        {props.mainHeader}
      </div>
    </div>
  );
};

export default SectionHeader;
