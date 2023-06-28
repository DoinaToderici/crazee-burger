import React from "react";
import styled from "styled-components";
import { theme } from "../../theme";

export default function Logo({ ...extraProps }) {
  return (
    <LogoStyled {...extraProps}>
      <h1>Crazee</h1>
      <img src="/images/logo-orange.png" alt="Logo" />
      <h1>Burger</h1>
    </LogoStyled>
  );
}

const LogoStyled = styled.div`
  display: flex;
  align-items: center;
  ///transform: scale(2.5); ==> on definie ça dans chaque component où Logo est appellé

  h1 {
    display: inline;
    text-align: center;
    color: ${theme.colors.primary};
    font-size: ${theme.fonts.size.P4};
    line-height: 1rem;
    font-weight: ${theme.fonts.weights.bold};
    text-transform: uppercase;
    letter-spacing: 1.5px;
    font-family: "Amatic SC", cursive;
  }

  img {
    object-fit: contain;
    object-position: center;
    height: 60px;
    width: 80px;
    margin: 0 ${theme.gridUnit / 2}px;
  }
`;
