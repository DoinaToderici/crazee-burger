import { createContext, useState } from "react";
import { fakeMenu } from "../../fakeData";
import { EMPTY_PRODUCT } from "../../enums/product";

export const AdminContext = createContext();
const IMG_BY_DEFAULT = "/images/coming-soon.png";

export const AdminContextProvider = ({ children }) => {
  const [isModeAdmin, setIsModeAdmin] = useState();
  const [collapsed, setCollapsed] = useState(true);
  const [currentTabSelected, setCurrentTabSelected] = useState();
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

  const handleUpdate = (name, value) => {
    /// DEEP CLONE METHOD

    // 1. structuredClone(ARAY_NAME)

    // 2. JSON.parse(JSON.stringify(ARAY_NAME))
    const copyProductSelected = JSON.parse(JSON.stringify(productSelected));
    const updatedProduct = (copyProductSelected[name] = value);

    setProductSelected(updatedProduct);
    const updatedMenu = menu.map((itemToUpdate) => {
      if (itemToUpdate.id === productSelected.id) {
        return updatedProduct;
      } else {
        return itemToUpdate;
      }
    });
    setMenu(updatedMenu);
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
    handleUpdate,
  };

  return (
    <AdminContext.Provider value={propsAdminContext}>
      {children}
    </AdminContext.Provider>
  );
};
