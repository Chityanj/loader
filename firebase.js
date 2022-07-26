import firebase from "firebase/app";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyA-o-o30Dxdv859JnufFkM78ARkadE5TEA",
  authDomain: "test-67a1a.firebaseapp.com",
  projectId: "test-67a1a",
  storageBucket: "test-67a1a.appspot.com",
  messagingSenderId: "829943410827",
  appId: "1:829943410827:web:b39879bf63b9a8a706e48e",
}
const firebaseAp = initializeApp(firebaseConfig);
var db = getFirestore(firebaseAp);

const storage = getStorage(firebaseAp);

export { db, storage };
export const auth = getAuth(firebaseAp);
export default firebaseAp;
