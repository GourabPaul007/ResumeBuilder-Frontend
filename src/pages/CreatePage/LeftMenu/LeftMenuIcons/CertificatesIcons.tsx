import React from "react";

export const CertificateIcon1: React.FC = () => {
  return (
    <svg fill="none" viewBox="0 0 250 150">
      {/* 1st Certificate block */}
      {/* <circle cx={40} cy={54} r={8} fill="#545454" /> */}
      <rect x={35} y={50} width={16} height={16} fill="#f50057" transform="rotate(45 50 50)" />
      <rect x={60} y={40} width={100} height={8} rx={2} fill="#545454" />
      <rect x={180} y={40} width={30} height={8} rx={2} fill="#f50057" />
      <rect x={60} y={55} width={150} height={8} rx={2} fill="#757575" />
      {/* 2nd Certificate block */}
      <rect x={70} y={85} width={16} height={16} fill="#f50057" transform="rotate(45 50 50)" />
      <rect x={60} y={90} width={100} height={8} rx={2} fill="#545454" />
      <rect x={180} y={90} width={30} height={8} rx={2} fill="#f50057" />
      <rect x={60} y={105} width={150} height={8} rx={2} fill="#757575" />
      {/* the size text on bottom */}
      {/* <text x="170" y="145" style={{ fontWeight: "bold", fontSize: 24 }} fill="#545454">
        3 x 4
      </text> */}
    </svg>
  );
};

export const CertificateIcon2: React.FC = () => {
  return (
    <svg fill="none" viewBox="0 0 250 150">
      {/* 1st Certificate block */}
      <rect x={45} y={52} width={50} height={8} rx={2} fill="#6366f1" />
      <rect x={27} y={65} width={85} height={8} rx={2} fill="#888888" />
      <rect x={35} y={78} width={70} height={8} rx={2} fill="#888888" />
      {/* 2nd Certificate block */}
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
