import { useContext } from "react";
import styled from "styled-components";
import { theme } from "../../../../../../theme";
import FooterHeader from "./FooterHeader";
import AdminContext from "../../../../../Context/AdminContext";
import { formatPrice } from "../../../../../../utils/maths";
import { FindObjectById } from "../../../../../../utils/array";

export default function Total() {
  const { menu, basket } = useContext(AdminContext);

  const sumToPay = basket.reduce((total, basketProduct) => {
    const menuProduct = FindObjectById(basketProduct.id, menu);
    if (isNaN(menuProduct.price)) return total;
    total += menuProduct.price * basketProduct.quantity;
    return total;
  }, 0);

  return (
    <FooterHeader>
      <TotalStyled>
        <span className="total">Total</span>
        <span className="amount">{formatPrice(sumToPay)}</span>
      </TotalStyled>
    </FooterHeader>
  );
}

const TotalStyled = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${theme.colors.primary};
  font-family: "Amatic SC", cursive;
  font-size: ${theme.fonts.size.P4};
  font-weight: ${theme.fonts.weights.bold};
  letter-spacing: 2px;
`;
