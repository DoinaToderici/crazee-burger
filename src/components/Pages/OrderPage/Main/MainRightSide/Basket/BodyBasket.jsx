import React, { useContext } from "react";
import styled from "styled-components";
import { theme } from "../../../../../../theme";
import { BasketContext } from "../../../../../Context/BasketContext";
import EmptyMsgBasket from "./EmptyMsgBasket";

export default function BasketBody() {
  const { prodAddeBasket } = useContext(BasketContext);

  return (
    <BasketBodyStyled>
      <EmptyMsgBasket />
    </BasketBodyStyled>
  );
}

const BasketBodyStyled = styled.div`
  flex: 1;
  background: ${theme.colors.background_white};
  box-shadow: ${theme.shadows.basket};
`;
