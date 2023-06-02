import React from "react";
import logo from "../../images/logo-orange.png";
import styled from "styled-components";
import { theme } from "../../themes";

export default function Logo() {
  return (
    <LogoStyled>
      <span>Crazee</span>
      <img src={logo} alt="Logo" />
      <span>Burger</span>
    </LogoStyled>
  );
}

const LogoStyled = styled.div`
  display: flex;
  align-items: center;
  text-align: center;

  span {
    font-family: ${theme.fonts.family.title};
    font-style: normal;
    font-weight: ${theme.fonts.weights.bold};
    font-size: 110px;
    line-height: 115px;
    letter-spacing: ${theme.spacing.sm};
    text-transform: uppercase;
    color: ${theme.colors.primary};
  }

  img {
    width: 200px;
    height: 150px;
  }
`;
