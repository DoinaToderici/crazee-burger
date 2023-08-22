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
    productSelected,
    handleProductSelected,
    checkIfCardIsClicked,
  } = useContext(AdminContext);

  const handleOnDelete = (e, id) => {
    e.stopPropagation();
    handleDeleteBasketProduct(id);
  };

  const handleOnClick = (e, idBasketProduct) => {
    e.preventDefault();
    handleProductSelected(idBasketProduct);
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
                onDelete={(e) => handleOnDelete(e, menuProduct.id)}
                isClickable={isModeAdmin}
                onClick={
                  isModeAdmin
                    ? (e) => {
                        handleOnClick(e, menuProduct.id);
                      }
                    : null
                }
                isSelected={checkIfCardIsClicked(
                  menuProduct.id,
                  productSelected.id
                )}
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
