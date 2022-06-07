import React from "react";
// var(--solid)
// var(--solid-900)
// var(--main-500)
export const AboutBlueprint1: React.FC = () => {
  return (
    <svg fill="none" viewBox="0 0 600 150">
      {/* <path fill="none" d="M0 0h266v150H0z" /> */}
      {/* the name */}
      <rect x={15} y={15} width={120} height={10} rx={2.5} fill="#434343" />
      {/* the title */}
      <rect x={140} y={18} width={80} height={7} rx={2.5} fill="#434343" />
      {/* body rows */}
      <rect x={15} y={35} width={400} height={5} rx={2.5} fill="#545454" />
      <rect x={15} y={45} width={400} height={5} rx={2.5} fill="#545454" />
      <rect x={15} y={55} width={300} height={5} rx={2.5} fill="#545454" />
      {/* contact info */}
      <rect x={480} y={35} width={100} height={6} rx={2} fill="#3f51b5" />
      <rect x={480} y={45} width={100} height={6} rx={2} fill="#3f51b5" />
      <rect x={480} y={55} width={100} height={6} rx={2} fill="#3f51b5" />
    </svg>
  );
};

export const AboutBlueprint2: React.FC = () => {
  return (
    <svg fill="none" viewBox="0 0 266 150">
      <path fill="none" d="M0 0h266v150H0z" />
      <rect x={20} y={68} width={26} height={5} rx={2.5} fill="red" />
      <rect x={20} y={77} width={92} height={5} rx={2.5} fill="black" />
      <rect x={206} y={70} width={40} height={10} rx={2} fill="purple" />
      <rect x={160} y={70} width={40} height={10} rx={2} fill="purple" />
    </svg>
  );
};
