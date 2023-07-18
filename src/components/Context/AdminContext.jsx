import { createContext, useState } from "react";
import { fakeMenu } from "../../fakeData";
import { EMPTY_PRODUCT } from "../../enums/product";

export const AdminContext = createContext();
const IMG_BY_DEFAULT = "/images/coming-soon.png";

export const AdminContextProvider = ({ children }) => {
  const [isModeAdmin, setIsModeAdmin] = useState(true);
  const [collapsed, setCollapsed] = useState(false);
  const [currentTabSelected, setCurrentTabSelected] = useState("edit");
  const [menu, setMenu] = useState(fakeMenu.LARGE);
  const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT);
  const [productSelected, setProductSelected] = useState();

  const handleAdd = (newProduct) => {
    const copyMenu = [...menu];
    const menuUpdated = [newProduct, ...copyMenu];
    setMenu(menuUpdated);
  };

  const handleDelete = (idCurentCard) => {
    const copyMenu = [...menu];
    const menuUpdated = copyMenu.filter((product) => {
      return product.id !== idCurentCard;
    });
    setMenu(menuUpdated);
  };

  const resetMenu = () => {
    setMenu(fakeMenu.LARGE);
  };

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
  };

  return (
    <AdminContext.Provider value={propsAdminContext}>
      {children}
    </AdminContext.Provider>
  );
};
