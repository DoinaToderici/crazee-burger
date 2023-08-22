import { useContext } from "react";
import styled from "styled-components";
import { formatPrice } from "../../../../../utils/maths";
import { AdminContext } from "../../../../Context/AdminContext";

import Card from "../../../../reusable-ui/Card";
import Button from "../../../../reusable-ui/Button";
import { theme } from "../../../../../theme";
import { FindObjectById, isEmpty } from "../../../../../utils/array";

export default function Menu() {
  const {
    menu,
    resetMenu,
    isModeAdmin,
    handleDelete,
    productSelected,
    setProductSelected,
    setCollapsed,
    setCurrentTabSelected,
    editTitleInputRef,
    handleAddToBasket,
    handleDeleteBasketProduct,
  } = useContext(AdminContext);

  const handleClick = async (idProductClicked) => {
    if (!isModeAdmin) return; // si je ne suis pas en mode admin et que je click sur un produit, je veux que ça n'impacte pas ma selection de mod admin
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

  const handleAddButton = (e, id) => {
    e.stopPropagation();
    handleAddToBasket(id);
  };

  const handleDeleteCard = (e, id) => {
    e.stopPropagation();
    handleDelete(id);
    handleDeleteBasketProduct(id);
  };

  return (
    <StyledMenu>
      {isEmpty(menu) ? (
        isModeAdmin ? (
          <div className="empty-menu">
            <h2>Le menu est vide ?</h2>
            <h2>Cliquez ci-dessous pour le réinitialiser</h2>
            <Button
              version="primary"
              label="Générer de nouveaux produits"
              onClick={resetMenu}
            />
          </div>
        ) : (
          <div className="empty-menu">
            <h2>Victime de notre succès ! :D</h2>
            <h2>De nouvelles recettes sont en cours de préparation.</h2>
            <h2>À très vite !</h2>
          </div>
        )
      ) : (
        menu.map((product) => {
          return (
            <Card
              id={product.id}
              title={product.title}
              imageSource={product.imageSource}
              leftDescription={formatPrice(product.price)}
              key={product.id}
              onClick={() => handleClick(product.id)}
              isHoverable={isModeAdmin}
              isSelected={checkIfCardIsClicked(product.id, productSelected.id)}
              onAdd={(e) => handleAddButton(e, product.id)}
              onDelete={(e) => {
                handleDeleteCard(e, product.id);
              }}
            ></Card>
          );
        })
      )}
    </StyledMenu>
  );
}

const StyledMenu = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-row-gap: 60px;
  justify-items: center;
  padding: 50px 50px 150px;
  overflow-y: scroll;
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;

  .empty-menu {
    display: flex;
    flex-direction: column;
    justify-content: center;

    h2 {
      text-align: center;
      font-family: "Amatic SC", cursive;
      color: ${theme.colors.greyBlue};
      font-size: ${theme.fonts.size.P4};

      &:not(:first-of-type) {
        margin-top: 20px;
      }
    }

    button {
      margin-top: 30px;
    }
  }
`;
