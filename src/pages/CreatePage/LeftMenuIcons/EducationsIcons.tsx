import React from "react";

export const EducationIcon1: React.FC = () => {
  return (
    <svg fill="none" viewBox="0 0 250 150">
      {/* 1st education block */}
      <circle cx={40} cy={54} r={8} fill="#545454" />
      <rect x={60} y={40} width={100} height={5} rx={2} fill="#545454" />
      <rect x={180} y={40} width={30} height={5} rx={2} fill="#ff3d00" />
      <rect x={60} y={50} width={150} height={5} rx={2} fill="#757575" />
      <rect x={60} y={60} width={120} height={5} rx={2} fill="#757575" />
      {/* 2nd education block */}
      <circle cx={40} cy={104} r={8} fill="#545454" />
      <rect x={60} y={90} width={100} height={5} rx={2} fill="#545454" />
      <rect x={180} y={90} width={30} height={5} rx={2} fill="#ff3d00" />
      <rect x={60} y={100} width={150} height={5} rx={2} fill="#757575" />
      <rect x={60} y={110} width={120} height={5} rx={2} fill="#757575" />
      {/* the size text on bottom */}
      {/* <text x="170" y="145" style={{ fontWeight: "bold", fontSize: 24 }} fill="#545454">
        3 x 4
      </text> */}
    </svg>
  );
};

export const EducationIcon2: React.FC = () => {
  return (
    <svg fill="none" viewBox="0 0 250 150">
      {/* 1st education block */}
      <rect x={45} y={52} width={50} height={8} rx={2} fill="#6366f1" />
      <rect x={27} y={65} width={85} height={8} rx={2} fill="#888888" />
      <rect x={35} y={78} width={70} height={8} rx={2} fill="#888888" />
      {/* 2nd education block */}
      <rect x={150} y={52} width={50} height={8} rx={2} fill="#6366f1" />
      <rect x={132} y={65} width={86} height={8} rx={2} fill="#888888" />
      <rect x={140} y={78} width={70} height={8} rx={2} fill="#888888" />
      {/* the size text on bottom */}
      {/* <text x="170" y="145" style={{ fontWeight: "bold", fontSize: 24 }} fill="#545454">
        3 x 4
      </text> */}
    </svg>
  );
};
