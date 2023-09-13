import React, { useContext } from "react";
import styled from "styled-components";
import BasketBody from "./BodyBasket";
import Footer from "./Footer";
import Total from "./Total";
import { theme } from "../../../../../../theme";
import { AiOutlineCloseCircle } from "react-icons/ai";
import AdminContext from "../../../../../Context/AdminContext";

export default function Basket() {
  const { visibleBasket, setVisibleBasket } = useContext(AdminContext);

  const handleCloseBasket = () => {
    setVisibleBasket(false);
  };

  return (
    <BasketStyled className={visibleBasket ? "show-basket" : "hide-basket"}>
      <AiOutlineCloseCircle
        className="close-basket"
        onClick={handleCloseBasket}
      />
      <Total />
      <BasketBody />
      <Footer />
    </BasketStyled>
  );
}
const BasketStyled = styled.div`
  background: ${theme.colors.background_white};
  box-shadow: ${theme.shadows.basket};
  display: flex;
  flex-direction: column;
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  height: 85vh;
  overflow: hidden;

  .close-basket {
    display: none;
    position: absolute;
    color: yellow;
    display: none;

    @media (max-width: ${theme.medias.sm}) {
      display: block;
    }
  }

  @media (max-width: ${theme.medias.sm}) {
    height: calc(95vh - 18vh);
    position: relative;

    &.show-basket {
      display: flex;
    }

    &.hide-basket {
      display: none;
    }
  }
`;
