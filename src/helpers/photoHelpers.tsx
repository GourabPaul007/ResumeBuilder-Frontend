import Avatar1 from "../static/images/avatars/Avatars1Cropped.png";
import Avatar2 from "../static/images/avatars/Avatars2Cropped.png";
import Avatar3 from "../static/images/avatars/Avatars3Cropped.png";
import Avatar4 from "../static/images/avatars/Avatars4Cropped.png";
import Avatar5 from "../static/images/avatars/Avatars5Cropped.png";

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
export const chooseDefaultAvatars = (photoNo: number) => {
  switch (photoNo) {
    case 1:
      return Avatar1;
    case 2:
      return Avatar2;
    case 3:
      return Avatar3;
    case 4:
      return Avatar4;
    case 5:
      return Avatar5;
    default:
      return Avatar1;
  }
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
