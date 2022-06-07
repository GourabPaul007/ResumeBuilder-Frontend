import React from "react";

export const SkillsBlueprint1: React.FC = () => {
  return (
    <svg fill="none" viewBox="0 0 250 150">
      {/* header */}
      <text x={15} y={15} style={{ fontFamily: "sans-serif" }} fill="#123456">
        Skills
      </text>
      {/* <rect x={25} y={20} width={90} height={20} rx={4} fill="#123456" /> */}
      {/* first row */}
      <rect x={40} y={50} width={90} height={15} rx={4} fill="#123456" />
      <rect x={140} y={50} width={60} height={15} rx={4} fill="#123456" />
      {/* 2nd row */}
      <rect x={40} y={70} width={50} height={15} rx={4} fill="#123456" />
      <rect x={100} y={70} width={40} height={15} rx={4} fill="#123456" />
      <rect x={150} y={70} width={50} height={15} rx={4} fill="#123456" />
      {/* 3rd row */}
      <rect x={40} y={90} width={60} height={15} rx={4} fill="#123456" />
      <rect x={110} y={90} width={40} height={15} rx={4} fill="#123456" />
      <rect x={160} y={90} width={50} height={15} rx={4} fill="#123456" />
      {/* 4th row */}
      <rect x={40} y={110} width={70} height={15} rx={4} fill="#123456" />
      <rect x={120} y={110} width={50} height={15} rx={4} fill="#123456" />
    </svg>
  );
};
