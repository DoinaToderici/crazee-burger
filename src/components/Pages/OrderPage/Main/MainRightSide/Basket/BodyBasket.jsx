import styled from "styled-components";
import { theme } from "../../../../../../theme";
import EmptyMsgBasket from "./EmptyMsgBasket";
import BasketList from "./BasketList";
import { isEmpty } from "../../../../../../utils/array";
import { useContext } from "react";
import AdminContext from "../../../../../Context/AdminContext";
import { BASKET_MESSAGE } from "../../../../../../enums/product";

export default function BasketBody() {
  const { basket, menu } = useContext(AdminContext);

  return (
    <BasketBodyStyled>
      {isEmpty(basket) ? (
        <EmptyMsgBasket
          isLoading={
            menu === undefined ? BASKET_MESSAGE.LOADING : BASKET_MESSAGE.EMPTY
          }
        />
      ) : (
        <BasketList />
      )}
    </BasketBodyStyled>
  );
}

const BasketBodyStyled = styled.div`
  flex: 1;
  background: ${theme.colors.background_white};
  box-shadow: ${theme.shadows.basket};
  overflow-y: scroll;
`;
