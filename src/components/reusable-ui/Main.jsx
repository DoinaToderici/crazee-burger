import React from "react";
import styled from "styled-components";
import { theme } from "../../theme";

export default function Main() {
  return <MainStyled></MainStyled>;
}

const MainStyled = styled.div`
  border-radius: 0px 0px 15px 15px;
  flex: 1;
  background: ${theme.colors.background_white};
  box-shadow: inset 0px 8px 20px 8px rgba(0, 0, 0, 0.2);
`;
