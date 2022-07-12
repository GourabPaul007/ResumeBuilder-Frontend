import React from "react";
import { v1 as uuidv1 } from "uuid";
import { RemoveBlockButton } from "../../../Components/CustomPageComponents";
import { GridItem } from "../../../interfaces/GridItem";
import { checkHyperlink } from "../../../helpers/checkHyperlink";
import { useBlockStyles } from "./_BlockStyles";
import { FormStyles } from "../../../interfaces/FormStyles";
import { About } from "../../../interfaces/About";
import { Contact, ContactBlock } from "../../../interfaces/Contact";
import { getUrlDomainName } from "../../../helpers/getUrlDomainName";
import { getIcon } from "../../../helpers/Icons";

const dummyContact: ContactBlock = {
  title: "Dummy Contact",
  flipped: false,
  data: {
    address: ["123 Main Rd, Address State"],
    emails: ["abc@example.com", "github.com/JohnDoe"],
    phno: "+00 1234567890",
  },
};

const isEmptyContact = (contact: Contact) => {
  if (contact.address.join() === "" && contact.phno === "" && contact.emails.join() === "") return true;
  else return false;
  // return true;
};

interface ContactBlockProps {
  blockTitle: string;
  item: GridItem;
  removeItem: (i: GridItem) => void;
  contact: ContactBlock;
  formStyles: FormStyles;
}

export const ContactBlock1: React.FC<ContactBlockProps> = (props) => {
  const blockClasses = useBlockStyles({ formStyles: props.formStyles, flipped: props.contact.flipped });
  const toBeShownContact = isEmptyContact(props.contact.data) ? dummyContact : props.contact;

  return (
    <div className={blockClasses.blockWrapper}>
      {/* The Title */}
      {toBeShownContact.title === "" ? (
        <RemoveBlockButton item={props.item} removeItem={props.removeItem} blockTitle={props.blockTitle} />
      ) : (
        <div style={{ display: "flex", flexDirection: toBeShownContact.flipped ? "row-reverse" : "row" }}>
          <div className={blockClasses.blockTitleDiv}>
            <h2 className={blockClasses.blockTitleH2}>{toBeShownContact.title}</h2>
          </div>
          <RemoveBlockButton
            item={props.item}
            removeItem={props.removeItem}
            blockTitle={props.blockTitle}
            flipped={toBeShownContact.flipped}
          />
        </div>
      )}

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: toBeShownContact.flipped ? "flex-end" : "flex-start",
          fontWeight: 500,
          fontSize: 15,
          marginTop: toBeShownContact.title === "" ? 24 : 0,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            margin: 4,
            flexDirection: toBeShownContact.flipped ? "row" : "row-reverse",
          }}
        >
          {toBeShownContact.data.address}
          {getIcon({
            name: "address",
            color: props.formStyles.accentColor,
            margin: toBeShownContact.flipped ? "0px 0px 0px 8px" : "0px 8px 0px 0px",
          })}
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            margin: 4,
            flexDirection: toBeShownContact.flipped ? "row" : "row-reverse",
          }}
        >
          {toBeShownContact.data.phno}
          {getIcon({
            name: "phone",
            color: props.formStyles.accentColor,
            margin: toBeShownContact.flipped ? "0px 0px 0px 8px" : "0px 8px 0px 0px",
          })}
        </div>
        {toBeShownContact.data.emails.map((eachLink) => {
          return (
            <div
              key={eachLink}
              style={{
                display: "flex",
                alignItems: "center",
                margin: 4,
                flexDirection: toBeShownContact.flipped ? "row" : "row-reverse",
              }}
            >
              {eachLink}
              {getIcon({
                name: getUrlDomainName(eachLink),
                color: props.formStyles.accentColor,
                margin: toBeShownContact.flipped ? "0px 0px 0px 8px" : "0px 8px 0px 0px",
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const ContactBlock2: React.FC<ContactBlockProps> = (props) => {
  const blockClasses = useBlockStyles({ formStyles: props.formStyles, flipped: props.contact.flipped });
  const toBeShownContact = isEmptyContact(props.contact.data) ? dummyContact : props.contact;

  return (
    <div className={blockClasses.blockWrapper}>
      {/* The Title */}
      {toBeShownContact.title === "" ? (
        <RemoveBlockButton item={props.item} removeItem={props.removeItem} blockTitle={props.blockTitle} />
      ) : (
        <div style={{ display: "flex", flexDirection: toBeShownContact.flipped ? "row-reverse" : "row" }}>
          <div className={blockClasses.blockTitleDiv}>
            <h2 className={blockClasses.blockTitleH2}>{toBeShownContact.title}</h2>
          </div>
          <RemoveBlockButton
            item={props.item}
            removeItem={props.removeItem}
            blockTitle={props.blockTitle}
            flipped={toBeShownContact.flipped}
          />
        </div>
      )}

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: toBeShownContact.flipped ? "flex-end" : "flex-start",
          fontWeight: 500,
          fontSize: 15,
          marginTop: toBeShownContact.title === "" ? 24 : 0,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            margin: 4,
            flexDirection: toBeShownContact.flipped ? "row" : "row-reverse",
          }}
        >
          {toBeShownContact.data.address}
          {getIcon({
            name: "address",
            color: props.formStyles.accentColor,
            margin: toBeShownContact.flipped ? "0px 0px 0px 8px" : "0px 8px 0px 0px",
          })}
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            margin: 4,
            flexDirection: toBeShownContact.flipped ? "row" : "row-reverse",
          }}
        >
          {toBeShownContact.data.phno}
          {getIcon({
            name: "phone",
            color: props.formStyles.accentColor,
            margin: toBeShownContact.flipped ? "0px 0px 0px 8px" : "0px 8px 0px 0px",
          })}
        </div>
        {toBeShownContact.data.emails.map((eachLink) => {
          return (
            <div
              key={eachLink}
              style={{
                display: "flex",
                alignItems: "center",
                margin: 4,
                flexDirection: toBeShownContact.flipped ? "row" : "row-reverse",
              }}
            >
              {eachLink}
              {getIcon({
                name: getUrlDomainName(eachLink),
                color: props.formStyles.accentColor,
                margin: toBeShownContact.flipped ? "0px 0px 0px 8px" : "0px 8px 0px 0px",
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};
