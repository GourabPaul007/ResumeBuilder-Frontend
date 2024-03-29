import React from "react";

export function checkNewLines(address: string) {
  const addressLinesArray = address.split("<br>");
  return (
    <div>
      {addressLinesArray.map((eachAddressLine) => {
        return (
          <React.Fragment key={eachAddressLine}>
            {eachAddressLine}
            <br />
          </React.Fragment>
        );
      })}
    </div>
  );
}
