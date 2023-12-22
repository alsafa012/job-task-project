// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
     apiKey: import.meta.env.VITE_APIKEY,
     authDomain: import.meta.env.VITE_AUTHDOMAIN,
     projectId: import.meta.env.VITE_PROJECTID,
     storageBucket: import.meta.env.VITE_STORAGEBUCKET,
     messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
     appId: import.meta.env.VITE_APPID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyB9p5IpmDnBfPQsvDf7i11Px6cIYpt_CuY",
//   authDomain: "job-tasj-project.firebaseapp.com",
//   projectId: "job-tasj-project",
//   storageBucket: "job-tasj-project.appspot.com",
//   messagingSenderId: "560821510299",
//   appId: "1:560821510299:web:b8d34aacf567be5e6ae63e"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export default app;