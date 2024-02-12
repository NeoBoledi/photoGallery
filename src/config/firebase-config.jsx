import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAg0PeBLrqnEVSmCOCzRVPeb15ePTU5WDQ",
  authDomain: "photo-gallery-f19e8.firebaseapp.com",
  projectId: "photo-gallery-f19e8",
  storageBucket: "photo-gallery-f19e8.appspot.com",
  messagingSenderId: "221376593919",
  appId: "1:221376593919:web:ac0747b8007698bd80f1ca"
};

const app = initializeApp(firebaseConfig);
export default app;