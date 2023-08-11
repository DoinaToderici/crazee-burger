import { createContext, useState } from "react";
import { fakeMenu } from "../../fakeData";
import { EMPTY_PRODUCT } from "../../enums/product";

export const AdminContext = createContext();
const IMG_BY_DEFAULT = "/images/coming-soon.png";

export const AdminContextProvider = ({ children }) => {
  const [isModeAdmin, setIsModeAdmin] = useState(true);
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

  const handleUpdate = (productBeingUpdated) => {
    // 1. Clone Menu
    const cloneMenu = structuredClone(menu);

    // 2. trouver l'index du produit dans le menu qui a le même id que le produit qui est dans le FormEdit
    const productToBeChangedInNewmenu = cloneMenu.findIndex(
      (indexProduct) => indexProduct.id === productBeingUpdated.id
    );

    // 3. Dans la copie du menu, au produit qui correspond a celui du form, on lui atribue les donnes du form
    cloneMenu[productToBeChangedInNewmenu] = productBeingUpdated;

    // 4. on SetMenu avec ce nouveau produit
    setMenu(cloneMenu);

    /// DEEP CLONE METHOD
    // 1. structuredClone(ARAY_NAME)
    // 2. JSON.parse(JSON.stringify(ARAY_NAME))
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
