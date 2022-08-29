import React from "react";
import { getUrlDomainName } from "../../../helpers/getUrlDomainName";
import { getIcon } from "../../../helpers/Icons";
import { ContactBlock } from "../../../interfaces/Contact";
import { FormStyles } from "../../../interfaces/FormStyles";
import { useBlueprintStyles } from "./_BlueprintStyles";
import { BlueprintTitle } from "./_BlueprintTitle";

interface ContactBlueprintProps {
  contact: {
    name: string;
    x: number;
    y: number;
    w: number;
    h: number;
    data: ContactBlock;
  };
  formStyles: FormStyles;
}

export const ContactBlueprint1: React.FC<ContactBlueprintProps> = (props) => {
  const blueprintClasses = useBlueprintStyles();

  return (
    <div
      style={{
        position: "absolute",
        left: `${props.contact.x * 17.5}mm`,
        top: `${props.contact.y * 10 + (props.contact.y - 1) * 10 + 10}px`,
        width: `${props.contact.w * 17.5 - 3}mm`,
        height: `${props.contact.h * 10 + (props.contact.h - 1) * 10}px`,
        borderRadius: 5,
        backgroundColor: props.contact.data.style.bgColor,
        color: props.contact.data.style.textColor,
      }}
    >
      <div className={blueprintClasses.blueprintWrapper}>
        {/* The Title */}
        <BlueprintTitle
          title={props.contact.data.title}
          formStyles={props.formStyles}
          flipped={props.contact.data.flipped}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: props.contact.data.flipped ? "flex-end" : "flex-start",
            fontWeight: 500,
            fontSize: 15,
            marginTop: props.contact.data.title === "" ? 24 : 0,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              margin: 4,
              flexDirection: props.contact.data.flipped ? "row" : "row-reverse",
            }}
          >
            {props.contact.data.data.address}
            {getIcon({
              name: "address",
              color: props.formStyles.accentColor,
              margin: props.contact.data.flipped ? "0px 0px 0px 8px" : "0px 8px 0px 0px",
            })}
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              margin: 4,
              flexDirection: props.contact.data.flipped ? "row" : "row-reverse",
            }}
          >
            {props.contact.data.data.phno}
            {getIcon({
              name: "phone",
              color: props.formStyles.accentColor,
              margin: props.contact.data.flipped ? "0px 0px 0px 8px" : "0px 8px 0px 0px",
            })}
          </div>
          {props.contact.data.data.emails.map((eachLink) => {
            return (
              <div
                key={eachLink}
                style={{
                  display: "flex",
                  alignItems: "center",
                  margin: 4,
                  flexDirection: props.contact.data.flipped ? "row" : "row-reverse",
                }}
              >
                {eachLink}
                {getIcon({
                  name: getUrlDomainName(eachLink),
                  color: props.formStyles.accentColor,
                  margin: props.contact.data.flipped ? "0px 0px 0px 8px" : "0px 8px 0px 0px",
                })}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export const ContactBlueprint2: React.FC<ContactBlueprintProps> = (props) => {
  const blueprintClasses = useBlueprintStyles();

  return (
    <div
      style={{
        position: "absolute",
        left: `${props.contact.x * 17.5}mm`,
        top: `${props.contact.y * 10 + (props.contact.y - 1) * 10 + 10}px`,
        width: `${props.contact.w * 17.5 - 3}mm`,
        height: `${props.contact.h * 10 + (props.contact.h - 1) * 10}px`,
        borderRadius: 5,
        backgroundColor: props.contact.data.style.bgColor,
        color: props.contact.data.style.textColor,
      }}
    >
      <div className={blueprintClasses.blueprintWrapper}>
        {/* The Title */}
        <BlueprintTitle
          title={props.contact.data.title}
          formStyles={props.formStyles}
          flipped={props.contact.data.flipped}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: props.contact.data.flipped ? "flex-end" : "flex-start",
            fontWeight: 500,
            fontSize: 15,
            marginTop: props.contact.data.title === "" ? 24 : 0,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              margin: 4,
              flexDirection: props.contact.data.flipped ? "row" : "row-reverse",
            }}
          >
            {props.contact.data.data.address}
            {getIcon({
              name: "address",
              color: props.formStyles.accentColor,
              margin: props.contact.data.flipped ? "0px 0px 0px 8px" : "0px 8px 0px 0px",
            })}
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              margin: 4,
              flexDirection: props.contact.data.flipped ? "row" : "row-reverse",
            }}
          >
            {props.contact.data.data.phno}
            {getIcon({
              name: "phone",
              color: props.formStyles.accentColor,
              margin: props.contact.data.flipped ? "0px 0px 0px 8px" : "0px 8px 0px 0px",
            })}
          </div>
          {props.contact.data.data.emails.map((eachLink) => {
            return (
              <div
                key={eachLink}
                style={{
                  display: "flex",
                  alignItems: "center",
                  margin: 4,
                  flexDirection: props.contact.data.flipped ? "row" : "row-reverse",
                }}
              >
                {eachLink}
                {getIcon({
                  name: getUrlDomainName(eachLink),
                  color: props.formStyles.accentColor,
                  margin: props.contact.data.flipped ? "0px 0px 0px 8px" : "0px 8px 0px 0px",
                })}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
