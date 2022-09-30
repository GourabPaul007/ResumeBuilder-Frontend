import React from "react";
import { FormStyles } from "../../../interfaces/FormStyles";

interface BlueprintTitleProps {
  title: string;
  formStyles: FormStyles;
  flipped?: boolean;
  center?: boolean;
}

export const BlueprintTitle: React.FC<BlueprintTitleProps> = (props) => {
  console.log(props.center);

  return (
    <>
      <div
        style={{
          display: "flex",
          // [FOR CENTERED ITEMS FOR EXAMPLE - CONTACT 3]
          justifyContent: props.center ? "center" : props.flipped ? "flex-end" : "flex-start",
          borderTop: `2px solid ${props.formStyles.titleUnderline ? "transparent" : "transparent"}`,
          borderBottom: `2px solid ${
            props.title !== "" && props.formStyles.titleUnderline ? props.formStyles.titleColor : "transparent"
          }`,
          // borderLeft: `2px solid ${props.formStyles.titleUnderline ? "transparent" : "transparent"}`,
          // borderRight: `2px solid ${props.formStyles.titleUnderline ? "transparent" : "transparent"}`,
          backgroundColor: props.formStyles.titleFilled ? props.formStyles.titleFillColor : "transparent",
          // [FOR CENTERED ITEMS FOR EXAMPLE - CONTACT 3]
          width: props.center ? "100%" : props.formStyles.titleFullWidth ? "100%" : "fit-content",
          marginBottom: 4,
          marginLeft: props.flipped ? "auto" : "0px",
          borderRadius: props.formStyles.titleFilled ? 5 : 0,
        }}
      >
        <h2
          style={{
            fontWeight: 600,
            fontSize: 24,
            display: "inline-block",
            padding: `3px 6px`,
            color: props.formStyles.titleColor,
          }}
        >
          {props.title}
        </h2>
      </div>
    </>
  );
};
