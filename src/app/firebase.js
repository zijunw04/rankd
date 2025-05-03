import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

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
