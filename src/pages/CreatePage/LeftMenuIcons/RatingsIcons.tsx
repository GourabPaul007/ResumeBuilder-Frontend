import React from "react";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import StarOutlineRoundedIcon from "@mui/icons-material/StarOutlineRounded";

export const RatingsIcon1: React.FC = () => {
  const fillStarStyles = {
    fontSize: 13,
    color: "#651fff",
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
          <rect x={0} y={2} width={40} height={8} rx={2} fill="#656565" />
        </svg>
        <StarRoundedIcon style={fillStarStyles} />
        <StarRoundedIcon style={fillStarStyles} />
        <StarRoundedIcon style={fillStarStyles} />
        <StarRoundedIcon style={fillStarStyles} />
        <StarRoundedIcon style={fillStarStyles} />
      </div>
      <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
        <svg fill="none" viewBox="0 0 50 10">
          <rect x={0} y={2} width={40} height={8} rx={2} fill="#656565" />
        </svg>
        <StarRoundedIcon style={fillStarStyles} />
        <StarRoundedIcon style={fillStarStyles} />
        <StarRoundedIcon style={fillStarStyles} />
        <StarOutlineRoundedIcon style={fillStarStyles} />
        <StarOutlineRoundedIcon style={fillStarStyles} />
      </div>
      <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
        <svg fill="none" viewBox="0 0 50 10">
          <rect x={0} y={2} width={40} height={8} rx={2} fill="#656565" />
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

export const RatingsIcon2: React.FC = () => {
  const fillStarStyles = {
    fontSize: 13,
    marginRight: 3,
    color: "#f50057",
  };
  return (
    // <div
    //   style={{
    //     height: "100%",
    //     padding: "8px 24px",
    //     display: "flex",
    //     flexDirection: "column",
    //     justifyContent: "space-evenly",
    //   }}
    // >
    <div
      style={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "center",
        paddingTop: 4,
      }}
    >
      <div>
        <div style={{ height: 5, width: 50, backgroundColor: "#656565", marginBottom: 2, borderRadius: 2 }}>&nbsp;</div>
        <div style={{ display: "flex" }}>
          <StarRoundedIcon style={fillStarStyles} />
          <StarRoundedIcon style={fillStarStyles} />
          <StarRoundedIcon style={fillStarStyles} />
          <StarRoundedIcon style={fillStarStyles} />
          <StarRoundedIcon style={fillStarStyles} />
        </div>
      </div>

      <div>
        <div style={{ height: 5, width: 50, backgroundColor: "#656565", marginBottom: 2, borderRadius: 2 }}>&nbsp;</div>
        <div style={{ display: "flex" }}>
          <StarRoundedIcon style={fillStarStyles} />
          <StarRoundedIcon style={fillStarStyles} />
          <StarRoundedIcon style={fillStarStyles} />
          <StarRoundedIcon style={fillStarStyles} />
          <StarRoundedIcon style={fillStarStyles} />
        </div>
      </div>
    </div>
  );
};
