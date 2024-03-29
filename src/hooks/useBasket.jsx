import { useState } from "react";
import { useParams } from "react-router-dom";
import {
  deepClone,
  FindObjectById,
  FindIndexById,
  RemoveObjectById,
} from "../utils/array";
import { setLocalStorage } from "../utils/window";

export const useBasket = () => {
  const [basket, setBasket] = useState([]);
  const { username } = useParams();
  const [visibleBasket, setVisibleBasket] = useState(false);

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
    setLocalStorage(username, newBasket);

    // 2èm cas : product alredy exist in basket and  we need change only quantity
    if (productToAddExistInBasket) {
      const indexOfBasketProductToIncrement = FindIndexById(
        idProductToAdd,
        copyBasket
      );
      copyBasket[indexOfBasketProductToIncrement].quantity += 1;
      setBasket(copyBasket);
      setLocalStorage(username, copyBasket);
      return;
    }
  };

  const handleDeleteBasketProduct = (id) => {
    const copyBasket = deepClone(basket);
    const arrayWithoutDeletedProduct = RemoveObjectById(id, copyBasket);
    setLocalStorage(username, arrayWithoutDeletedProduct);
    setBasket(arrayWithoutDeletedProduct);
  };

  const handleToggleBasket = () => {
    setVisibleBasket(true);
  };

  return {
    basket,
    setBasket,
    handleAddToBasket,
    handleDeleteBasketProduct,
    visibleBasket,
    setVisibleBasket,
    handleToggleBasket,
  };
};
