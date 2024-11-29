// firebase/firebase.ts
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const env = import.meta.env;
const API_KEY = env.VITE_FB_API_KEY;
const AUTH_DOMAIN = env.VITE_FB_AUTH_DOMAIN;
const PROJECT_ID = env.VITE_FB_PROJECT_ID;
const STORAGE_BUCKET = env.VITE_FB_STORAGE_BUCKET;
const MESSAGING_SENDER_ID = env.VITE_FB_MESSAGING_SENDER_ID;
const APP_ID = env.VITE_FB_APP_ID;
const MEASUREMENT_ID = env.VITE_FB_MEASUREMENT_ID;

const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: AUTH_DOMAIN,
  projectId: PROJECT_ID,
  storageBucket: STORAGE_BUCKET,
  messagingSenderId: MESSAGING_SENDER_ID,
  appId: APP_ID,
  measurementId: MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
