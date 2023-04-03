import { getAuth, onAuthStateChanged, User } from "firebase/auth";
import { doc, getDoc, getFirestore, setDoc } from "firebase/firestore";

// Get the current user for different purposes.
export const getCurrentUser = (): Promise<User> => {
  const auth = getAuth();
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      unsubscribe();
      if (user) {
        resolve(user);
      } else {
        reject("");
        window.location.href = "/login";
      }
    });
  });
};

// GET USER DATA FROM UID
export const getUserData = async (userId: string) => {
  try {
    const auth = getAuth();
    // get email
    const email: string = auth.currentUser && auth.currentUser.email ? auth.currentUser.email : "";
    // get name
    const db = getFirestore();
    const docRef = doc(db, "users", userId);
    const docSnap = await getDoc(docRef);
    const fullName: string = docSnap.data() ? docSnap.data()!.fullName : "";
    return { userId: userId, userEmail: email, fullName: fullName };
  } catch (error) {
    console.error(error);
    return { userId: "userId", userEmail: "email", fullName: "fullName" };
  }
};

// Save the current user's profile information to Firebase.
export const saveCurrentProfile = async (
  userId: string,
  fullName: string,
  userEmail: string,
  resumeLinks: string[]
) => {
  try {
    const db = getFirestore();
    // Save the current user
    await setDoc(doc(db, "users", userId), {
      fullName: fullName,
      userEmail: userEmail,
      resumeLinks: resumeLinks,
    });
  } catch (error) {
    console.error(error);
  }
};
