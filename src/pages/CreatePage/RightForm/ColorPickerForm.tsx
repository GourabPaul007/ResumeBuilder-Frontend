import React, { useEffect, useState } from "react";

interface ColorPickerProps {
  color: string;
  setColor: React.Dispatch<React.SetStateAction<string>>;
  height?: number;
}
export const ColorPicker: React.FC<ColorPickerProps> = (props) => {
  const [currentColor, setCurrentColor] = useState<string>(
    "#000000".replace(/0/g, function() {
      return (~~(Math.random() * 16)).toString(16);
    })
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
        backgroundColor: props.color,
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

interface AccentColorPickerProps {
  accentColor: string;
  setAccentColor: React.Dispatch<React.SetStateAction<string>>;
}

export const AccentColorPickerForm: React.FC<AccentColorPickerProps> = (props) => {
  const [currentColor, setCurrentColor] = useState<string>(
    "#000000".replace(/0/g, function() {
      return (~~(Math.random() * 16)).toString(16);
    })
  );
  const handleAccentColor = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentColor(e.target.value);
  };

  useEffect(() => {
    const lastRequest = setTimeout(() => {
      props.setAccentColor(currentColor);
    }, 400);
    return () => {
      clearTimeout(lastRequest);
    };
  }, [currentColor]);

  return (
    <>
      <div style={{ display: "grid", placeItems: "center", margin: 20 }}>
        <input
          type="color"
          id="body"
          name="colorPicker"
          value={props.accentColor}
          onChange={(e) => handleAccentColor(e)}
        />
        <label htmlFor="colorPicker">Pick Accent Color</label>
      </div>
    </>
  );
};

interface HeaderColorPickerProps {
  headerColor: string;
  setHeaderColor: React.Dispatch<React.SetStateAction<string>>;
}
export const HeaderColorPickerForm: React.FC<HeaderColorPickerProps> = (props) => {
  const [currentColor, setCurrentColor] = useState<string>(
    "#000000".replace(/0/g, function() {
      return (~~(Math.random() * 16)).toString(16);
    })
  );
  const handleAccentColor = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentColor(e.target.value);
  };

  useEffect(() => {
    const lastRequest = setTimeout(() => {
      props.setHeaderColor(currentColor);
    }, 400);
    return () => {
      clearTimeout(lastRequest);
    };
  }, [currentColor]);

  return (
    <>
      <div style={{ display: "grid", placeItems: "center", margin: 20 }}>
        <input
          type="color"
          id="body"
          name="colorPicker"
          value={props.headerColor}
          onChange={(e) => handleAccentColor(e)}
        />
        <label htmlFor="colorPicker">Pick Header Color</label>
      </div>
    </>
  );
};
