import { initializeApp } from "firebase/app";
import { getAuth, RecaptchaVerifier } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCmMboNolrGTlX8kAjkzhw3OsvJDR2DPvo",
  authDomain: "phone-auth-10331.firebaseapp.com",
  projectId: "phone-auth-10331",
  storageBucket: "phone-auth-10331.appspot.com",
  messagingSenderId: "219010059665",
  appId: "1:219010059665:web:ff86812fb1a151edcd1e30",
};

const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);
