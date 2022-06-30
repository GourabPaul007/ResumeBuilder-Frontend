import React from "react";

export const OthersIcon1: React.FC = () => {
  return (
    <svg fill="none" viewBox="0 0 250 150">
      {/* 1st others line */}
      <circle cx={40} cy={52} r={5} fill="#545454" />
      <rect x={55} y={50} width={140} height={5} rx={2.5} fill="#545454" />
      {/* 2nd others line */}
      <circle cx={40} cy={72} r={5} fill="#545454" />
      <rect x={55} y={70} width={140} height={5} rx={2.5} fill="#545454" />
      {/* 3rd others line */}
      <circle cx={40} cy={92} r={5} fill="#545454" />
      <rect x={55} y={90} width={140} height={5} rx={2.5} fill="#545454" />

      {/* the size text on bottom */}
      {/* <text x="170" y="145" style={{ fontWeight: "bold", fontSize: 24 }} fill="#545454">
        3 x 4
      </text> */}
    </svg>
  );
};
