import { useState } from "react";
import { deepClone, RemoveObjectById } from "../utils/array";
import { fakeMenu } from "../fakeData";
import { EMPTY_PRODUCT } from "../enums/product";
import { syncBothMenu } from "../api/products";

export const useMenu = () => {
  const [menu, setMenu] = useState();
  const [productSelected, setProductSelected] = useState(EMPTY_PRODUCT);
  const [urlParam, setUrlParam] = useState("");

  // comportements (gestionnaire d'éveniment or events handlers)
  const handleAdd = (newProduct) => {
    const copyMenu = deepClone(menu);
    const menuUpdated = [newProduct, ...copyMenu];
    setMenu(menuUpdated);
    syncBothMenu(urlParam, menuUpdated);
  };

  const handleDelete = (idCurentCard) => {
    const copyMenu = deepClone(menu);
    const menuUpdated = RemoveObjectById(idCurentCard, copyMenu);

    idCurentCard === productSelected.id && setProductSelected(EMPTY_PRODUCT);
    syncBothMenu(urlParam, menuUpdated);
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
    syncBothMenu(urlParam, cloneMenu);
    setMenu(cloneMenu);
  };

  const resetMenu = () => {
    setMenu(fakeMenu.SMALL);
    syncBothMenu(urlParam, fakeMenu.SMALL);
  };

  return {
    menu,
    setMenu,
    productSelected,
    setProductSelected,
    handleAdd,
    handleDelete,
    handleUpdate,
    resetMenu,
    urlParam,
    setUrlParam,
  };
};
