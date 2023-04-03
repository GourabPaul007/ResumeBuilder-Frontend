import { getAuth, User } from "@firebase/auth";
import { doc, getDoc, getFirestore, setDoc } from "firebase/firestore";
import { FormStyles } from "../interfaces/FormStyles";
import { GridItem } from "../interfaces/GridItem";
import { getCurrentUser } from "./userService";

export const isResumeOwner = async (resumeName: string) => {
  const db = getFirestore();
  const user: User = await getCurrentUser();
  try {
    const docRef = doc(db, "resumes", user.uid);
    const docSnap = await getDoc(docRef);
    console.log(docSnap.id);

    if (docSnap.exists() && docSnap.id && docSnap.id !== "" && docSnap.id === resumeName) {
      return true;
    }
  } catch (error) {
    console.log("Error: ", error);
  }
  return false;
};

// METHOD FOR FUTURE IF MULTIPLE RESUMES FOR ONE OWNER
// export const isResumeOwner = async (resumeName: string) => {
//   const auth = getAuth();
//   const db = getFirestore();
//   const user: User = await new Promise((resolve: any, reject: any) =>
//     onAuthStateChanged(
//       auth,
//       (user: any) => resolve(user),
//       (e: any) => reject(e)
//     )
//   );
//   console.log(user);
//   if (user) {
//     try {
//       const docRef = doc(db, "userResumes", user.uid);
//       const docSnap = await getDoc(docRef);
//       if (
//         docSnap.exists() &&
//         docSnap.data().resumeNames[0] &&
//         docSnap.data().resumeNames[0] !== "" &&
//         docSnap.data().resumeNames[0] === resumeName
//       ) {
//         return true;
//       }
//     } catch (error) {
//       console.log("Error: ", error);
//     }
//   }
//   return false;
// };

// export const resumeExists = async () => {
//   const auth = getAuth();
//   const db = getFirestore();
//   const user = auth.currentUser;
//   if (user && user.uid) {
//     try {
//       const docRef = doc(db, "resumes", user.uid);
//       const docSnap = await getDoc(docRef);
//       if (docSnap.exists() && docSnap.data().resumeNames[0] && docSnap.data().resumeNames[0] !== "") {
//         log("Document data: ", docSnap.data());
//         return true;
//       } else {
//         return false;
//       }
//     } catch (error) {
//       log("Error: ", error);
//     }
//   } else {
//     log("No user");
//   }
// };

export const getResumeName = async () => {
  const auth = getAuth();
  const db = getFirestore();
  const user = auth.currentUser;
  if (user !== null) {
    console.log(user.uid);
    try {
      const docRef = doc(db, "userResumes", user.uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists() && docSnap.data().resumeNames[0] && docSnap.data().resumeNames[0] !== "") {
        return docSnap.data().resumeNames[0];
      }
    } catch (error) {
      console.error("Error saving name: ", error);
    }
  }
};

export const saveResumeName = async (resumeName: string) => {
  const auth = getAuth();
  const db = getFirestore();
  const user = auth.currentUser;

  if (user !== null) {
    console.log(user.uid);
    try {
      const resumeNameRef = await setDoc(doc(db, "userResumes", user.uid), {
        resumeNames: [resumeName],
      });
      console.log("Document saved with name: ", resumeNameRef);
    } catch (error) {
      console.error("Error saving name: ", error);
    } finally {
      // navigate("/" + "gourab");
    }
  }
};

export const saveResume = async (formStyles: FormStyles, items: GridItem[], resumeName: string) => {
  const auth = getAuth();
  const db = getFirestore();

  const user = auth.currentUser;

  if (user !== null) {
    console.log(user.uid);
    try {
      const resumeNameRef = await setDoc(doc(db, "resumes", resumeName), {
        formStyles: formStyles,
        layout: items,
      });
      console.log("Document written with ID: ", resumeNameRef);
    } catch (error) {
      console.error("Error adding document: ", error);
    } finally {
      // window.location.href = "/" + resumeName;
    }
  }
};

export const goToYourResume = async () => {
  const db = getFirestore();
  const user: User = await getCurrentUser();
  if (user.uid) {
    console.log(user.uid);

    const docRef = doc(db, "resumes", user.uid);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      window.location.href = `resumes/${user.uid}`;
    } else {
      console.log("No such document!");
      window.location.href = "/create";
    }
  }
};
