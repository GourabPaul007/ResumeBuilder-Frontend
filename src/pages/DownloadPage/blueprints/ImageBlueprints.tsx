import React, { useEffect, useState } from "react";
import { FormStyles } from "../../../interfaces/FormStyles";
import { useBlueprintStyles } from "./_BlueprintStyles";
import { Name } from "../../../interfaces/Name";
import { Image } from "../../../interfaces/Image";
import { b64toBlob, chooseDefaultAvatars } from "../../../helpers/imageHelpers";

interface AboutBlueprintProps {
  image: {
    name: string;
    x: number;
    y: number;
    w: number;
    h: number;
    data: Image;
  };
  formStyles: FormStyles;
}

export const ImageBlueprint1: React.FC<AboutBlueprintProps> = (props) => {
  const blueprintClasses = useBlueprintStyles({
    h: props.image.h,
    x: props.image.x,
    y: props.image.y,
    w: props.image.w,
    bgColor: props.image.data.style.bgColor,
    textColor: props.image.data.style.textColor,
  });

  const [toBeShownImage, setToBeShownImage] = useState<Blob>();
  const [defaultAvatar, setDefaultAvatar] = useState("Avatars1");

  useEffect(() => {
    try {
      let avatarBase64 = localStorage.getItem("avatarBase64") as string;
      avatarBase64 = avatarBase64.split("base64,")[1];
      const blobAvatar = b64toBlob(avatarBase64);
      setToBeShownImage(blobAvatar);
    } catch (error) {
      console.error(error);
    }
  }, [props.image.data.hasImage]);

  useEffect(() => {
    const imageNo = Math.floor(Math.random() * 5) + 1;
    const chosenDefaultAvatar = chooseDefaultAvatars(imageNo);
    setDefaultAvatar(chosenDefaultAvatar);
  }, []);

  return (
    <div className={blueprintClasses.blueprintWrapper} style={{ fontFamily: props.formStyles.fontFamily }}>
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {toBeShownImage && props.image.data.hasImage ? (
          <img
            src={URL.createObjectURL(toBeShownImage)}
            alt="not found"
            // height={`${props.image.data.height}px`}
            width={`${props.image.data.width}px`}
            style={{
              border: `${props.image.data.border.borderWidth}px solid ${props.image.data.border.borderColor}`,
              borderRadius: `${props.image.data.radius}%`,
            }}
          />
        ) : (
          <img
            src={defaultAvatar}
            alt="not found"
            // height={`${props.image.data.height}px`}
            width={`${props.image.data.width}px`}
            style={{
              border: `${props.image.data.border.borderWidth}px solid ${props.image.data.border.borderColor}`,
              borderRadius: `${props.image.data.radius}%`,
            }}
          />
        )}
      </div>
    </div>
  );
};
