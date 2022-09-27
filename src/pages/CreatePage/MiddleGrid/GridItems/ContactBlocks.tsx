import React, { useEffect, useState } from "react";
import { v1 as uuidv1 } from "uuid";
import { RemoveBlockButton } from "../../../../Components/CustomPageComponents";
import { GridItem } from "../../../../interfaces/GridItem";
import { checkHyperlink } from "../../../../helpers/checkHyperlink";
import { useBlockStyles } from "./_BlockStyles";
import { FormStyles } from "../../../../interfaces/FormStyles";
import { About } from "../../../../interfaces/About";
import { Contact, ContactBlock } from "../../../../interfaces/Contact";
import { getUrlDomainName } from "../../../../helpers/getUrlDomainName";
import { getIcon } from "../../../../helpers/Icons";
import { BlockTitle } from "./_BlockTitle";

const dummyContact: ContactBlock = {
  title: "Contact Title",
  flipped: false,
  data: {
    address: ["123 Rd, City, State"],
    emails: ["abc@example.com", "github.com/JohnDoe"],
    phno: "+00 1234567890",
  },
  style: {
    bgColor: "#ffffff",
    textColor: "#000000",
  },
};

const isEmptyContact = (contact: ContactBlock) => {
  if (
    contact.title === "" &&
    contact.data.address.join("") === "" &&
    contact.data.phno === "" &&
    contact.data.emails.join("") === ""
  )
    return true;
  return false;
};

interface ContactBlockProps {
  blockTitle: string;
  item: GridItem;
  removeItem: (i: GridItem) => void;
  contact: ContactBlock;
  formStyles: FormStyles;
}

export const ContactBlock1: React.FC<ContactBlockProps> = (props) => {
  const blockClasses = useBlockStyles();

  // Check For Empty Contact
  const [isEmpty, setIsEmpty] = useState(false);
  useEffect(() => {
    setIsEmpty(isEmptyContact(props.contact));
  }, [props.contact]);

  const toBeShownContact = isEmpty ? dummyContact : props.contact;

  return (
    <div
      style={{
        backgroundColor: toBeShownContact.style.bgColor,
        color: toBeShownContact.style.textColor,
        height: "100%",
        width: "100%",
      }}
    >
      <div className={blockClasses.blockWrapper}>
        {/* The Title */}
        {toBeShownContact.title === "" ? (
          <RemoveBlockButton item={props.item} removeItem={props.removeItem} blockTitle={props.blockTitle} />
        ) : (
          <div style={{ display: "flex", flexDirection: toBeShownContact.flipped ? "row-reverse" : "row" }}>
            {/* Need to check props.contact.title because toBeShownContact will always have a title */}
            {props.contact.title === "" ? (
              <BlockTitle formStyles={props.formStyles} title={""} isOpaque={isEmpty} />
            ) : (
              <BlockTitle formStyles={props.formStyles} title={toBeShownContact.title} isOpaque={isEmpty} />
            )}
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
            opacity: isEmpty ? 0.5 : 1,
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
    </div>
  );
};

export const ContactBlock2: React.FC<ContactBlockProps> = (props) => {
  const blockClasses = useBlockStyles();

  // Check For Empty Contact
  const [isEmpty, setIsEmpty] = useState(false);
  useEffect(() => {
    setIsEmpty(isEmptyContact(props.contact));
  }, [props.contact]);

  const toBeShownContact = isEmpty ? dummyContact : props.contact;

  return (
    <div
      style={{
        backgroundColor: toBeShownContact.style.bgColor,
        color: toBeShownContact.style.textColor,
        height: "100%",
        width: "100%",
      }}
    >
      <div className={blockClasses.blockWrapper}>
        {/* The Title */}
        {toBeShownContact.title === "" ? (
          <RemoveBlockButton item={props.item} removeItem={props.removeItem} blockTitle={props.blockTitle} />
        ) : (
          <div style={{ display: "flex", flexDirection: toBeShownContact.flipped ? "row-reverse" : "row" }}>
            {/* Need to check props.contact.title because toBeShownContact will always have a title */}
            {props.contact.title === "" ? (
              <BlockTitle formStyles={props.formStyles} title={""} isOpaque={isEmpty} />
            ) : (
              <BlockTitle formStyles={props.formStyles} title={toBeShownContact.title} isOpaque={isEmpty} />
            )}
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
            opacity: isEmpty ? 0.5 : 1,
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
    </div>
  );
};

export const ContactBlock3: React.FC<ContactBlockProps> = (props) => {
  const blockClasses = useBlockStyles();

  // Check For Empty Contact
  const [isEmpty, setIsEmpty] = useState(false);
  useEffect(() => {
    setIsEmpty(isEmptyContact(props.contact));
  }, [props.contact]);

  const toBeShownContact = isEmpty ? dummyContact : props.contact;

  return (
    <div
      style={{
        backgroundColor: toBeShownContact.style.bgColor,
        color: toBeShownContact.style.textColor,
        height: "100%",
        width: "100%",
      }}
    >
      <div className={blockClasses.blockWrapper}>
        {/* The Title */}
        {toBeShownContact.title === "" ? (
          <RemoveBlockButton item={props.item} removeItem={props.removeItem} blockTitle={props.blockTitle} />
        ) : (
          <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
            {/* Need to check props.contact.title because toBeShownContact will always have a title */}
            {props.contact.title === "" ? (
              <BlockTitle formStyles={props.formStyles} title={""} isOpaque={isEmpty} />
            ) : (
              <BlockTitle
                formStyles={props.formStyles}
                title={toBeShownContact.title}
                isOpaque={isEmpty}
                center={true}
              />
            )}
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
            alignItems: "center",
            fontWeight: 500,
            fontSize: 15,
            marginTop: 0,
            opacity: isEmpty ? 0.5 : 1,
            lineHeight: 1,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              margin: 4,
            }}
          >
            {toBeShownContact.data.address}
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              margin: 4,
            }}
          >
            {toBeShownContact.data.phno}
          </div>
          {toBeShownContact.data.emails.map((eachLink) => {
            return (
              <div
                key={eachLink}
                style={{
                  display: "flex",
                  alignItems: "center",
                  margin: 4,
                }}
              >
                {eachLink}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
