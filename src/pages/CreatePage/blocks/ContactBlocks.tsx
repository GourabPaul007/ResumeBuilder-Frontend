import React from "react";
import { v1 as uuidv1 } from "uuid";
import { RemoveBlockButton } from "../../../Components/CustomPageComponents";
import { GridItem } from "../../../interfaces/GridItem";
import { checkHyperlink } from "../../../helpers/checkHyperlink";
import { useBlockStyles } from "./_BlockStyles";
import { FormStyles } from "../../../interfaces/FormStyles";
import { About } from "../../../interfaces/About";
import { Contact } from "../../../interfaces/Contact";
import { getUrlDomainName } from "../../../helpers/getUrlDomainName";
import { getIcon } from "../../../helpers/Icons";

const dummyContact: Contact = {
  address: ["123 Main Rd, Address State"],
  emails: ["abc@example.com", "github.com/JohnDoe"],
  phno: "+00 1234567890",
};

const isEmptyContact = (contact: Contact) => {
  if (contact.address.join() === "" && contact.phno === "" && contact.emails.join() === "") return true;
  else return false;
  // return true;
};

interface AboutProps {
  blockTitle: string;
  item: GridItem;
  removeItem: (i: GridItem) => void;
  contact: Contact;
  formStyles: FormStyles;
}
export const ContactBlock1: React.FC<AboutProps> = (props) => {
  const blockClasses = useBlockStyles(props.formStyles);

  const toBeShownContact = isEmptyContact(props.contact) ? dummyContact : props.contact;

  return (
    <div className={blockClasses.blockWrapper}>
      <RemoveBlockButton item={props.item} removeItem={props.removeItem} blockTitle={props.blockTitle} />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
          fontWeight: 500,
          fontSize: 15,
          marginTop: 26,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", margin: 4 }}>
          {toBeShownContact.address}
          {getIcon({ name: "address", color: props.formStyles.accentColor, margin: "2px 0px 0px 8px" })}
        </div>
        <div style={{ display: "flex", alignItems: "center", margin: 4 }}>
          {toBeShownContact.phno}
          {getIcon({ name: "phone", color: props.formStyles.accentColor, margin: "0px 0px 0px 8px" })}
        </div>
        {toBeShownContact.emails.map((eachLink) => {
          return (
            <div style={{ display: "flex", alignItems: "center", margin: 4 }}>
              {eachLink}
              {getIcon({
                name: getUrlDomainName(eachLink),
                color: props.formStyles.accentColor,
                margin: "2px 0px 0px 8px",
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};
