import React from "react";
import styled from "styled-components";

export default function BasketList({ basket }) {
  return (
    <BasketListStyled>
      {basket.map((itemBasket, key) => (
        <div key={key}>item basket</div>
      ))}
    </BasketListStyled>
  );
}

const BasketListStyled = styled.div`
  /* border: 1px solid red; */
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;

  .basket-card {
    /* border: 1px solid blue; */
    margin: 10px 16px;
    height: 86px;
    box-sizing: border-box;
    :first-child {
      margin-top: 20px;
      /* border: 1px solid red; */
    }
    :last-child {
      margin-bottom: 20px;
    }
  }
`;
