import React from "react";
import styled from "styled-components";
import { theme } from "../../../../../../theme";

export default function EmptyMsgBasket({ isLoading }) {
  return (
    <EmptyMsgBasketStyled>
      <span className="empty-message">{isLoading}</span>
    </EmptyMsgBasketStyled>
  );
}
const EmptyMsgBasketStyled = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  .empty-message {
    display: flex;
    height: calc(95vh - 10vh - 70px - 70px);
    text-align: center;
    flex: 1;
    justify-content: center;
    align-items: center;
    align-self: center;
    line-height: 2;
    font-family: ${theme.fonts.family.stylish};
    font-size: ${theme.fonts.size.P4};
    color: ${theme.colors.greyBlue};
  }
`;
