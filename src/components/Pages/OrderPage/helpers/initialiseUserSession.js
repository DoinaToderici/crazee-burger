import { getMenu } from "../../../../api/products";
import { getLocalStorage } from "../../../../utils/window";

const initializeMenu = async (username, setMenu) => {
  const menuReceivedFromDB = await getMenu(username);
  setMenu(menuReceivedFromDB);
};

const initializeBasket = (username, setBasket) => {
  const basketReceived = getLocalStorage(username);
  setBasket(basketReceived);
};

export const initialiseUserSession = async (username, setMenu, setBasket) => {
  await initializeMenu(username, setMenu);
  initializeBasket(username, setBasket);
};
