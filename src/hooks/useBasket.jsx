import { useState } from "react";
import { fakeBasket } from "../fakeBasket";
import {
  deepClone,
  FindObjectById,
  FindIndexById,
  RemoveObjectById,
} from "../utils/array";

export const useBasket = () => {
  const [basket, setBasket] = useState(fakeBasket.EMPTY);

  const handleAddToBasket = (idProductToAdd) => {
    const copyBasket = deepClone(basket);
    const productToAddExistInBasket = FindObjectById(idProductToAdd, basket);

    // 1. Product not exist in basket
    const newProductBasket = {
      id: idProductToAdd,
      quantity: 1,
    };

    const newBasket = [newProductBasket, ...copyBasket];
    setBasket(newBasket);

    // 2èm cas : product alredy exist in basket and  we need change only quantity
    if (productToAddExistInBasket) {
      const indexOfBasketProductToIncrement = FindIndexById(
        idProductToAdd,
        copyBasket
      );
      copyBasket[indexOfBasketProductToIncrement].quantity += 1;
      setBasket(copyBasket);
      return;
    }
  };

  const handleDeleteBasketProduct = (id) => {
    const copyBasket = deepClone(basket);
    const arrayWithoutDeletedProduct = RemoveObjectById(id, copyBasket);
    setBasket(arrayWithoutDeletedProduct);
  };

  return { basket, handleAddToBasket, handleDeleteBasketProduct };
};
