import { doc, setDoc } from "firebase/firestore";
import { db } from "./firebase-config";

export const createProduct = (userId, menuUpdated) => {
  const location = doc(db, "users", userId);
  const content = {
    userName: userId,
    menu: menuUpdated,
  };
  setDoc(location, content);
};
