import { doc, getDoc, setDoc } from "firebase/firestore";
import { fakeMenu } from "../fakeData";
import { db } from "./firebase-config";

export const getUser = async (userId) => {
  const userRef = doc(db, "users", userId);
  const userSnap = await getDoc(userRef);
  if (userSnap.exists()) {
    console.log("Document user data:", userSnap.data().userName);
  } else {
    console.log("No such document!");
  }
};

export const setUser = async (userId) => {
  // Add a new document in collection "users"
  await setDoc(doc(db, "users", userId), {
    userName: userId,
    menu: fakeMenu.SMALL,
  });
};

export const authentificateUser = async (userId) => {
  const existingUser = await getUser(userId);

  if (!existingUser) {
    setUser(userId);
  }
};
