import { createContext, useRef, useState } from "react";
import { EMPTY_PRODUCT } from "../../enums/product";
import { useMenu } from "../../hooks/useMenu";
import { useBasket } from "../../hooks/useBasket";

export const AdminContext = createContext();
const IMG_BY_DEFAULT = "/images/coming-soon.png";

export const AdminContextProvider = ({ children }) => {
  // states
  const [isModeAdmin, setIsModeAdmin] = useState(true);
  const [collapsed, setCollapsed] = useState(true);
  const [currentTabSelected, setCurrentTabSelected] = useState();
  const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT);
  const editTitleInputRef = useRef();
  const {
    menu,
    setMenu,
    productSelected,
    setProductSelected,
    handleAdd,
    handleDelete,
    handleUpdate,
    resetMenu,
  } = useMenu();
  const { basket, handleDeleteBasketProduct } = useBasket();

  const propsAdminContext = {
    isModeAdmin,
    setIsModeAdmin,
    collapsed,
    setCollapsed,
    currentTabSelected,
    setCurrentTabSelected,
    menu,
    setMenu,
    handleAdd,
    handleDelete,
    resetMenu,
    IMG_BY_DEFAULT,
    newProduct,
    setNewProduct,
    productSelected,
    setProductSelected,
    handleUpdate,
    editTitleInputRef,
    basket,
    handleDeleteBasketProduct,
  };

  return (
    <AdminContext.Provider value={propsAdminContext}>
      {children}
    </AdminContext.Provider>
  );
};
