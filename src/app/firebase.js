import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { initializeAppCheck, ReCaptchaV3Provider } from 'firebase/app-check';

const firebaseConfig = {
  apiKey: "AIzaSyCnVwyJttnRIGCvfLSdrUEiuc1Ey43B-2g",
  authDomain: "rankd-621b5.firebaseapp.com",
  databaseURL: "https://rankd-621b5-default-rtdb.firebaseio.com",
  projectId: "rankd-621b5",
  storageBucket: "rankd-621b5.appspot.com",
  messagingSenderId: "684480713972",
  appId: "1:684480713972:web:2df73159d58d4ff972faa1",
  measurementId: "G-CR8EMCDSK3"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);

if (typeof window !== 'undefined' && process.env.NODE_ENV === 'development') {
  // @ts-ignore
  self.FIREBASE_APPCHECK_DEBUG_TOKEN = true;
}

export const appCheck = initializeAppCheck(app, {
  provider: new ReCaptchaV3Provider('6Lf4FS4rAAAAAEg_b2GeF4ySAl9twFVljq19KezR'),
  isTokenAutoRefreshEnabled: true
});
