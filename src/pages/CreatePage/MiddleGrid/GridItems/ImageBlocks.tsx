import React, { useEffect, useState } from "react";
import { RemoveBlockButton } from "../../../../Components/CustomPageComponents";
import { GridItem } from "../../../../interfaces/GridItem";
import { useBlockStyles } from "./_BlockStyles";
import { FormStyles } from "../../../../interfaces/FormStyles";
import { Image } from "../../../../interfaces/Image";
import { b64toBlob, chooseDefaultAvatars } from "../../../../helpers/imageHelpers";

interface ImageProps {
  blockTitle: string;
  item: GridItem;
  removeItem: (i: GridItem) => void;
  image: Image;
  formStyles: FormStyles;
}
export const ImageBlock1: React.FC<ImageProps> = (props) => {
  const blockClasses = useBlockStyles({ formStyles: props.formStyles });

  const [toBeShownImage, setToBeShownImage] = useState<Blob>();
  const [hasImageChanged, setHasImageChanged] = useState(false);

  useEffect(() => {
    try {
      let avatarBase64 = localStorage.getItem("avatarBase64") as string;
      avatarBase64 = avatarBase64.split("base64,")[1];
      const blobAvatar = b64toBlob(avatarBase64);
      setToBeShownImage(blobAvatar);
    } catch (error) {
      console.error(error);
    }
  }, [props.image.hasImage]);

  return (
    <div
      style={{
        backgroundColor: props.image.style.bgColor,
        color: props.image.style.textColor,
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
        {toBeShownImage && props.image.hasImage ? (
          <img
            alt="not found"
            height={`${props.image.height}px`}
            width={`${props.image.width}px`}
            style={{ border: `3px solid ${props.formStyles.titleFillColor}`, borderRadius: `${props.image.radius}%` }}
            src={URL.createObjectURL(toBeShownImage)}
          />
        ) : (
          <img
            alt="not found"
            height={`${props.image.height}px`}
            width={`${props.image.width}px`}
            src={chooseDefaultAvatars()}
          />
        )}
        <RemoveBlockButton item={props.item} removeItem={props.removeItem} blockTitle={props.blockTitle} />
      </div>
    </div>
  );
};
