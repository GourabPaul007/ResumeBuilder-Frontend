import React, { Dispatch, FC, useEffect, useState } from "react";
import { materialPalette } from "../helpers/colorDatabase";

interface ColorPickerProps {
  color: string;
  setColor: (newColor: string) => void;
  height?: number;
  starterColor?: string;
}
export const ColorPicker: FC<ColorPickerProps> = (props) => {
  const [currentColor, setCurrentColor] = useState<string>(
    props.starterColor ? props.starterColor : materialPalette.A400[Math.floor(Math.random() * 16)]
  );
  const handleChangeColor = (newColor: string) => {
    setCurrentColor(newColor);
  };

  useEffect(() => {
    const lastRequest = setTimeout(() => {
      props.setColor(currentColor);
    }, 400);
    return () => {
      clearTimeout(lastRequest);
    };
  }, [currentColor]);

  return (
    <label
      style={{
        backgroundColor: currentColor,
        width: props.height ? props.height : 36,
        height: props.height ? props.height : 36,
        borderRadius: "50%",
        cursor: "pointer",
      }}
    >
      <input
        style={{ visibility: "hidden" }}
        type="color"
        name="colorPicker"
        value={currentColor}
        onChange={(e) => handleChangeColor(e.target.value)}
      />
    </label>
  );
};
