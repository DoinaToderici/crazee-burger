import styled from "styled-components";
import Main from "../../reusable-ui/Main";
import NavBar from "../../reusable-ui/NavBar";

export default function OrderPage() {
  //params from url

  return (
    <OrderStyled>
      <div className="container">
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

  .container {
    display: flex;
    flex-direction: column;
    height: 95vh;
  }
`;
