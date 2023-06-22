import styled from "styled-components";

export default function Card() {
  return <CardStyled>Card</CardStyled>;
}

const CardStyled = styled.div`
  background: yellow;
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
`;
