import React from "react";
import styled from "styled-components";
import { theme } from "../../../../../../../theme";

export default function MsgInfoEdit() {
  return (
    <MsgInfoEditStyled>
      <span className="sentence">
        Cliquer sur un produit du menu pour le modifier{""}
        <span className="live-update"> en temps réel</span>
      </span>
    </MsgInfoEditStyled>
  );
}
const MsgInfoEditStyled = styled.div`
  color: ${theme.colors.primary};
  font-size: ${theme.fonts.size.SM};

  .live-update {
    text-decoration: underline;
  }
`;
