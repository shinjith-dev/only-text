import { initializeApp } from "firebase/app";
import { collection, addDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAeP75yXIMNultNSWJNMKrORj47fYvoQrs",
  authDomain: "only-text-5ec40.firebaseapp.com",
  projectId: "only-text-5ec40",
  storageBucket: "only-text-5ec40.appspot.com",
  messagingSenderId: "284715440481",
  appId: "1:284715440481:web:8bc189c01ea5aca0188d20",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

try {
  const docRef = await addDoc(collection(db, "users"), {
    first: "Ada",
    last: "Lovelace",
    born: 1815,
  });
  console.log("Document written with ID: ", docRef.id);
} catch (e) {
  console.error("Error adding document: ", e);
}

