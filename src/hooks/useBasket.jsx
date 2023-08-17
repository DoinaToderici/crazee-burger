import { useState } from "react";
import { fakeBasket } from "../fakeBasket";

export const useBasket = () => {
  const [basket, setBasket] = useState(fakeBasket.LARGE);
  return { basket };
};
