import React from "react";
import { v1 as uuidv1 } from "uuid";

import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import { RemoveBlockButton } from "../../../Components/CustomPageComponents";
import { GridItem } from "../../../interfaces/GridItem";
import { AboutWithContact } from "../../../interfaces/AboutWithContact";
import { checkHyperlink } from "../../../helpers/checkHyperlink";
import { FormStyles } from "../../../interfaces/FormStyles";
import { getUrlDomainName } from "../../../helpers/getUrlDomainName";
import { getIcon } from "../../../helpers/Icons";
import { useBlueprintStyles } from "./_BlueprintStyles";

interface AboutWithContactBlueprintProps {
  aboutWithContact: {
    name: string;
    x: number;
    y: number;
    w: number;
    h: number;
    data: AboutWithContact;
  };
  formStyles: FormStyles;
}
export const AboutWithContactBlueprint1: React.FC<AboutWithContactBlueprintProps> = (props) => {
  const blueprintClasses = useBlueprintStyles();

  return (
    <div
      style={{
        position: "absolute",
        left: `${props.aboutWithContact.x * 17.5}mm`,
        top: `${props.aboutWithContact.y * 10 + (props.aboutWithContact.y - 1) * 10 + 10}px`,
        width: `${props.aboutWithContact.w * 17.5 - 3}mm`,
        height: `${props.aboutWithContact.h * 10 + (props.aboutWithContact.h - 1) * 10}px`,
        borderRadius: 5,
        backgroundColor: props.aboutWithContact.data.style.bgColor,
        color: props.aboutWithContact.data.style.textColor,
      }}
    >
      <div className={blueprintClasses.blueprintWrapper}>
        <h1 style={{ fontWeight: 600, marginBottom: 0, display: "inline-block" }}>
          {props.aboutWithContact.data.name}
        </h1>
        <p style={{ display: "inline-block" }}>&nbsp;&nbsp;{props.aboutWithContact.data.profession}</p>
        <div style={{ display: "flex", flexDirection: "row", fontWeight: 500, fontSize: 15, marginTop: 8 }}>
          {/* the about extra */}
          <div style={{ paddingRight: 4, paddingLeft: 4, flex: "59%" }}>
            <p>{props.aboutWithContact.data.about}</p>
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
                {props.aboutWithContact.data.address.map((element: string) => (
                  <div key={element + uuidv1}>{checkHyperlink(element)}</div>
                ))}
              </div>
            </div>

            <div style={{ display: "flex", marginBottom: 6 }}>
              <EmailRoundedIcon style={{ color: "#1565c0", fontSize: 16, marginRight: 8, marginTop: 5 }} />
              {/* emails, for flex reasons */}
              <div>
                {props.aboutWithContact.data.emails.map((element: string) => (
                  <div key={element + uuidv1}>{checkHyperlink(element)}</div>
                ))}
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              {getIcon({ name: "phone", color: "#388e3c", margin: "0px 8px 0px 0px" })}
              {props.aboutWithContact.data.phno}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const AboutWithContactBlueprint2: React.FC<AboutWithContactBlueprintProps> = (props) => {
  const blueprintClasses = useBlueprintStyles();

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
        position: "absolute",
        left: `${props.aboutWithContact.x * 17.5}mm`,
        top: `${props.aboutWithContact.y * 10 + (props.aboutWithContact.y - 1) * 10 + 10}px`,
        width: `${props.aboutWithContact.w * 17.5 - 3}mm`,
        height: `${props.aboutWithContact.h * 10 + (props.aboutWithContact.h - 1) * 10}px`,
        borderRadius: 5,
        backgroundColor: props.aboutWithContact.data.style.bgColor,
        color: props.aboutWithContact.data.style.textColor,
      }}
    >
      <div className={blueprintClasses.blueprintWrapper}>
        <h1 style={{ fontWeight: 600, marginBottom: 0, display: "inline-block" }}>
          {props.aboutWithContact.data.name}
        </h1>
        <p style={{ display: "inline-block" }}>&nbsp;&nbsp;{props.aboutWithContact.data.profession}</p>
        <div style={{ display: "flex", flexDirection: "column", fontWeight: 500, fontSize: 15, marginTop: 8 }}>
          <div style={{ paddingRight: 8, paddingLeft: 4 }}>
            <p>{props.aboutWithContact.data.about}</p>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              color: props.formStyles.accentColor,
              marginTop: 8,
            }}
          >
            {/* The Left Links */}
            <div style={{ paddingRight: 8, paddingLeft: 4 }}>
              {props.aboutWithContact.data.emails.map((element: string) => (
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
                {props.aboutWithContact.data.phno}
              </div>
              <div style={{ margin: 2, display: "flex", alignItems: "center" }}>
                {getIcon({ name: "home", color: props.formStyles.accentColor, margin: "0px 8px 0px 8px" })}
                {props.aboutWithContact.data.address.map((e: string, index: number) => (
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
