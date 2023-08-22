import React, { useContext } from "react";
import styled from "styled-components";
import { AdminContext } from "../../../../../Context/AdminContext";
import Basketcard from "./BasketCard";
import { FindObjectById } from "../../../../../../utils/array";

export default function BasketList() {
  const {
    basket,
    menu,
    isModeAdmin,
    handleDeleteBasketProduct,
    IMG_BY_DEFAULT,
  } = useContext(AdminContext);

  const handleOnDelete = (id) => {
    handleDeleteBasketProduct(id);
  };

  return (
    <BasketListStyled>
      {basket.length &&
        basket.map((basketProduct, key) => {
          const menuProduct = FindObjectById(basketProduct.id, menu);

          return (
            <div className="basket-card" key={key}>
              <Basketcard
                {...menuProduct}
                imageSource={
                  menuProduct.imageSource
                    ? menuProduct.imageSource
                    : IMG_BY_DEFAULT
                }
                quantity={basketProduct.quantity}
                onDelete={() => handleOnDelete(menuProduct.id)}
                isModeAdmin={isModeAdmin}
              />
            </div>
          );
        })}
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
