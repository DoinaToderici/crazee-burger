// import { doc, getDoc, setDoc } from "firebase/firestore";
// import { fakeMenu } from "../fakeData";
// import { db } from "./firebase-config";

// export const getUser = async (userId) => {
//   const userRef = doc(db, "users", userId);
//   const userSnap = await getDoc(userRef);
//   if (userSnap.exists()) {
//     console.log("Document user data:", userSnap.data().userName);
//   } else {
//     console.log("No such document!");
//   }
// };

// export const setUser = async (user) => {
//   // Add a new document in collection "users"
//   await setDoc(doc(db, "users", user), {
//     userName: user,
//     menu: fakeMenu.SMALL,
//   });
// };
