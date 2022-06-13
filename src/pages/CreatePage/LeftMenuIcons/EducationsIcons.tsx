import React from "react";

export const EducationIcon1: React.FC = () => {
  return (
    <svg fill="none" viewBox="0 0 250 150">
      {/* 1st education block */}
      <circle cx={40} cy={54} r={8} fill="#545454" />
      <rect x={60} y={40} width={100} height={5} rx={2.5} fill="#545454" />
      <rect x={60} y={50} width={150} height={5} rx={2.5} fill="#757575" />
      <rect x={60} y={60} width={120} height={5} rx={2.5} fill="#757575" />
      {/* 2nd education block */}
      <circle cx={40} cy={104} r={8} fill="#545454" />
      <rect x={60} y={90} width={100} height={5} rx={2.5} fill="#545454" />
      <rect x={60} y={100} width={150} height={5} rx={2.5} fill="#757575" />
      <rect x={60} y={110} width={120} height={5} rx={2.5} fill="#757575" />
      {/* the size text on bottom */}
      <text x="170" y="145" style={{ fontWeight: "bold", fontSize: 24 }} fill="#545454">
        3 x 4
      </text>
    </svg>
  );
};
