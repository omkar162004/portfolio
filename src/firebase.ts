import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCPnXWU_UMtCL71uv7mCRQ4yHZjLFFX7MU",
  authDomain: "omkar-portfolio-f1ea4.firebaseapp.com",
  projectId: "omkar-portfolio-f1ea4",
  storageBucket: "omkar-portfolio-f1ea4.firebasestorage.app",
  messagingSenderId: "953564786324",
  appId: "1:953564786324:web:1400123c79249ed4000e81",
};

const app = initializeApp(firebaseConfig);

// This is what the rest of your app will import to talk to Firestore.
export const db = getFirestore(app);