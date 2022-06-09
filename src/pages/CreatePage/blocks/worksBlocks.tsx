import React from "react";
import { v1 as uuidv1 } from "uuid";

import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import PhoneIcon from "@mui/icons-material/Phone";
import { checkHyperlink } from "../../../helpers/checkHyperlink";
import { RemoveBlockButton } from "../../../Components/CustomPageComponents";
import { GridItem } from "../../../interfaces/GridItem";

const works = [
  {
    id: "work1",
    organizationName: "Company 1",
    workDetails: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit adipisci labore minima doloribus animi.",
      "Excepturi, beatae reprehenderit at doloremque sunt eaque cum aperiam quod exercitationem ipsam quam minus inventore non qui.",
    ],
  },
  // {
  //   id: "work2",
  //   organizationName: "Company 2",
  //   workDetails: [
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit adipisci labore minima doloribus animi.",
  //     "Excepturi, beatae reprehenderit at doloremque sunt eaque cum aperiam quod exercitationem ipsam quam minus inventore non qui.",
  //   ],
  // },
];

interface WorksBlockProps {
  item: GridItem;
  removeItem: (item: GridItem) => void;
}

export const WorksBlock1: React.FC<WorksBlockProps> = (props) => {
  return (
    <div style={{ margin: 8, fontFamily: "sans-serif" }}>
      <h2 style={{ fontWeight: 600, marginBottom: 0, color: "#123456", display: "inline-block" }}>Work Experience</h2>
      <RemoveBlockButton item={props.item} removeItem={props.removeItem} />
      {works.map((eachWork) => {
        return (
          <div key={eachWork.id} style={{ marginLeft: 12, marginTop: 4, fontSize: 14 }}>
            {/* Work Name */}
            <h4 style={{ fontSize: 20 }}>{eachWork.organizationName}</h4>
            {/* Work Details */}
            <div style={{ marginBottom: 4, marginLeft: 16, marginTop: 4, fontWeight: 500 }}>
              {eachWork.workDetails.map((detail) => {
                return (
                  <div
                    key={detail}
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "start",
                      alignItems: "start",
                      // marginBottom: 4,
                    }}
                  >
                    &bull;&nbsp;{checkHyperlink(detail)}
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>

    // <div >
    //   <h2 style={{ fontWeight: 600, color: "#123456" }}>Other Skills & Activities</h2>
    //   <div style={{ marginTop: 16, paddingLeft: 8 }}>
    //     {[
    //       "Lorem ipsum dolor sit amet consectetur.",
    //       " adipisicing Nulla repellat dolorum earum, accusantium exercit ationem.",
    //       "officiis distinctio ipsa officia soluta minus ideaque fuga.",
    //     ].map((eachLine: string) => {
    //       return (
    //         <div
    //           key={eachLine + uuidv1}
    //           style={{
    //             display: "flex",
    //             flexDirection: "row",
    //             justifyContent: "start",
    //             alignItems: "start",
    //             marginBottom: 6,
    //           }}
    //         >
    //           <div>&bull;&nbsp;</div>
    //           <div style={{ fontSize: 14, fontWeight: 500, color: "#434343" }}>{eachLine}</div>
    //         </div>
    //       );
    //     })}
    //   </div>
    // </div>
  );
};
