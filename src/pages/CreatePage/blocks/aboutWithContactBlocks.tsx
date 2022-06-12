import React from "react";
import { v1 as uuidv1 } from "uuid";

import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import PhoneIcon from "@mui/icons-material/Phone";
import { Button, IconButton } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { RemoveBlockButton } from "../../../Components/CustomPageComponents";
import { GridItem } from "../../../interfaces/GridItem";
import { About } from "../../../interfaces/About";
import { checkHyperlink } from "../../../helpers/checkHyperlink";
import { checkNewLines } from "../../../helpers/checkNewLines";

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

interface AboutWithContactBlockProps {
  item: GridItem;
  removeItem: (i: GridItem) => void;
  about: About;
}
export const AboutWithContactBlock1: React.FC<AboutWithContactBlockProps> = (props) => {
  return (
    <div style={{ margin: 16, fontFamily: "sans-serif", color: "#111" }}>
      <h1 style={{ fontWeight: 600, marginBottom: 0, display: "inline-block" }}>{props.about.name}</h1>
      <p style={{ display: "inline-block" }}>&nbsp;&nbsp;{props.about.profession}</p>
      <RemoveBlockButton item={props.item} removeItem={props.removeItem} />
      <div style={{ display: "flex", flexDirection: "row", fontWeight: 500, fontSize: 15, marginTop: 8 }}>
        {/* the about extra */}
        <div style={{ paddingRight: 4, paddingLeft: 4, flex: "60%" }}>
          <p>{props.about.about}</p>
        </div>

        {/* the contact section */}
        <div
          className="ps-3"
          style={{
            marginLeft: 10,
            marginTop: 0,
            marginBottom: 6,
            paddingLeft: 20,
            borderLeft: "3px solid #123456",
            flex: "40%",
          }}
        >
          <div style={{ display: "flex", marginBottom: 4 }}>
            <LocationOnRoundedIcon style={{ color: "#FF2071", fontSize: 16, marginRight: 8 }} />
            <div>
              {props.about.address.map((element) => (
                <div key={element + uuidv1}>{checkHyperlink(element)}</div>
              ))}
            </div>
          </div>

          <div style={{ display: "flex", marginBottom: 6 }}>
            <EmailRoundedIcon style={{ color: "#1565c0", fontSize: 16, marginRight: 8 }} />
            {/* emails, for flex reasons */}
            <div>
              {props.about.emails.map((element) => (
                <div key={element + uuidv1}>{checkHyperlink(element)}</div>
              ))}
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <PhoneIcon style={{ color: "#388e3c", fontSize: 16, marginRight: 8 }} />
            {props.about.phno}
          </div>
        </div>
      </div>
    </div>
  );
};

export const AboutWithContactBlock2: React.FC<AboutWithContactBlockProps> = (props) => {
  return (
    <div style={{ margin: 16, fontFamily: "sans-serif" }}>
      <h1 style={{ fontWeight: 600, marginBottom: 0, display: "inline-block" }}>{props.about.name}</h1>
      <p style={{ display: "inline-block" }}>&nbsp;&nbsp;{props.about.profession}</p>
      <RemoveBlockButton item={props.item} removeItem={props.removeItem} />
      <div style={{ marginTop: 16, paddingLeft: 8 }}>
        {[
          "Lorem ipsum dolor sit amet consectetur.",
          " adipisicing Nulla repellat dolorum earum, accusantium exercit ationem.",
          "officiis distinctio ipsa officia soluta minus ideaque fuga.",
        ].map((eachLine: string) => {
          return (
            <div
              key={eachLine + uuidv1}
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "start",
                alignItems: "start",
                marginBottom: 6,
              }}
            >
              <div>&bull;&nbsp;</div>
              <div style={{ fontSize: 14, fontWeight: 500, color: "#434343" }}>{eachLine}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
