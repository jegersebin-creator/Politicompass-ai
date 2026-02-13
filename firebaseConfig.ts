import { initializeApp } from "firebase/app";
import { getFirestore, Firestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID
};

let db: Firestore | null = null;

// Helper to check if a value is effectively valid
// Some build tools replace missing env vars with the string "undefined"
const isValid = (value: string | undefined) => {
    return value && value !== "undefined" && value !== "";
};

// Only initialize Firebase if a Project ID is provided and valid.
if (isValid(firebaseConfig.projectId)) {
  try {
    const app = initializeApp(firebaseConfig);
    db = getFirestore(app);
    console.log("Firebase initialized successfully.");
  } catch (error) {
    console.warn("Firebase initialization error:", error);
  }
} else {
  console.warn("Firebase Project ID missing or invalid. Running in offline/demo mode with Local Storage.");
}

export { db };