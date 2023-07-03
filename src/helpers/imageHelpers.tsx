import Avatars1 from "../static/images/avatars/Avatars1.png";
import Avatars2 from "../static/images/avatars/Avatars2.png";
import Avatars3 from "../static/images/avatars/Avatars3.png";
import Avatars4 from "../static/images/avatars/Avatars4.png";
import Avatars5 from "../static/images/avatars/Avatars5.png";

// Returns a blob type from a base64 string
export const b64toBlob = (b64Data: string, contentType = "", sliceSize = 8) => {
  const byteCharacters = atob(b64Data);
  const byteArrays = [];
  for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
    const slice = byteCharacters.slice(offset, offset + sliceSize);

    const byteNumbers = new Array(slice.length);
    for (let i = 0; i < slice.length; i++) {
      byteNumbers[i] = slice.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);
    byteArrays.push(byteArray);
  }
  const blob = new Blob(byteArrays, { type: contentType });
  return blob;
};

/* Choose a default avatar in case the user doesn't have one stored in localStorage */
export const chooseDefaultAvatars = () => {
  const random = Math.floor(Math.random() * 5) + 1;
  switch (random) {
    case 1:
      return Avatars1;
    case 2:
      return Avatars2;
    case 3:
      return Avatars3;
    case 4:
      return Avatars4;
    case 5:
      return Avatars5;
    default:
      return Avatars1;
  }
  return `Avatars${random}`;
};

// C:\Projects\resume_builder\assets\Avatars1.png
// function getBase64(file: Blob) {
//   let document: string | ArrayBuffer | null = "";
//   let reader = new FileReader();
//   reader.readAsDataURL(file);
//   reader.onload = function () {
//     document = reader.result;
//   };
//   reader.onerror = function (error) {
//     console.log("Error: ", error);
//   };

//   return document;
// }

// const dummyImage = {
//   image: "",
//   style: {
//     bgColor: "#ffffff",
//     textColor: "#000000",
//   },
// };

// const isEmptyImage = (image: string | Blob) => {
//   if (image === "") return true;
//   return false;
// };
