import React from "react";

export const OthersIcon1: React.FC = () => {
  return (
    <svg fill="none" viewBox="0 0 250 150">
      {/* 1st others line */}
      <circle cx={40} cy={43} r={4} fill="#545454" />
      <rect x={50} y={40} width={140} height={5} rx={2.5} fill="#545454" />
      <rect x={50} y={50} width={100} height={5} rx={2.5} fill="#545454" />
      {/* 2nd others line */}
      <circle cx={40} cy={73} r={4} fill="#545454" />
      <rect x={50} y={70} width={140} height={5} rx={2.5} fill="#545454" />
      <rect x={50} y={80} width={100} height={5} rx={2.5} fill="#545454" />
      {/* 3rd others line */}
      <circle cx={40} cy={103} r={4} fill="#545454" />
      <rect x={50} y={100} width={140} height={5} rx={2.5} fill="#545454" />
      <rect x={50} y={110} width={100} height={5} rx={2.5} fill="#545454" />

      {/* the size text on bottom */}
      <text x="170" y="145" style={{ fontWeight: "bold", fontSize: 24 }} fill="#545454">
        3 x 4
      </text>
    </svg>
  );
};
