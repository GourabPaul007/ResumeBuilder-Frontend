import React, { Dispatch } from "react";
import { v1 as uuidv1 } from "uuid";
import { RemoveBlockButton } from "../../../Components/CustomPageComponents";
import { FormStyles } from "../../../interfaces/FormStyles";
import { GridItem } from "../../../interfaces/GridItem";
import { Others } from "../../../interfaces/Others";
import { useBlockStyles } from "./_BlockStyles";

const dummyOthers = {
  title: "Others Title",
  data: [
    "Lorem ipsum dolor sit amet consectetur.",
    "Adipisicing Nulla repellat dolorum earum.",
    "officiis distinctio ipsa officia soluta.",
    "accusantium exercit ationem.",
  ],
};

interface OthersBlockProps {
  blockTitle: string;
  item: GridItem;
  removeItem: (item: GridItem) => void;
  others: Others;
  formStyles: FormStyles;
}

export const OthersBlock1: React.FC<OthersBlockProps> = (props) => {
  const blockClasses = useBlockStyles(props.formStyles);

  const toBeShownOthers = props.others.data.length === 0 ? dummyOthers : props.others;

  return (
    <div className={blockClasses.blockWrapper}>
      <div className={blockClasses.blockTitleDiv}>
        <h2 className={blockClasses.blockTitleH2}>
          Other Skills &<br />
          Activities
        </h2>
      </div>
      <RemoveBlockButton item={props.item} removeItem={props.removeItem} blockTitle={props.blockTitle} />
      <div style={{ paddingLeft: 8, fontSize: 15 }}>
        {toBeShownOthers.data.map((eachLine: string) => {
          return (
            <div
              key={eachLine + uuidv1}
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "start",
                alignItems: "start",
                marginBottom: 8,
              }}
            >
              <div>{props.others.bullet === -1 ? "" : String.fromCharCode(props.others.bullet)}&nbsp;&nbsp;</div>
              <div style={{ fontWeight: 500, color: "#434343" }}>{eachLine}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
