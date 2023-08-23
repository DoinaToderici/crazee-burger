import React from "react";
import styled from "styled-components";
import { theme } from "../../../../../../../theme";

export default function EmptyMsgMenu({ children }) {
  return <EmptyMsgMenuStyled>{children}</EmptyMsgMenuStyled>;
}

const EmptyMsgMenuStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  h2 {
    text-align: center;
    font-family: "Amatic SC", cursive;
    color: ${theme.colors.greyBlue};
    font-size: ${theme.fonts.size.P4};

    &:not(:first-of-type) {
      margin-top: 20px;
    }
  }

  button {
    width: fit-content;
    margin: 30px auto 0;
  }
`;
