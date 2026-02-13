import { initializeApp } from "firebase/app";
import { getFirestore, Firestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// Configuration using the credentials provided
const firebaseConfig = {
  apiKey: "AIzaSyAXHy52wG7MDtLCFfC9L54SOw_4SsqKMaE",
  authDomain: "politicompass-75937.firebaseapp.com",
  projectId: "politicompass-75937",
  storageBucket: "politicompass-75937.firebasestorage.app",
  messagingSenderId: "49541200611",
  appId: "1:49541200611:web:088bf54c9fb60b808b23d6",
  measurementId: "G-8SKEC7SM9T"
};

let db: Firestore | null = null;
let app: any = null;
let analytics: any = null;

// Helper to check if a value is effectively valid
const isValid = (value: string | undefined) => {
    return value && value !== "undefined" && value !== "";
};

// Only initialize Firebase if a Project ID is provided and valid.
if (isValid(firebaseConfig.projectId)) {
  try {
    app = initializeApp(firebaseConfig);
    db = getFirestore(app);
    
    // Initialize Analytics only if in a browser environment
    if (typeof window !== 'undefined') {
      analytics = getAnalytics(app);
    }
    
    console.log("Firebase initialized successfully with project:", firebaseConfig.projectId);
  } catch (error) {
    console.warn("Firebase initialization error:", error);
  }
} else {
  console.warn("Firebase Project ID missing or invalid. Running in offline/demo mode with Local Storage.");
}

export { app, db, analytics };