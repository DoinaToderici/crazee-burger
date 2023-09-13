import { useContext } from "react";
import styled from "styled-components";
import { theme } from "../../../../../../theme";
import { calculateSumToPay, formatPrice } from "../../../../../../utils/maths";
import AdminContext from "../../../../../Context/AdminContext";
import CasinoEffect from "../../../../../reusable-ui/CasinoEffect";
import FooterHeader from "./FooterHeader";
import { AiOutlineCloseCircle } from "react-icons/ai";

export default function Total() {
  const { basket, menu, setVisibleBasket } = useContext(AdminContext);

  const handleCloseBasket = () => {
    setVisibleBasket(false);
  };
  const sumToPay = calculateSumToPay(basket, menu);
  return (
    <FooterHeader>
      <TotalStyled>
        <span className="total">Total</span>
        <CasinoEffect count={formatPrice(sumToPay)} />
        <AiOutlineCloseCircle
          className="close-basket"
          onClick={handleCloseBasket}
        />
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

  .close-basket {
    color: ${theme.colors.primary};
    display: none;
    font-size: ${theme.fonts.size.P3};

    @media (max-width: ${theme.medias.sm}) {
      display: block;
    }
  }
`;
