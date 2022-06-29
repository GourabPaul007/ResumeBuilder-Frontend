import React from "react";
import { v1 as uuidv1 } from "uuid";
import { RemoveBlockButton } from "../../../Components/CustomPageComponents";
import { GridItem } from "../../../interfaces/GridItem";
import { checkHyperlink } from "../../../helpers/checkHyperlink";
import { useBlockStyles } from "./_BlockStyles";
import { FormStyles } from "../../../interfaces/FormStyles";
import { About } from "../../../interfaces/About";

const dummyAbout = {
  name: "John Doe",
  profession: "Software Engineer",
  about: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quae expedita architecto, doloribus recusandae iste harum fugit, 
          maxime ipsa nemo magnam provident amet voluptate eveniet unde illo! Dolores, alias porro.`,
};

const isEmptyAbout = (about: About) => {
  if (about.about === "" && about.name === "" && about.profession === "") return true;
  else return false;
  // return true;
};

interface AboutProps {
  blockTitle: string;
  item: GridItem;
  removeItem: (i: GridItem) => void;
  about: About;
  formStyles: FormStyles;
}
export const AboutBlock1: React.FC<AboutProps> = (props) => {
  const blockClasses = useBlockStyles(props.formStyles);

  const toBeShownAbout = isEmptyAbout(props.about) ? dummyAbout : props.about;

  return (
    <div className={blockClasses.blockWrapper}>
      <h1 style={{ fontWeight: 600, marginBottom: 0, display: "inline-block" }}>{toBeShownAbout.name}</h1>
      <p style={{ display: "inline-block" }}>&nbsp;&nbsp;{toBeShownAbout.profession}</p>
      <RemoveBlockButton item={props.item} removeItem={props.removeItem} blockTitle={props.blockTitle} />
      <div style={{ fontWeight: 500, fontSize: 15, marginTop: 8 }}>
        {/* the about extra */}
        <div style={{ paddingRight: 4, paddingLeft: 4 }}>
          <p>{toBeShownAbout.about}</p>
        </div>
      </div>
    </div>
  );
};
