import React from "react";
// var(--solid)
// var(--solid-900)
// var(--main-500)
export const AboutBlueprint1: React.FC = () => {
  return (
    <svg fill="none" viewBox="0 0 600 150">
      {/* <path fill="none" d="M0 0h266v150H0z" /> */}
      {/* the name */}
      <rect x={20} y={20} width={120} height={15} rx={2.5} fill="#434343" />
      {/* the title */}
      <rect x={145} y={25} width={80} height={10} rx={2.5} fill="#434343" />
      {/* body rows */}
      <rect x={20} y={50} width={400} height={10} rx={2.5} fill="#545454" />
      <rect x={20} y={70} width={400} height={10} rx={2.5} fill="#545454" />
      <rect x={20} y={90} width={300} height={10} rx={2.5} fill="#545454" />
      {/* contact info */}
      <rect x={450} y={50} width={100} height={10} rx={2} fill="#3f51b5" />
      <rect x={450} y={70} width={100} height={10} rx={2} fill="#3f51b5" />
      <rect x={450} y={90} width={100} height={10} rx={2} fill="#3f51b5" />
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
