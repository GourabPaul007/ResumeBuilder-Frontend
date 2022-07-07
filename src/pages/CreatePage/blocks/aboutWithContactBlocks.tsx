import React from "react";
import { v1 as uuidv1 } from "uuid";

import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import { RemoveBlockButton } from "../../../Components/CustomPageComponents";
import { GridItem } from "../../../interfaces/GridItem";
import { AboutWithContact } from "../../../interfaces/AboutWithContact";
import { checkHyperlink } from "../../../helpers/checkHyperlink";
import { useBlockStyles } from "./_BlockStyles";
import { FormStyles } from "../../../interfaces/FormStyles";
import { getUrlDomainName } from "../../../helpers/getUrlDomainName";
import { getIcon } from "../../../helpers/Icons";

const about = {
  name: "John Doe",
  profession: "Software Engineer",
  about: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quae expedita architecto, doloribus recusandae iste harum fugit, maxime ipsa nemo magnam provident amet voluptate eveniet unde illo! Dolores, alias porro.`,
};
const contact = {
  emails: ["johndoe@abc.com", "github.com/JohnDoe"],
  phno: ["123-456-7890"],
  address: "123 Main St, Los Angeles County",
  cityZip: "Los Angeles CA 12345",
};

const dummyAboutAndContactData = {
  name: "Gourab Paul",
  profession: "Software Engineer",
  address: ["Saktigarh, Bongaon WB 743235"],
  cityZip: "Bangaon WB 743235",
  phno: "+91 9064040525",
  emails: ["gourabpaul900@gmail.com", "Github.com/GourabPaul007(https://github.com/GourabPaul007)"],
  about: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quae expedita architecto, doloribus recusandae iste harum fugit, maxime ipsa nemo magnam provident amet voluptate eveniet unde illo! Dolores, alias porro.`,
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
  else return false;
  // return true;
};
interface AboutWithContactBlockProps {
  blockTitle: string;
  item: GridItem;
  removeItem: (i: GridItem) => void;
  about: AboutWithContact;
  formStyles: FormStyles;
}
export const AboutWithContactBlock1: React.FC<AboutWithContactBlockProps> = (props) => {
  const blockClasses = useBlockStyles({ formStyles: props.formStyles });

  const toBeShownAboutAndContact = isEmptyAandC(props.about) ? dummyAboutAndContactData : props.about;

  return (
    <div className={blockClasses.blockWrapper}>
      <h1 style={{ fontWeight: 600, marginBottom: 0, display: "inline-block" }}>{toBeShownAboutAndContact.name}</h1>
      <p style={{ display: "inline-block" }}>&nbsp;&nbsp;{toBeShownAboutAndContact.profession}</p>
      <RemoveBlockButton item={props.item} removeItem={props.removeItem} blockTitle={props.blockTitle} />
      <div style={{ display: "flex", flexDirection: "row", fontWeight: 500, fontSize: 15, marginTop: 8 }}>
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
            borderLeft: "4px solid #123456",
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
  );
};

export const AboutWithContactBlock2: React.FC<AboutWithContactBlockProps> = (props) => {
  const blockClasses = useBlockStyles({ formStyles: props.formStyles });
  const toBeShownAboutAndContact = isEmptyAandC(props.about) ? dummyAboutAndContactData : props.about;

  const joinAddresses = (addresses: string[]) => {
    let joinedAddress = "";
    addresses.forEach((address) => {
      joinedAddress += address;
    });
    return joinedAddress;
  };
  return (
    <div className={blockClasses.blockWrapper}>
      <h1 style={{ fontWeight: 600, marginBottom: 0, display: "inline-block" }}>{toBeShownAboutAndContact.name}</h1>
      <p style={{ display: "inline-block" }}>&nbsp;&nbsp;{toBeShownAboutAndContact.profession}</p>
      <RemoveBlockButton item={props.item} removeItem={props.removeItem} blockTitle={props.blockTitle} />
      <div style={{ display: "flex", flexDirection: "column", fontWeight: 500, fontSize: 15, marginTop: 8 }}>
        <div style={{ paddingRight: 8, paddingLeft: 4 }}>
          <p>{toBeShownAboutAndContact.about}</p>
        </div>
        <div
          style={{ display: "flex", justifyContent: "space-evenly", color: props.formStyles.accentColor, marginTop: 8 }}
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
  );
};
