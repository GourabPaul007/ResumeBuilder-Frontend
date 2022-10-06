// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: process.env.RESUME_BUILDER_FIREBASE_API_KEY,
  authDomain: process.env.RESUME_BUILDER_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.RESUME_BUILDER_FIREBASE_PROJECT_ID,
  storageBucket: process.env.RESUME_BUILDER_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.RESUME_BUILDER_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.RESUME_BUILDER_FIREBASE_APP_ID,
  measurementId: process.env.RESUME_BUILDER_FIREBASE_MEASUREMENT_ID,
};

// const analytics = getAnalytics(app);
