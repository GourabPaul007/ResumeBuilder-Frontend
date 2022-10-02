import React, { useEffect, useState } from "react";
import { v1 as uuidv1 } from "uuid";

import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import { RemoveBlockButton } from "../../../../Components/CustomPageComponents";
import { GridItem } from "../../../../interfaces/GridItem";
import { AboutWithContact } from "../../../../interfaces/AboutWithContact";
import { checkHyperlink } from "../../../../helpers/checkHyperlink";
import { useBlockStyles } from "./_BlockStyles";
import { FormStyles } from "../../../../interfaces/FormStyles";
import { getUrlDomainName } from "../../../../helpers/getUrlDomainName";
import { getIcon } from "../../../../helpers/Icons";

const dummyAboutAndContactData = {
  name: "John Doe",
  profession: "Software Engineer",
  address: ["123 Street, City, State"],
  cityZip: "Bangaon WB 743235",
  phno: "+00 1234567890",
  emails: ["abc@example.com", "Github.com/LoremIpsum(https://github.com/GourabPaul007)"],
  about: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quae expedita architecto, doloribus recusandae iste harum fugit, maxime ipsa nemo magnam provident amet voluptate eveniet unde illo! Dolores, alias porro.`,
  style: {
    bgColor: "#ffffff",
    textColor: "#000000",
  },
};
const isEmptyAandC = (about: AboutWithContact) => {
  if (
    about.about === "" &&
    about.address.join().length === 0 &&
    about.cityZip === "" &&
    about.emails.join().length === 0 &&
    about.name === "" &&
    about.phno === "" &&
    about.profession === ""
  )
    return true;
  return false;
};
interface AboutWithContactBlockProps {
  blockTitle: string;
  item: GridItem;
  removeItem: (i: GridItem) => void;
  aboutWithContact: AboutWithContact;
  formStyles: FormStyles;
}
export const AboutWithContactBlock1: React.FC<AboutWithContactBlockProps> = (props) => {
  const blockClasses = useBlockStyles({ formStyles: props.formStyles });

  // Check For Empty AboutWithContact
  const [isEmpty, setIsEmpty] = useState(false);
  useEffect(() => {
    setIsEmpty(isEmptyAandC(props.aboutWithContact));
  }, [props.aboutWithContact]);
  const toBeShownAboutAndContact = isEmpty ? dummyAboutAndContactData : props.aboutWithContact;

  return (
    <div
      style={{
        backgroundColor: toBeShownAboutAndContact.style.bgColor,
        color: toBeShownAboutAndContact.style.textColor,
        height: "100%",
        width: "100%",
      }}
    >
      <div className={blockClasses.blockWrapper} style={{ fontFamily: props.formStyles.fontFamily }}>
        <h1 style={{ fontWeight: 600, marginBottom: 0, display: "inline-block", opacity: isEmpty ? 0.5 : 1 }}>
          {toBeShownAboutAndContact.name}
        </h1>
        <p style={{ display: "inline-block", opacity: isEmpty ? 0.5 : 1 }}>
          &nbsp;&nbsp;{toBeShownAboutAndContact.profession}
        </p>
        <RemoveBlockButton item={props.item} removeItem={props.removeItem} blockTitle={props.blockTitle} />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            fontWeight: 500,
            fontSize: 15,
            marginTop: 8,
            opacity: isEmpty ? 0.5 : 1,
          }}
        >
          {/* the about extra */}
          <div style={{ paddingRight: 4, paddingLeft: 4, flex: "59%" }}>
            <p>{toBeShownAboutAndContact.about}</p>
          </div>
          <div style={{ flex: "3%" }}>&nbsp;</div>
          {/* the contact section */}
          <div
            style={{
              marginLeft: 20,
              marginBottom: 6,
              paddingLeft: 24,
              borderLeft: `4px solid ${props.formStyles.accentColor}`,
              flex: "38%",
            }}
          >
            <div style={{ display: "flex", marginBottom: 4 }}>
              {getIcon({ name: "location", color: "#FF2071", margin: "4px 8px 0px 0px" })}
              {/* <LocationOnRoundedIcon style={{ color: "#FF2071", fontSize: 16, marginRight: 8, marginTop: 4 }} /> */}
              <div>
                {toBeShownAboutAndContact.address.map((element) => (
                  <div key={element + uuidv1}>{checkHyperlink(element)}</div>
                ))}
              </div>
            </div>

            <div style={{ display: "flex", marginBottom: 6 }}>
              <EmailRoundedIcon style={{ color: "#1565c0", fontSize: 16, marginRight: 8, marginTop: 5 }} />
              {/* emails, for flex reasons */}
              <div>
                {toBeShownAboutAndContact.emails.map((element) => (
                  <div key={element + uuidv1}>{checkHyperlink(element)}</div>
                ))}
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              {getIcon({ name: "phone", color: "#388e3c", margin: "0px 8px 0px 0px" })}
              {toBeShownAboutAndContact.phno}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const AboutWithContactBlock2: React.FC<AboutWithContactBlockProps> = (props) => {
  const blockClasses = useBlockStyles({ formStyles: props.formStyles });

  // Check For Empty AboutWithContact
  const [isEmpty, setIsEmpty] = useState(false);
  useEffect(() => {
    setIsEmpty(isEmptyAandC(props.aboutWithContact));
  }, [props.aboutWithContact]);
  const toBeShownAboutAndContact = isEmpty ? dummyAboutAndContactData : props.aboutWithContact;

  const joinAddresses = (addresses: string[]) => {
    let joinedAddress = "";
    addresses.forEach((address) => {
      joinedAddress += address;
    });
    return joinedAddress;
  };
  return (
    <div
      style={{
        backgroundColor: toBeShownAboutAndContact.style.bgColor,
        color: toBeShownAboutAndContact.style.textColor,
        height: "100%",
        width: "100%",
      }}
    >
      <div className={blockClasses.blockWrapper} style={{ fontFamily: props.formStyles.fontFamily }}>
        <h1 style={{ fontWeight: 600, marginBottom: 0, display: "inline-block", opacity: isEmpty ? 0.5 : 1 }}>
          {toBeShownAboutAndContact.name}
        </h1>
        <p style={{ display: "inline-block", opacity: isEmpty ? 0.5 : 1 }}>
          &nbsp;&nbsp;{toBeShownAboutAndContact.profession}
        </p>
        <RemoveBlockButton item={props.item} removeItem={props.removeItem} blockTitle={props.blockTitle} />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontWeight: 500,
            fontSize: 15,
            marginTop: 8,
            opacity: isEmpty ? 0.5 : 1,
          }}
        >
          <div style={{ paddingRight: 8, paddingLeft: 4 }}>
            <p>{toBeShownAboutAndContact.about}</p>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              // color: props.formStyles.accentColor,
              marginTop: 8,
            }}
          >
            {/* The Left Links */}
            <div style={{ paddingRight: 8, paddingLeft: 4 }}>
              {toBeShownAboutAndContact.emails.map((element) => (
                <div
                  key={element + uuidv1}
                  style={{ textDecoration: "none", margin: 2, display: "flex", alignItems: "center" }}
                >
                  {getIcon({
                    name: getUrlDomainName(element),
                    color: props.formStyles.accentColor,
                    margin: "0px 8px 0px 8px",
                  })}
                  {checkHyperlink(element)}
                </div>
              ))}
            </div>
            {/* The Right Links */}
            <div style={{ paddingRight: 8, paddingLeft: 4, display: "flex", flexDirection: "column" }}>
              <div style={{ display: "flex", alignItems: "center", margin: 2 }}>
                {getIcon({ name: "phone", color: props.formStyles.accentColor, margin: "0px 8px 0px 8px" })}
                {toBeShownAboutAndContact.phno}
              </div>
              <div style={{ margin: 2, display: "flex", alignItems: "center" }}>
                {getIcon({ name: "home", color: props.formStyles.accentColor, margin: "0px 8px 0px 8px" })}
                {toBeShownAboutAndContact.address.map((e, index) => (
                  <span key={e + index}>{checkHyperlink(e)}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
