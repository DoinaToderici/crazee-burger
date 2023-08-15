import React from "react";
import styled from "styled-components";
import { theme } from "../../../../../../../theme";

export default function SentenceEditForm() {
  return (
    <SentenceEditFormStyled>
      Cliquer sur un produit du menu pour le modifier{""}
      <span className="live-update"> en temps réel</span>
    </SentenceEditFormStyled>
  );
}
const SentenceEditFormStyled = styled.div`
  color: ${theme.colors.primary};
  font-size: ${theme.fonts.size.SM};

  .live-update {
    text-decoration: underline;
  }
`;
