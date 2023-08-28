import React, { useContext } from "react";
import styled from "styled-components/macro";
import AdminContext from "../../../../../Context/AdminContext";
import Basketcard from "./BasketCard";
import { FindObjectById } from "../../../../../../utils/array";
import { TransitionGroup, CSSTransition } from "react-transition-group";

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
      <TransitionGroup>
        {basket.length &&
          basket.map((basketProduct) => {
            const menuProduct = FindObjectById(basketProduct.id, menu);

            return (
              <CSSTransition
                appear={true} //pour que le 1er element ait aussi l'animation
                classNames="animation"
                key={basketProduct.id}
                timeout={500}
              >
                <div className="basket-card">
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
                    className={"basket-product-animation"}
                  />
                </div>
              </CSSTransition>
            );
          })}
      </TransitionGroup>
    </BasketListStyled>
  );
}

const BasketListStyled = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  .animation-enter,
  .animation-appear {
    .basket-product-animation {
      transition: 0.5s;
      transform: translateX(100px);
      opacity: 0%;
    }
  }

  .animation-enter-active,
  .animation-appear-active {
    .basket-product-animation {
      transition: 0.5s;
      transform: translateX(0px);
      opacity: 100%;
    }
  }

  .animation-exit {
    .basket-product-animation {
      transition: 0.5s;
      transform: translateX(0px);
      opacity: 1;
    }
  }
  .animation-exit-active {
    .basket-product-animation {
      transition: 0.5s;
      transform: translateX(-100px);
      opacity: 0;
    }
  }

  .basket-card {
    margin: 15px 16px 0;
    height: 86px;
    box-sizing: border-box;

    /* :first-of-type {
      margin-top: 20px;
    } */
    /*
    :last-child {
      margin-bottom: 20px;
    } */
  }
`;
