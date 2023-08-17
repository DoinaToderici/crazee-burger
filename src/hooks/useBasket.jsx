import { useState } from "react";
import { fakeBasket } from "../fakeBasket";
import { deepClone } from "../utils/array";

export const useBasket = () => {
  const [basket, setBasket] = useState(fakeBasket.LARGE_WEIRD);

  const onAddToBasket = (idProductToAdd) => {
    console.log(idProductToAdd);
  };

  const handleDeleteBasketProduct = (id) => {
    const copyBasket = deepClone(basket);
    const producToDelete = copyBasket.filter((item) => item.id !== id);
    setBasket(producToDelete);
  };
  return { basket, onAddToBasket, handleDeleteBasketProduct };
};
