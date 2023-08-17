import styled from "styled-components";
import { theme } from "../../../../../../theme";
import EmptyMsgBasket from "./EmptyMsgBasket";
import BasketList from "./BasketList";

export default function BasketBody({ basket }) {
  const idEmptyBasket = basket.length === 0;
  return (
    <BasketBodyStyled>
      {idEmptyBasket ? <EmptyMsgBasket /> : <BasketList />}
    </BasketBodyStyled>
  );
}

const BasketBodyStyled = styled.div`
  flex: 1;
  background: ${theme.colors.background_white};
  box-shadow: ${theme.shadows.basket};
`;
