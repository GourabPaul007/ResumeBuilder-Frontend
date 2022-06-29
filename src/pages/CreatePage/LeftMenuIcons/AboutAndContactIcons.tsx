import React from "react";
// var(--solid)
// var(--solid-900)
// var(--main-500)
export const AboutAndContactIcon1: React.FC = () => {
  return (
    <svg fill="none" viewBox="0 0 250 150">
      {/* <path fill="none" d="M0 0h266v150H0z" /> */}
      <rect x={20} y={50} width={60} height={10} rx={2.5} fill="#434343" />
      <rect x={20} y={70} width={150} height={5} rx={2.5} fill="#545454" />
      <rect x={20} y={80} width={150} height={5} rx={2.5} fill="#545454" />
      <rect x={20} y={90} width={90} height={5} rx={2.5} fill="#545454" />
      <rect x={180} y={70} width={50} height={5} rx={2} fill="#3f51b5" />
      <rect x={180} y={80} width={50} height={5} rx={2} fill="#3f51b5" />
      <rect x={180} y={90} width={50} height={5} rx={2} fill="#3f51b5" />
      {/* the size text on bottom */}
      <text x="160" y="145" style={{ fontWeight: "bold", fontSize: 24 }} fill="#545454">
        3 x 10
      </text>
    </svg>
  );
};

export const AboutAndContactIcon2: React.FC = () => {
  return (
    <svg fill="none" viewBox="0 0 250 150">
      {/* the name & title */}
      <rect x={20} y={40} width={60} height={10} rx={2.5} fill="#434343" />
      {/* the about */}
      <rect x={20} y={60} width={200} height={5} rx={2.5} fill="#434343" />
      <rect x={20} y={70} width={200} height={5} rx={2.5} fill="#434343" />
      <rect x={20} y={80} width={90} height={5} rx={2.5} fill="#434343" />
      {/* the contact */}
      <rect x={20} y={100} width={80} height={5} rx={2} fill="#F44336" />
      <rect x={140} y={100} width={60} height={5} rx={2} fill="#F44336" />
      <rect x={20} y={110} width={60} height={5} rx={2} fill="#F44336" />
      <rect x={140} y={110} width={80} height={5} rx={2} fill="#F44336" />
    </svg>
  );
};
