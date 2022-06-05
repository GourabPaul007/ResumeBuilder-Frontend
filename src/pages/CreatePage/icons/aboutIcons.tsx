import React from "react";
// var(--solid)
// var(--solid-900)
// var(--main-500)
export const AboutIcon1: React.FC = () => {
  return (
    <svg fill="none" viewBox="0 0 266 150">
      {/* <path fill="none" d="M0 0h266v150H0z" /> */}
      <rect x={20} y={50} width={60} height={10} rx={2.5} fill="#434343" />
      <rect x={20} y={70} width={150} height={5} rx={2.5} fill="#545454" />
      <rect x={20} y={80} width={150} height={5} rx={2.5} fill="#545454" />
      <rect x={20} y={90} width={90} height={5} rx={2.5} fill="#545454" />
      <rect x={190} y={70} width={50} height={5} rx={2} fill="#3f51b5" />
      <rect x={190} y={80} width={50} height={5} rx={2} fill="#3f51b5" />
      <rect x={190} y={90} width={50} height={5} rx={2} fill="#3f51b5" />
    </svg>
  );
};

export const AboutIcon2: React.FC = () => {
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
