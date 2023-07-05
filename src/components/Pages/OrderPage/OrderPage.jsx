import styled from "styled-components";
import Main from "./Main/Main";
import NavBar from "./NavBar/NavBar";

export default function OrderPage() {
  //params from url

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
  background: #ffa01b;
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
