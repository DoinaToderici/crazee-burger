import { createContext, useRef, useState } from "react";
import { fakeMenu } from "../../fakeData";
import { EMPTY_PRODUCT } from "../../enums/product";
import { deepClone } from "../../utils/array";

export const AdminContext = createContext();
const IMG_BY_DEFAULT = "/images/coming-soon.png";

export const AdminContextProvider = ({ children }) => {
  // states
  const [isModeAdmin, setIsModeAdmin] = useState(true);
  const [collapsed, setCollapsed] = useState(true);
  const [currentTabSelected, setCurrentTabSelected] = useState();
  const [menu, setMenu] = useState(fakeMenu.LARGE);
  const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT);
  const [productSelected, setProductSelected] = useState(EMPTY_PRODUCT);
  const editTitleInputRef = useRef();

  // comportements (gestionnaire d'éveniment or events handlers)
  const handleAdd = (newProduct) => {
    const copyMenu = deepClone(menu);
    const menuUpdated = [newProduct, ...copyMenu];
    setMenu(menuUpdated);
  };

  const handleDelete = (idCurentCard) => {
    const copyMenu = deepClone(menu);
    const menuUpdated = copyMenu.filter((product) => {
      return product.id !== idCurentCard;
    });
    setMenu(menuUpdated);
  };

  const handleUpdate = (productBeingUpdated) => {
    // 1. Clone Menu
    const cloneMenu = deepClone(menu);

    // 2. trouver l'index du produit dans le menu qui a le même id que le produit qui est dans le FormEdit
    const productToBeChangedInNewmenu = cloneMenu.findIndex(
      (indexProduct) => indexProduct.id === productBeingUpdated.id
    );

    // 3. Dans la copie du menu, au produit qui correspond a celui du form, on lui atribue les donnes du form
    cloneMenu[productToBeChangedInNewmenu] = productBeingUpdated;

    // 4. on SetMenu avec ce nouveau produit
    setMenu(cloneMenu);
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
    editTitleInputRef,
  };

  return (
    <AdminContext.Provider value={propsAdminContext}>
      {children}
    </AdminContext.Provider>
  );
};
