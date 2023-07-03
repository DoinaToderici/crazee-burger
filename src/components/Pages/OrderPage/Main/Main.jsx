import React, { useContext } from "react";
import styled from "styled-components";
import { theme } from "../../../../theme";
import Menu from "./MainRightSide/Menu";
import Admin from "./MainRightSide/Admin/Admin";
import { AdminContext } from "../../../Context/AdminContext";

export default function Main() {
  const { isModeAdmin } = useContext(AdminContext);

  return (
    <MainStyled>
      {/* <div className="basket">Basket</div> */}
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
  box-shadow: inset 0px 8px 20px 8px rgba(0, 0, 0, 0.2);
  display: grid;
  grid-template-columns: 1fr;
  overflow: scroll;

  .basket {
    background: purple;
    color: white;
  }

  .menu-and-admin {
    position relative;
    overflow-y: hidden;
    display: grid;

  }
`;
