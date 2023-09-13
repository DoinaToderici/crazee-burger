import styled from "styled-components";
import Main from "./Main/Main";
import NavBar from "./NavBar/NavBar";
import { theme } from "../../../theme";
import { useEffect, useRef, useState } from "react";
import { EMPTY_PRODUCT } from "../../../enums/product";
import { useMenu } from "../../../hooks/useMenu";
import { useBasket } from "../../../hooks/useBasket";
import { FindObjectById } from "../../../utils/array";
import { useParams } from "react-router-dom";
import AdminContext from "../../Context/AdminContext";
import { initialiseUserSession } from "./helpers/initialiseUserSession";
const IMG_BY_DEFAULT = "/images/coming-soon.png";

export default function OrderPage() {
  // states
  const [isModeAdmin, setIsModeAdmin] = useState(false);
  const [collapsed, setCollapsed] = useState(true);
  const [currentTabSelected, setCurrentTabSelected] = useState();
  const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT);
  const editTitleInputRef = useRef();

  const {
    menu,
    setMenu,
    handleAdd,
    handleDelete,
    handleUpdate,
    resetMenu,
    productSelected,
    setProductSelected,
  } = useMenu();
  const {
    basket,
    setBasket,
    handleAddToBasket,
    handleDeleteBasketProduct,
    visibleBasket,
    setVisibleBasket,
    handleToggleBasket,
    totalQuantity,
  } = useBasket();
  const { username } = useParams();

  /// COMPORTEMENT

  // initialise user session
  useEffect(() => {
    initialiseUserSession(username, setMenu, setBasket);
  }, []);

  const handleProductSelected = async (idProductClicked) => {
    const ProductClickedOn = FindObjectById(idProductClicked, menu);
    if (isModeAdmin) {
      await setCurrentTabSelected("edit");
    }
    await setProductSelected(ProductClickedOn);
    await setCollapsed(false);
    editTitleInputRef.current.focus();
  };

  const checkIfCardIsClicked = (productMenuId, productClickedId) => {
    return productMenuId === productClickedId;
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
    basket,
    handleDeleteBasketProduct,
    handleAddToBasket,
    handleProductSelected,
    checkIfCardIsClicked,
    username,
    visibleBasket,
    setVisibleBasket,
    handleToggleBasket,
    totalQuantity,
  };

  return (
    <AdminContext.Provider value={propsAdminContext}>
      <OrderStyled>
        <div className="container container-order-page">
          <NavBar />
          <Main />
        </div>
      </OrderStyled>
    </AdminContext.Provider>
  );
}

const OrderStyled = styled.div`
  background: ${theme.colors.primary};
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .container-order-page {
    display: flex;
    flex-direction: column;
    height: 95vh;
  }
`;
