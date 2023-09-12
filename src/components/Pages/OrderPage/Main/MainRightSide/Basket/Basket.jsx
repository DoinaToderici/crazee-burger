import React from "react";
import styled from "styled-components";
import BasketBody from "./BodyBasket";
import Footer from "./Footer";
import Total from "./Total";
import { theme } from "../../../../../../theme";

export default function Basket() {
  return (
    <BasketStyled>
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

  @media (max-width: ${theme.medias.md}) {
    height: calc(95vh - 18vh);
  }

  @media (max-width: ${theme.medias.sm}) {
    display: none;
  }
`;
