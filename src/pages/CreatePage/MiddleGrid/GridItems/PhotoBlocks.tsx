import React, { useEffect, useState } from "react";
import { RemoveBlockButton } from "../../../../Components/CustomPageComponents";
import { GridItem } from "../../../../interfaces/GridItem";
import { useBlockStyles } from "./_BlockStyles";
import { FormStyles } from "../../../../interfaces/FormStyles";
import { Photo } from "../../../../interfaces/Photo";
import { b64toBlob, chooseDefaultAvatars } from "../../../../helpers/photoHelpers";
import { SingleBlockStyle } from "../../../../interfaces/_SingleBlockStyle";

const dummyPhoto: Photo = {
  name: "",
  hasPhoto: 0,
  borderWidth: 2,
  borderStyle: "solid",
  borderColor: "#fff",
  height: 200,
  width: 160,
  borderRadius: 0,
  style: {
    bgColor: "#ffffff",
    textColor: "#000000",
  },
};

interface PhotoBlockProps {
  blockTitle: string;
  item: GridItem;
  removeItem: (i: GridItem) => void;
  photo: Photo;
  formStyles: FormStyles;
}
const PhotoBlock1: React.FC<PhotoBlockProps> = (props) => {
  const blockClasses = useBlockStyles({ formStyles: props.formStyles });

  const [toBeShownPhotoBlob, setToBeShownPhotoBlob] = useState<Blob>();
  const [defaultAvatar, setDefaultAvatar] = useState("Avatars1");

  useEffect(() => {
    try {
      let avatarBase64 = localStorage.getItem("avatarBase64") as string;
      avatarBase64 = avatarBase64.split("base64,")[1];
      const blobAvatar = b64toBlob(avatarBase64);
      setToBeShownPhotoBlob(blobAvatar);
    } catch (error) {
      console.error(error);
    }
  }, [props.photo.hasPhoto]);

  useEffect(() => {
    const photoNo = Math.floor(Math.random() * 5) + 1;
    const chosenDefaultAvatar = chooseDefaultAvatars(photoNo);
    setDefaultAvatar(chosenDefaultAvatar);
  }, []);
  // Set default style incase props.photo.style is undefined
  // NEED TO SAVE WHOLE PHOTO DETAIL ON EXAMPLE SET
  const toBeShownPhoto: Photo = props.photo.hasPhoto ? props.photo : dummyPhoto;
  return (
    <div
      style={{
        backgroundColor: toBeShownPhoto.style.bgColor,
        color: toBeShownPhoto.style.textColor,
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
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {toBeShownPhotoBlob && toBeShownPhoto ? (
          <img
            src={URL.createObjectURL(toBeShownPhotoBlob)}
            alt="not found"
            height={`${toBeShownPhoto.width}px`}
            width={`${toBeShownPhoto.width}px`}
            loading="lazy"
            style={{
              border: `${toBeShownPhoto.borderWidth}px solid ${toBeShownPhoto.borderColor}`,
              borderRadius: `${toBeShownPhoto.borderRadius}%`,
              objectFit: "cover",
            }}
          />
        ) : (
          <img
            src={defaultAvatar}
            alt="not found"
            height={`${toBeShownPhoto.width}px`}
            width={`${toBeShownPhoto.width}px`}
            loading="lazy"
            style={{
              border: `${toBeShownPhoto.borderWidth}px solid ${toBeShownPhoto.borderColor}`,
              borderRadius: `${toBeShownPhoto.borderRadius}%`,
            }}
          />
        )}
        <RemoveBlockButton item={props.item} removeItem={props.removeItem} blockTitle={props.blockTitle} />
      </div>
    </div>
  );
};

const areEqualPhoto = (a: PhotoBlockProps, b: PhotoBlockProps) => {
  return (
    a.photo.name == b.photo.name &&
    a.photo.hasPhoto == b.photo.hasPhoto &&
    a.photo.height == b.photo.height &&
    a.photo.width == b.photo.width &&
    a.photo.borderRadius == b.photo.borderRadius &&
    a.photo.borderColor == b.photo.borderColor &&
    a.photo.borderStyle == b.photo.borderStyle &&
    a.photo.borderWidth == b.photo.borderWidth &&
    a.photo.style.bgColor == b.photo.style.bgColor &&
    a.photo.style.textColor == b.photo.style.textColor
  );
};
export const PhotoBlock1Memo = React.memo(PhotoBlock1, areEqualPhoto);
