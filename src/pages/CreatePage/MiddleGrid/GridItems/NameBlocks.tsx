import React, { useEffect, useState } from "react";
import { v1 as uuidv1 } from "uuid";
import { RemoveBlockButton } from "../../../../Components/CustomPageComponents";
import { GridItem } from "../../../../interfaces/GridItem";
import { useBlockStyles } from "./_BlockStyles";
import { FormStyles } from "../../../../interfaces/FormStyles";
import { Name } from "../../../../interfaces/Name";
import { log } from "../../../../helpers/logger";

const dummyName = {
  name: "John Doe",
  profession: "Software Engineer",
  style: {
    bgColor: "#ffffff",
    textColor: "#000000",
  },
};

const isEmptyName = (name: Name) => {
  if (name.name === "" && name.profession === "") return true;
  return false;
};

interface NameProps {
  blockTitle: string;
  item: GridItem;
  removeItem: (i: GridItem) => void;
  name: Name;
  formStyles: FormStyles;
}
export const NameBlock1: React.FC<NameProps> = (props) => {
  const blockClasses = useBlockStyles({ formStyles: props.formStyles });

  // Check For Empty Name
  const [isEmpty, setIsEmpty] = useState(false);
  useEffect(() => {
    setIsEmpty(isEmptyName(props.name));
  }, [props.name]);

  const toBeShownName = isEmptyName(props.name) ? dummyName : props.name;
  log("toBeShownName", toBeShownName);

  return (
    <div
      style={{
        backgroundColor: toBeShownName.style.bgColor,
        color: toBeShownName.style.textColor,
        height: "100%",
        width: "100%",
      }}
    >
      <div
        className={blockClasses.blockWrapper}
        style={{
          fontFamily: props.formStyles.fontFamily,
          height: "100%",
          width: "100%",
          display: "flex",
          justifyContent: props.name.align,
          alignItems: "center",
        }}
      >
        <h1
          style={{
            fontSize: props.name.fontSize || 36,
            fontWeight: 600,
            marginBottom: 0,
            display: "inline-block",
            opacity: isEmpty ? 0.5 : 1,
          }}
        >
          {toBeShownName.name}
        </h1>
        <p style={{ marginTop: props.name.fontSize - 22, display: "inline-block", opacity: isEmpty ? 0.5 : 1 }}>
          &nbsp;&nbsp;{toBeShownName.profession}
        </p>
        <RemoveBlockButton item={props.item} removeItem={props.removeItem} blockTitle={props.blockTitle} />
      </div>
    </div>
  );
};
