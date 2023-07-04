
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";
// //import "firebase/firestore";
// const firebaseConfig = {
//   apiKey: "AIzaSyD4Ynu_zU7nvZxcguO8sWM-_4bhDrbGYJs",
//   authDomain: "webtechproject-c1499.firebaseapp.com",
//   projectId: "webtechproject-c1499",
//   storageBucket: "webtechproject-c1499.appspot.com",
//   messagingSenderId: "116514999086",
//   appId: "1:116514999086:web:1e947a1baacfb51bc2c8bf",
//   measurementId: "G-YTXS0XE65E"
// };


// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);
// export const db = getFirestore(app);



// export default app;


import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
//import "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyD4Ynu_zU7nvZxcguO8sWM-_4bhDrbGYJs",
  authDomain: "webtechproject-c1499.firebaseapp.com",
  projectId: "webtechproject-c1499",
  storageBucket: "webtechproject-c1499.appspot.com",
  messagingSenderId: "116514999086",
  appId: "1:116514999086:web:1e947a1baacfb51bc2c8bf",
  measurementId: "G-YTXS0XE65E"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);



export default app;
