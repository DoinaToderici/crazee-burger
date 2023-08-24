import React from "react";
import styled from "styled-components";
import { BsCloudCheck } from "react-icons/bs";
import { theme } from "../../../../../../../theme";
export default function ModifProductMsg() {
  return (
    <ModifProductMsgStyled>
      <div className="icon">
        <BsCloudCheck />
      </div>
      <span>Modifications enregistrées !</span>
    </ModifProductMsgStyled>
  );
}

const ModifProductMsgStyled = styled.div`
  color: ${theme.colors.blue};
  font-size: ${theme.fonts.size.SM};
  display: flex;
  align-items; center;

  .icon {
    margin: 0 10px;
    font-size: ${theme.fonts.size.P2};
  }

  span {
    line-height : 2;
  }
`;
