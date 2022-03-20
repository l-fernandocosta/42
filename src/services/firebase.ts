
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getDatabase } from 'firebase/database'

const firebaseConfig = {

  apiKey: process.env.REACT_APP_FB_API_KEY,
  authDomain: process.env.REACT_APP_FB_AUTH_DOMAIN,
  databaseURL:process.env.REACT_APP_FB_DB_URL ,
  projectId:process.env.REACT_APP_FB_PROJECT_ID ,
  storageBucket:process.env.REACT_APP_FB_STORAGE_BUCKET,
  messagingSenderId:process.env.REACT_APP_FB_MESSAGING_SENDER ,
  appId: process.env.REACT_APP_FB_APP_ID

};


// Initialize Firebase

export const app = initializeApp(firebaseConfig);

export const Auth = getAuth(app);
export const db = getDatabase(app);