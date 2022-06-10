import React from "react";

export const checkHyperlink = (str: string): JSX.Element => {
  //new String to be returned
  let newString: string = "";

  const regex = new RegExp(
    "(http|ftp|https|mailto):\\/\\/([\\w_-]+(?:(?:\\.[\\w_-]+)+))([\\w.,@?^=%&:\\/~+#-]*[\\w@?^=%&\\/~+#-])"
  );

  // splits string in arrays to check for each word
  const strArray: string[] = str.split(" ");
  const newArray = [];
  let match: RegExpExecArray | null;

  // Iterate through each word in strArray
  for (let i = 0; i < strArray.length; i++) {
    const element = strArray[i];
    let startIndex: number;

    // If the regex matches
    if ((match = regex.exec(element)) !== null) {
      startIndex = match.index;
      const word = element.substring(0, startIndex - 1);
      const endIndexOfLink = element.indexOf(")", startIndex);
      const url = element.substring(startIndex, endIndexOfLink);

      let hyperLink: string;
      newArray.push(
        <a key={url + word} href={url}>
          {word}&nbsp;
        </a>
      );
    } else {
      newArray.push(`${element} `);
    }
  }
  return <p>{newArray}</p>;

  // strArray.forEach((element) => {
  //   let startIndex: number;
  //   let match: RegExpExecArray | null;

  //   // checks regex and builds the anchor tag
  //   if ((match = regex.exec(element)) !== null) {
  //     startIndex = match.index;
  //     let hyperLink: string;

  //     const word = element.substring(0, startIndex - 1);
  //     const endIndexOfLink = element.indexOf(")", startIndex);
  //     const url = element.substring(startIndex, endIndexOfLink);
  //     hyperLink = `<a href="${url}" style="text-decoration: none;">${word}</a>`;
  //     hyperLinkElement = (
  //       <a href={url} style={{ textDecoration: "none" }}>
  //         {word}
  //       </a>
  //     );
  //     // manages stuff if user added comma(,) or dot(.) after the end of parenthesis.
  //     if (element.length > endIndexOfLink) {
  //       hyperLink += element.substring(endIndexOfLink + 1, element.length);
  //     }
  //     element = hyperLink;
  //   }
  //   // add the custom anchor tag(if it exists, else the same text) to the new string
  //   newString += `${element} `;
  // });
  // return hyperLinkElement;
};
