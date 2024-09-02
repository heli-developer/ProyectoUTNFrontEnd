import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBMlLWLj1eefyRmmb7tj-pXVmIBDFPc-jc",
  authDomain: "tienda-react-9497f.firebaseapp.com",
  projectId: "tienda-react-9497f",
  storageBucket: "tienda-react-9497f.appspot.com",
  messagingSenderId: "491991360400",
  appId: "1:491991360400:web:8ba7492de6560db708c915"
};


export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)