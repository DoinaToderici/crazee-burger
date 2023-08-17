import React, { createContext, useState } from "react";

export const BasketContext = createContext();

export const BasketContextProvider = ({ children }) => {
  const [prodAddeBasket, setProdAddeBasket] = useState("hey");

  const propsBasketContext = {
    prodAddeBasket,
    setProdAddeBasket,
  };

  return (
    <BasketContext.Provider value={propsBasketContext}>
      {children}
    </BasketContext.Provider>
  );
};
