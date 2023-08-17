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
      {basket.map((basketProduct, key) => (
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
