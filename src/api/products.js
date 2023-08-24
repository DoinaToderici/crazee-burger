import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "./firebase-config";

export const syncBothMenu = (userId, menuUpdated) => {
  const location = doc(db, "users", userId);
  const content = {
    userName: userId,
    menu: menuUpdated,
  };
  setDoc(location, content);
};

export const getMenu = async (userId) => {
  const menuRef = doc(db, "users", userId);
  const menuSnap = await getDoc(menuRef);

  if (menuSnap.exists()) {
    const { menu } = menuSnap.data();
    return menu;
  }
};
