import React from "react";
import styled from "styled-components";
import { theme } from "../../../../theme/index";
import { reloadPage } from "../../../../utils/window";
import Logo from "../../../reusable-ui/Logo";
import NavbarRightSide from "./NavbarRightSide";

export default function NavBar() {
  return (
    <NavBarStyled>
      <Logo className="logoNavBar" onClick={reloadPage} />
      <NavbarRightSide />
    </NavBarStyled>
  );
}

const NavBarStyled = styled.nav`
  background: ${theme.colors.white};
  border-radius: 15px 15px 0px 0px;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${theme.colors.greyLight};

  @media (max-width: ${theme.medias.md}) {
    flex-direction: column;
  }

  @media (max-width: ${theme.medias.sm}) {
    padding: 1rem;
  }

  .logoNavBar {
    transform: initiale;

    @media (max-width: ${theme.medias.xs}) {
      transform: scale(0.7);
    }

    &:hover {
      cursor: pointer;
    }
  }
`;
