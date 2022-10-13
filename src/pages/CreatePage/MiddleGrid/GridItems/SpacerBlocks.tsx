import React, { FC } from "react";
import { RemoveBlockButton } from "../../../../Components/CustomPageComponents";
import { FormStyles } from "../../../../interfaces/FormStyles";
import { GridItem } from "../../../../interfaces/GridItem";
import { Works } from "../../../../interfaces/Works";
import { useBlockStyles } from "./_BlockStyles";

interface SpacerBlockProps {
  blockTitle: string;
  item: GridItem;
  removeItem: (item: GridItem) => void;
  // formStyles: FormStyles;
}

export const SpacerBlock1: FC<SpacerBlockProps> = (props) => {
  const blockClasses = useBlockStyles();
  return (
    <>
      <div
        style={{
          height: "100%",
          width: "100%",
        }}
      >
        <div className={blockClasses.blockWrapper}>
          <RemoveBlockButton item={props.item} removeItem={props.removeItem} blockTitle={props.blockTitle} />
        </div>
      </div>
    </>
  );
};

export const SpacerBlock2: FC<SpacerBlockProps> = (props) => {
  const blockClasses = useBlockStyles();
  return (
    <>
      <div
        style={{
          height: "100%",
          width: "100%",
        }}
      >
        <div className={blockClasses.blockWrapper}>
          <RemoveBlockButton item={props.item} removeItem={props.removeItem} blockTitle={props.blockTitle} />
        </div>
      </div>
    </>
  );
};

export const SpacerBlock3: FC<SpacerBlockProps> = (props) => {
  const blockClasses = useBlockStyles();
  return (
    <>
      <div
        style={{
          height: "100%",
          width: "100%",
        }}
      >
        <div className={blockClasses.blockWrapper}>
          <RemoveBlockButton item={props.item} removeItem={props.removeItem} blockTitle={props.blockTitle} />
        </div>
      </div>
    </>
  );
};
