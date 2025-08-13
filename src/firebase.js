import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCDgPRdjLwahjv2yM5JN2sTIJu2D87HwMc",
  authDomain: "sabor-natural-48f10.firebaseapp.com",
  projectId: "sabor-natural-48f10",
  storageBucket: "sabor-natural-48f10.appspot.com",
  messagingSenderId: "783896483495",
  appId: "1:783896483495:web:d43d4816950527ed75ad82",
  measurementId: "G-NVYLDGLGXF"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);