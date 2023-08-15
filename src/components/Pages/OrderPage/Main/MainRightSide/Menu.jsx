import { useContext } from "react";
import styled from "styled-components";
import { formatPrice } from "../../../../../utils/maths";
import { AdminContext } from "../../../../Context/AdminContext";

import Card from "../../../../reusable-ui/Card";
import Button from "../../../../reusable-ui/Button";
import { theme } from "../../../../../theme";

export default function Menu() {
  const {
    menu,
    resetMenu,
    isModeAdmin,
    productSelected,
    setProductSelected,
    setCollapsed,
    setCurrentTabSelected,
    editTitleInputRef,
  } = useContext(AdminContext);

  const handleClick = async (idProductClicked) => {
    if (!isModeAdmin) return; // si je ne suis pas en mode admin et que je click sur un produit, je veux que ça n'impacte pas ma selection de mod admin
    const ProductClickedOn = menu.find((item) => item.id === idProductClicked);
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

  return (
    <StyledMenu>
      {menu.length === 0 ? (
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
        menu.map(({ id, title, imageSource, price }) => {
          return (
            <Card
              id={id}
              title={title}
              imageSource={imageSource}
              leftDescription={formatPrice(price)}
              key={id}
              onClick={() => handleClick(id)}
              isHoverable={isModeAdmin}
              isSelected={checkIfCardIsClicked(id, productSelected.id)}
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
