import React, { Dispatch, FC, useEffect, useState } from "react";
import { materialPalette } from "../helpers/colorDatabase";

interface ColorPickerProps {
  color: string;
  handleColor: (newColor: string) => void;
  height?: number;
}
export const ColorPicker: FC<ColorPickerProps> = (props) => {
  return (
    <label
      style={{
        backgroundColor: props.color,
        width: props.height ? props.height : 36,
        height: props.height ? props.height : 36,
        borderRadius: "50%",
        boxShadow: "2px 2px 4px 0px rgba(0, 0, 0, 0.4)",
        cursor: "pointer",
      }}
    >
      <input
        style={{ visibility: "hidden" }}
        type="color"
        name="colorPicker"
        value={props.color}
        onChange={(e) => props.handleColor(e.target.value)}
      />
    </label>
  );
};
