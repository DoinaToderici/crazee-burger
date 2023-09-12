import React from "react";
import styled from "styled-components";
import { theme } from "../../../theme";

export default function WelcomeMsg() {
  return (
    <WelcomeMsgStyled>
      <h1>Bienvenue chez nous </h1>
      <hr />
      <h2>Connectez-vous</h2>
    </WelcomeMsgStyled>
  );
}
const WelcomeMsgStyled = styled.div`
  hr {
    border: 2px solid ${theme.colors.primary};
    opacity: 1;
    margin-bottom: ${theme.gridUnit * 2}px;
  }

  h1 {
    color: ${theme.colors.white};
    font-size: ${theme.fonts.size.P5};

    @media (max-width: ${theme.medias.sm}) {
      font-size: ${theme.fonts.size.P4};
    }
  }

  h2 {
    margin: 20px 10px 10px;
    color: ${theme.colors.white};
    font-size: ${theme.fonts.size.P4};

    @media (max-width: ${theme.medias.sm}) {
      font-size: ${theme.fonts.size.P3};
    }
  }
`;
