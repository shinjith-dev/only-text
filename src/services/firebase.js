import { initializeApp } from "firebase/app";
import { getDatabase, push, ref, set } from "firebase/database";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAeP75yXIMNultNSWJNMKrORj47fYvoQrs",
  authDomain: "only-text-5ec40.firebaseapp.com",
  projectId: "only-text-5ec40",
  storageBucket: "only-text-5ec40.appspot.com",
  messagingSenderId: "284715440481",
  appId: "1:284715440481:web:8bc189c01ea5aca0188d20",
  databaseURL:
    "https://only-text-5ec40-default-rtdb.asia-southeast1.firebasedatabase.app/",
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

const sendMsg = (msg, dir) => {
  const newChatRef = push(ref(db, `chats/${dir}`));
  set(newChatRef, msg);
};

const storage = getStorage(app);

const auth = getAuth(app);

export { sendMsg, db, auth, storage };
export default sendMsg;
