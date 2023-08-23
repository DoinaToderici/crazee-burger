import styled from "styled-components";
import Main from "./Main/Main";
import NavBar from "./NavBar/NavBar";
import { theme } from "../../../theme";
import { useParams } from "react-router-dom";
import { useContext, useEffect } from "react";
import { AdminContext } from "../../Context/AdminContext";

export default function OrderPage() {
  const { setUrlParam } = useContext(AdminContext);

  //params from url
  const { userName } = useParams();

  useEffect(() => {
    setUrlParam(userName);
  }, []);

  return (
    <OrderStyled>
      <div className="container container-order-page">
        <NavBar />
        <Main />
      </div>
    </OrderStyled>
  );
}

const OrderStyled = styled.div`
  background: ${theme.colors.primary};
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .container-order-page {
    display: flex;
    flex-direction: column;
    height: 95vh;
  }
`;
