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

  const handleAddToBasket = (productToAdd) => {
    const copyBasket = deepClone(basket);
    const productToAddExistInBasket =
      FindObjectById(productToAdd.id, basket) !== undefined;

    //  1er cas : product do not exist in basket and we wont to add it
    if (!productToAddExistInBasket) {
      const newBasketProduct = { ...productToAdd, quantity: 1 };
      const updatedBasket = [newBasketProduct, ...copyBasket];
      setBasket(updatedBasket);
      return;
    }

    // 2èm cas : product alredy exist in basket and  we need change only quantity
    if (productToAddExistInBasket) {
      const indexOfBasketProductToIncrement = FindIndexById(
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
    const arrayWithoutDeletedProduct = RemoveObjectById(id, copyBasket);
    setBasket(arrayWithoutDeletedProduct);
  };

  const totalBasket = basket.reduce((total, basketProduct) => {
    if (isNaN(basketProduct.price)) return total;
    let totalproductPrice = basketProduct.price * basketProduct.quantity;
    return total + totalproductPrice;
  }, 0);

  return { basket, handleAddToBasket, handleDeleteBasketProduct, totalBasket };
};
