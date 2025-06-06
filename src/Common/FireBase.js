// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { APIKEY,AUTHDOMAIN,PROJECT_ID,STORAGEBUCKET,MESSAGINGSENDER_ID,APP_ID ,MEASUREMENT_ID} from "../../Utility/Config.js";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// console.log("API KEY", APIKEY,AUTHDOMAIN,PROJECT_ID,STORAGEBUCKET,MESSAGINGSENDER_ID,APP_ID,MEASUREMENT_ID); // should NOT be undefined
const firebaseConfig = {
  apiKey: APIKEY,
  authDomain: AUTHDOMAIN,
  projectId:PROJECT_ID,
  storageBucket:STORAGEBUCKET,
  messagingSenderId:MESSAGINGSENDER_ID,
  appId:APP_ID,
  measurementId: MEASUREMENT_ID
};



// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// const firebaseConfig = {
//   apiKey: "AIzaSyC3WrXjtmvIR0g1JVoj1EWt743QSDyj8-I",
//   authDomain: "servy-e90e9.firebaseapp.com",
//   projectId: "servy-e90e9",
//   storageBucket: "servy-e90e9.firebasestorage.app",
//   messagingSenderId: "458098177376",
//   appId: "1:458098177376:web:125a0cf1aa0826fb3e5a05",
//   measurementId: "G-EM7RDM6D77"
// };
