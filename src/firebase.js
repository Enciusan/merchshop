import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyChdMHi7vT5mkHw5o1481erfHrpHQV3umo",
  authDomain: "nnfc-merch.firebaseapp.com",
  databaseURL: "https://nnfc-merch-default-rtdb.firebaseio.com",
  projectId: "nnfc-merch",
  storageBucket: "nnfc-merch.appspot.com",
  messagingSenderId: "1092658710275",
  appId: "1:1092658710275:web:89dbaf63ba04d521774b36",
  measurementId: "G-VY5QPK5BWZ"
};

export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);