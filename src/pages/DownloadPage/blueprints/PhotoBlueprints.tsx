import React, { useEffect, useState } from "react";
import { FormStyles } from "../../../interfaces/FormStyles";
import { useBlueprintStyles } from "./_BlueprintStyles";
import { Name } from "../../../interfaces/Name";
import { Photo } from "../../../interfaces/Photo";
import { b64toBlob, chooseDefaultAvatars } from "../../../helpers/photoHelpers";

interface AboutBlueprintProps {
  photo: {
    name: string;
    x: number;
    y: number;
    w: number;
    h: number;
    data: Photo;
  };
  formStyles: FormStyles;
}

export const PhotoBlueprint1: React.FC<AboutBlueprintProps> = (props) => {
  const blueprintClasses = useBlueprintStyles({
    h: props.photo.h,
    x: props.photo.x,
    y: props.photo.y,
    w: props.photo.w,
    bgColor: props.photo.data.style.bgColor,
    textColor: props.photo.data.style.textColor,
  });

  const [toBeShownPhoto, setToBeShownPhoto] = useState<Blob>();
  const [defaultAvatar, setDefaultAvatar] = useState("Avatars1");

  useEffect(() => {
    try {
      let avatarBase64 = localStorage.getItem("avatarBase64") as string;
      avatarBase64 = avatarBase64.split("base64,")[1];
      const blobAvatar = b64toBlob(avatarBase64);
      setToBeShownPhoto(blobAvatar);
    } catch (error) {
      console.error(error);
    }
  }, [props.photo.data.hasPhoto]);

  useEffect(() => {
    const photoNo = Math.floor(Math.random() * 5) + 1;
    const chosenDefaultAvatar = chooseDefaultAvatars(photoNo);
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
        {toBeShownPhoto && props.photo.data.hasPhoto ? (
          <img
            src={URL.createObjectURL(toBeShownPhoto)}
            alt="not found"
            // height={`${props.photo.data.height}px`}
            width={`${props.photo.data.width}px`}
            style={{
              border: `${props.photo.data.borderWidth}px solid ${props.photo.data.borderColor}`,
              borderRadius: `${props.photo.data.borderRadius}%`,
            }}
          />
        ) : (
          <img
            src={defaultAvatar}
            alt="not found"
            // height={`${props.photo.data.height}px`}
            width={`${props.photo.data.width}px`}
            style={{
              border: `${props.photo.data.borderWidth}px solid ${props.photo.data.borderColor}`,
              borderRadius: `${props.photo.data.borderRadius}%`,
            }}
          />
        )}
      </div>
    </div>
  );
};
