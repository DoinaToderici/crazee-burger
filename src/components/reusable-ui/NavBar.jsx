import React from "react";
import styled from "styled-components";
import { theme } from "../../theme/index";
import { reloadPage } from "../../utils/window";
import Logo from "./logo";
import Profile from "./Profile";

export default function NavBar() {
  return (
    <NavBarStyled>
      <div className="d-flex align-items-center justify-content-between">
        <Logo className="logoNavBar" onClick={reloadPage} />
        <Profile />
      </div>
    </NavBarStyled>
  );
}

const NavBarStyled = styled.nav`
  background: ${theme.colors.white};
  border-radius: 15px 15px 0px 0px;
  padding: 1rem 2rem;
  border-bottom: 1px solid ${theme.colors.greyLight};

  .logoNavBar {
    transform: initiale;

    &:hover {
      cursor: pointer;
    }
  }
`;
