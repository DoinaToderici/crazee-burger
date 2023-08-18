import { useState } from "react";
import { fakeBasket } from "../fakeBasket";
import { deepClone, FindInArray, FindIndex } from "../utils/array";

export const useBasket = () => {
  const [basket, setBasket] = useState(fakeBasket.EMPTY);

  const handleAddToBasket = (productToAdd) => {
    const copyBasket = deepClone(basket);
    const productToAddExistInBasket =
      FindInArray(productToAdd.id, basket) !== undefined;

    //  1er cas : product do not exist in basket and we wont to add it
    if (!productToAddExistInBasket) {
      const newBasketProduct = { ...productToAdd, quantity: 1 };
      const updatedBasket = [newBasketProduct, ...copyBasket];
      setBasket(updatedBasket);
      return;
    }

    // 2èm cas : product alredy exist in basket and  we need change only quantity
    if (productToAddExistInBasket) {
      const indexOfBasketProductToIncrement = FindIndex(
        productToAdd.id,
        copyBasket
      );
      copyBasket[indexOfBasketProductToIncrement].quantity += 1;
      setBasket(copyBasket);
      return;
    }
  };

  const handleDeleteBasketProduct = (id) => {
    const copyBasket = deepClone(basket);
    const producToDelete = copyBasket.filter((item) => item.id !== id);
    setBasket(producToDelete);
  };
  return { basket, handleAddToBasket, handleDeleteBasketProduct };
};
