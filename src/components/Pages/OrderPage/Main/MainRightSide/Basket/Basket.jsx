import React from "react";
import styled from "styled-components";
import BasketBody from "./BodyBasket";
import Footer from "./Footer";
import Total from "./Total";
import { formatPrice } from "../../../../../../utils/maths";
import { useBasket } from "../../../../../../hooks/useBasket";
import { theme } from "../../../../../../theme";

export default function Basket() {
  const { basket } = useBasket();

  return (
    <BasketStyled>
      <Total amountToPay={formatPrice(0)} />
      <BasketBody basket={basket} />
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
`;
