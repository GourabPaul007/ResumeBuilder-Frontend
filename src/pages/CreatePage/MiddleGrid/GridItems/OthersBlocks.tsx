import React, { Dispatch, useEffect, useState } from "react";
import { v1 as uuidv1 } from "uuid";
import { RemoveBlockButton } from "../../../../Components/CustomPageComponents";
import { FormStyles } from "../../../../interfaces/FormStyles";
import { GridItem } from "../../../../interfaces/GridItem";
import { Others } from "../../../../interfaces/Others";
import { useBlockStyles } from "./_BlockStyles";
import { BlockTitle } from "./_BlockTitle";

const dummyOthers = {
  title: "Others Title",
  data: [
    "Lorem ipsum dolor sit amet.",
    "Consectetur adipisicing",
    "Dolorum earum officiis.",
    "distinctio ipsa officia soluta.",
    "accusantium ationem.",
  ],
  style: {
    bgColor: "#fff",
    textColor: "#000",
  },
};

const isEmptyOthers = (others: Others) => {
  if (others.data.join("") === "" && others.title === "") return true;
  return false;
};

interface OthersBlockProps {
  blockTitle: string;
  item: GridItem;
  removeItem: (item: GridItem) => void;
  others: Others;
  formStyles: FormStyles;
}

export const OthersBlock1: React.FC<OthersBlockProps> = (props) => {
  const blockClasses = useBlockStyles();

  // Check For Empty Others
  const [isEmpty, setIsEmpty] = useState(false);
  useEffect(() => {
    setIsEmpty(isEmptyOthers(props.others));
  }, [props.others]);

  const toBeShownOthers = isEmpty ? dummyOthers : props.others;

  return (
    <div
      style={{
        backgroundColor: toBeShownOthers.style.bgColor,
        color: toBeShownOthers.style.textColor,
        height: "100%",
        width: "100%",
      }}
    >
      <div className={blockClasses.blockWrapper}>
        <BlockTitle title={toBeShownOthers.title} formStyles={props.formStyles} isOpaque={isEmpty} />
        <RemoveBlockButton item={props.item} removeItem={props.removeItem} blockTitle={props.blockTitle} />
        <div style={{ paddingLeft: 8, fontSize: 15, opacity: isEmpty ? 0.5 : 1, marginTop: "8px" }}>
          {toBeShownOthers.data.map((eachLine: string) => {
            return (
              <div
                key={eachLine + uuidv1}
                style={{
                  display: "flex",
                  justifyContent: "start",
                  alignItems: "start",
                  marginBottom: 8,
                }}
              >
                <div>{props.others.bullet === -1 ? "" : String.fromCharCode(props.others.bullet)}&nbsp;&nbsp;</div>
                <div style={{ fontWeight: 500 }}>{eachLine}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
