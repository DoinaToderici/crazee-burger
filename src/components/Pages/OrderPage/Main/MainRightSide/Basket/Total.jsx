import { useContext } from "react";
import styled from "styled-components";
import { theme } from "../../../../../../theme";
import { calculateSumToPay, formatPrice } from "../../../../../../utils/maths";
import AdminContext from "../../../../../Context/AdminContext";
import CasinoEffect from "../../../../../reusable-ui/CasinoEffect";
import FooterHeader from "./FooterHeader";

export default function Total() {
  const { basket, menu } = useContext(AdminContext);

  const sumToPay = calculateSumToPay(basket, menu);
  return (
    <FooterHeader>
      <TotalStyled>
        <span className="total">Total</span>
        <CasinoEffect count={formatPrice(sumToPay)} />
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
