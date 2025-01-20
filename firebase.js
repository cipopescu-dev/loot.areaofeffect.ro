import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import {
  getDatabase,
  ref,
  child,
  get,
} from "https://www.gstatic.com/firebasejs/11.2.0/firebase-database.js";
const firebaseConfig = {
  apiKey: "AIzaSyBA131MO7vGdqAxDhHWg50rJ5PIQLVMVt4",
  // yes, this is public :)
  authDomain: "ro-areaofeffect.firebaseapp.com",
  projectId: "ro-areaofeffect",
  storageBucket: "ro-areaofeffect.firebasestorage.app",
  databaseURL:
    "https://ro-areaofeffect-default-rtdb.europe-west1.firebasedatabase.app/",
  messagingSenderId: "213408469549",
  appId: "1:213408469549:web:a1df502c5ed0587896dea4",
};
initializeApp(firebaseConfig);
const database = ref(getDatabase());

export default async function readFirebase(path) {
  return await get(child(database, path))
    .then((snapshot) => {
      if (snapshot.exists()) {
        return snapshot.val();
      } else {
        console.log("No data available");
        return {};
      }
    })
    .catch((error) => {
      console.error(error);
      return {};
    });
}
