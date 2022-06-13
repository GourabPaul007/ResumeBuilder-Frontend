import React, { Dispatch } from "react";
import { v1 as uuidv1 } from "uuid";
import { RemoveBlockButton } from "../../../Components/CustomPageComponents";
import { GridItem } from "../../../interfaces/GridItem";

interface OthersBlockProps {
  item: GridItem;
  removeItem: (item: GridItem) => void;
  others: string[];
}

export const OthersBlock1: React.FC<OthersBlockProps> = (props) => {
  const toBeShownOthers =
    props.others.length === 0
      ? [
          "Lorem ipsum dolor sit amet consectetur.",
          "Adipisicing Nulla repellat dolorum earum, accusantium exercit ationem.",
          "officiis distinctio ipsa officia soluta.",
        ]
      : props.others;

  return (
    <div style={{ margin: 12, fontFamily: "sans-serif" }}>
      <h2 style={{ fontWeight: 600, color: "#123456", display: "inline-block" }}>Other Skills & Activities</h2>
      <RemoveBlockButton item={props.item} removeItem={props.removeItem} />
      <div style={{ marginTop: 8, paddingLeft: 8, fontSize: 15 }}>
        {toBeShownOthers.map((eachLine: string) => {
          return (
            <div
              key={eachLine + uuidv1}
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "start",
                alignItems: "start",
                marginBottom: 6,
              }}
            >
              <div>&bull;&nbsp;</div>
              <div style={{ fontWeight: 500, color: "#434343" }}>{eachLine}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};