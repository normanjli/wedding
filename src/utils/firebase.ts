import { applicationDefault, initializeApp } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

const firebaseConfig = {
  credential: applicationDefault(),
  databaseURL: "https://wedding-3d481.firebaseio.com",
};

export const firebase = initializeApp(firebaseConfig);
export const db = getFirestore(firebase);

export const reservationsCollection = db.collection("reservations");
