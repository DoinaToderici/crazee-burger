import { useState } from "react";

export const useBasket = () => {
  const [basket, setBasket] = useState();
  return { basket };
};
