import React, { useEffect, useState } from "react";

interface ColorPickerProps {
  accentColor: string;
  setAccentColor: React.Dispatch<React.SetStateAction<string>>;
}

export const ColorPickerForm: React.FC<ColorPickerProps> = ({ accentColor, setAccentColor }) => {
  const [currentColor, setCurrentColor] = useState<string>(
    "#000000".replace(/0/g, function() {
      return (~~(Math.random() * 16)).toString(16);
    })
  );

  const handleAccentColor = (e: React.ChangeEvent<HTMLInputElement>) => {
    // console.log("e.target.value", e.target.value);
    setCurrentColor(e.target.value);
  };

  useEffect(() => {
    const lastRequest = setTimeout(() => {
      setAccentColor(currentColor);
    }, 400);
    return () => {
      clearTimeout(lastRequest);
    };
  }, [currentColor]);

  // useEffect(() => {
  //   console.log(`accentColor`, accentColor);
  // }, [accentColor]);

  return (
    <>
      <div style={{ display: "grid", placeItems: "center", margin: 20 }}>
        <input type="color" id="body" name="colorPicker" value={accentColor} onChange={(e) => handleAccentColor(e)} />
        <label htmlFor="colorPicker">Pick Accent Color</label>
      </div>
    </>
  );
};
