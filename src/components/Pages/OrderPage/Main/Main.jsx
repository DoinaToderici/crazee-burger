import React, { useContext } from "react";
import styled from "styled-components";
import { theme } from "../../../../theme";
import Menu from "./MainRightSide/Menu/Menu";
import Admin from "./MainRightSide/Admin/Admin";
import Basket from "./MainRightSide/Basket/Basket";
import AdminContext from "../../../Context/AdminContext";

export default function Main() {
  const { isModeAdmin } = useContext(AdminContext);

  return (
    <MainStyled>
      <Basket />
      <div className="menu-and-admin">
        <Menu />
        {isModeAdmin && <Admin />}
      </div>
    </MainStyled>
  );
}

const MainStyled = styled.div`
  border-radius: 0px 0px 15px 15px;
  height: calc(95vh - 10vh);
  background: ${theme.colors.background_white};
  display: grid;
  grid-template-columns: 1fr 2fr;

  .menu-and-admin {
    position relative;
    overflow-y: hidden;
    display: grid;

  }
`;
