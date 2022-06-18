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
      {/* the size text on bottom */}
      <text x="170" y="145" style={{ fontWeight: "bold", fontSize: 24 }} fill="#545454">
        3 x 4
      </text>
    </svg>
  );
};

export const SkillsIcon2: React.FC = () => {
  return (
    <svg fill="none" viewBox="0 0 250 150">
      {/* first row */}
      <rect x={30} y={36} width={90} height={16} stroke="#123456" strokeWidth={2} />
      <rect x={130} y={36} width={60} height={16} stroke="#123456" strokeWidth={2} />
      {/* 2nd row */}
      <rect x={30} y={60} width={50} height={16} stroke="#123456" strokeWidth={2} />
      <rect x={90} y={60} width={40} height={16} stroke="#123456" strokeWidth={2} />
      <rect x={140} y={60} width={50} height={16} stroke="#123456" strokeWidth={2} />
      {/* 3rd row */}
      <rect x={30} y={84} width={60} height={16} stroke="#123456" strokeWidth={2} />
      <rect x={100} y={84} width={40} height={16} stroke="#123456" strokeWidth={2} />
      <rect x={150} y={84} width={50} height={16} stroke="#123456" strokeWidth={2} />
      {/* 4th row */}
      <rect x={30} y={108} width={70} height={16} stroke="#123456" strokeWidth={2} />
      <rect x={110} y={108} width={50} height={16} stroke="#123456" strokeWidth={2} />
      {/* the size text on bottom */}
      <text x="170" y="145" style={{ fontWeight: "bold", fontSize: 24 }} fill="#545454">
        3 x 4
      </text>
    </svg>
  );
};
