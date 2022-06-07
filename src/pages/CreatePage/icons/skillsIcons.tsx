import React from "react";

export const SkillsIcon1: React.FC = () => {
  return (
    <svg fill="none" viewBox="0 0 250 150">
      {/* first row */}
      <rect x={30} y={40} width={90} height={15} rx={4} fill="#123456" />
      <rect x={130} y={40} width={60} height={15} rx={4} fill="#123456" />
      {/* 2nd row */}
      <rect x={30} y={60} width={50} height={15} rx={4} fill="#123456" />
      <rect x={90} y={60} width={40} height={15} rx={4} fill="#123456" />
      <rect x={140} y={60} width={50} height={15} rx={4} fill="#123456" />
      {/* 3rd row */}
      <rect x={30} y={80} width={60} height={15} rx={4} fill="#123456" />
      <rect x={100} y={80} width={40} height={15} rx={4} fill="#123456" />
      <rect x={150} y={80} width={50} height={15} rx={4} fill="#123456" />
      {/* 4th row */}
      <rect x={30} y={100} width={70} height={15} rx={4} fill="#123456" />
      <rect x={110} y={100} width={50} height={15} rx={4} fill="#123456" />
    </svg>
  );
};
