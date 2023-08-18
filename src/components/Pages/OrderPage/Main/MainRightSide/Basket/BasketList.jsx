import React, { useContext } from "react";
import styled from "styled-components";
import { AdminContext } from "../../../../../Context/AdminContext";
import Basketcard from "./BasketCard";

export default function BasketList() {
  const { basket, isModeAdmin, handleDeleteBasketProduct, IMG_BY_DEFAULT } =
    useContext(AdminContext);

  const handleOnDelete = (id) => {
    handleDeleteBasketProduct(id);
  };

  return (
    <BasketListStyled>
      {basket.length &&
        basket.map((basketProduct, key) => (
          <div className="basket-card" key={key}>
            <Basketcard
              {...basketProduct}
              imageSource={
                basketProduct.imageSource
                  ? basketProduct.imageSource
                  : IMG_BY_DEFAULT
              }
              onDelete={() => handleOnDelete(basketProduct.id)}
              isModeAdmin={isModeAdmin}
            />
          </div>
        ))}
    </BasketListStyled>
  );
}

const BasketListStyled = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  .basket-card {
    margin: 10px 16px;
    height: 86px;
    box-sizing: border-box;
    :first-child {
      margin-top: 20px;
    }
    :last-child {
      margin-bottom: 20px;
    }
  }
`;
