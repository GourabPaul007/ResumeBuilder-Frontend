import React from "react";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import StarOutlineRoundedIcon from "@mui/icons-material/StarOutlineRounded";

export const RatingsIcon1: React.FC = () => {
  const fillStarStyles = {
    fontSize: 13,
    color: "#ffd600",
  };
  return (
    <div
      style={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "center",
        padding: "12px 16px",
      }}
    >
      <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
        <svg fill="none" viewBox="0 0 50 10">
          <rect x={0} y={0} width={45} height={10} rx={2} fill="#656565" />
        </svg>
        <StarRoundedIcon style={fillStarStyles} />
        <StarRoundedIcon style={fillStarStyles} />
        <StarRoundedIcon style={fillStarStyles} />
        <StarRoundedIcon style={fillStarStyles} />
        <StarRoundedIcon style={fillStarStyles} />
      </div>
      <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
        <svg fill="none" viewBox="0 0 50 10">
          <rect x={0} y={0} width={45} height={10} rx={2} fill="#656565" />
        </svg>
        <StarRoundedIcon style={fillStarStyles} />
        <StarRoundedIcon style={fillStarStyles} />
        <StarRoundedIcon style={fillStarStyles} />
        <StarOutlineRoundedIcon style={fillStarStyles} />
        <StarOutlineRoundedIcon style={fillStarStyles} />
      </div>
      <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
        <svg fill="none" viewBox="0 0 50 10">
          <rect x={0} y={0} width={45} height={10} rx={2} fill="#656565" />
        </svg>
        <StarRoundedIcon style={fillStarStyles} />
        <StarRoundedIcon style={fillStarStyles} />
        <StarRoundedIcon style={fillStarStyles} />
        <StarRoundedIcon style={fillStarStyles} />
        <StarOutlineRoundedIcon style={fillStarStyles} />
      </div>
    </div>
  );
};
