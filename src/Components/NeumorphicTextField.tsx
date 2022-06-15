import React, { FC } from "react";

interface NeumorphicTextFieldProps {}

const NeumorphicTextField: FC<NeumorphicTextFieldProps> = () => {
  return (
    <>
      <input
        type="text"
        style={{
          width: "100%",
          height: 36,
          border: "none",
          padding: "4px 12px 0px 12px",
          fontSize: 16,
          borderRadius: 8,
          background: "transparent",
          boxShadow: "inset 5px 5px 10px #e4e4e4, inset -5px -5px 10px #ffffff",
        }}
      />
    </>
  );
};

export default NeumorphicTextField;
