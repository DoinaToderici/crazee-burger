import { useContext } from "react";
import styled from "styled-components";
import { formatPrice } from "../../../../../../utils/maths";
import AdminContext from "../../../../../Context/AdminContext";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Card from "../../../../../reusable-ui/Card";
import { isEmpty } from "../../../../../../utils/array";
import EmptyAdminMenu from "./EmptyMsgMenu/EmptyAdminMenu";
import EmptyClientMenu from "./EmptyMsgMenu/EmptyClientMenu";
import Loader from "./EmptyMsgMenu/Loader";
import { menuCardAnimation } from "../../../../../../theme/animations";
import { theme } from "../../../../../../theme";

export default function Menu() {
  const {
    menu,
    resetMenu,
    isModeAdmin,
    handleDelete,
    productSelected,
    handleAddToBasket,
    handleDeleteBasketProduct,
    handleProductSelected,
    checkIfCardIsClicked,
  } = useContext(AdminContext);

  const handleClick = async (idProductClicked) => {
    if (!isModeAdmin) return; // si je ne suis pas en mode admin et que je click sur un produit, je veux que ça n'impacte pas ma selection de mod admin
    handleProductSelected(idProductClicked);
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

  //affichage
  if (menu === undefined) return <Loader />;
  if (isEmpty(menu)) {
    if (isModeAdmin) return <EmptyAdminMenu onReset={resetMenu} />;
    return <EmptyClientMenu />;
  }

  return (
    <TransitionGroup component={MenuStyled}>
      {menu.map((product) => {
        return (
          <CSSTransition
            key={product.id}
            timeout={300}
            classNames={"animation-card-menu"}
          >
            <Card
              id={product.id}
              title={product.title}
              imageSource={product.imageSource}
              leftDescription={formatPrice(product.price)}
              onClick={isModeAdmin ? () => handleClick(product.id) : null}
              isHoverable={isModeAdmin}
              isSelected={checkIfCardIsClicked(product.id, productSelected.id)}
              onAdd={(e) => handleAddButton(e, product.id)}
              onDelete={(e) => {
                handleDeleteCard(e, product.id);
              }}
            ></Card>
          </CSSTransition>
        );
      })}
    </TransitionGroup>
  );
}

const MenuStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-row-gap: 60px;
  justify-items: center;
  padding: 50px 50px 150px;
  overflow-y: scroll;
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;

  @media (max-width: ${theme.medias.sm}) {
    padding: 35px 0;
    height: 80vh;
  }

  ${menuCardAnimation}
`;
