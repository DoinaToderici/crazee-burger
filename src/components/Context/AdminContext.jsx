import { createContext } from "react";

export default createContext({
  username: "",
  isModeAdmin: false,
  setIsModeAdmin: () => {},

  collapsed: false,
  setCollapsed: () => {},

  currentTabSelected: false,
  setCurrentTabSelected: () => {},

  menu: [],
  handleAdd: () => {},
  handleDelete: () => {},
  handleUpdate: () => {},
  resetMenu: () => {},

  newProduct: {},
  setNewProduct: () => {},

  productSelected: {},
  setProductSelected: () => {},
  handleProductSelected: () => {},

  editTitleInputRef: {},

  basket: [],
  handleAddToBasket: () => {},
  handleDeleteBasketProduct: () => {},
});
