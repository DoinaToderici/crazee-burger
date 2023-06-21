import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../theme";
import { HiUserCircle } from "react-icons/hi";
import Logo from "./Logo";

export default function NavBar() {
  const { userName } = useParams();
  return (
    <NavBarStyled>
      <div className="container">
        <div className="row align-items-center">
          <Logo className="logoNavBar col-6" />
          <div className="userSection col-6 d-flex justify-content-end">
            <div>
              <p className="mb-0">Hey {userName}!</p>
            </div>
            <HiUserCircle size={36} color={theme.colors.greyBlue} />
          </div>
        </div>
      </div>
    </NavBarStyled>
  );
}

const NavBarStyled = styled.nav`
  background: ${theme.colors.white};
  padding: 1rem 0;
  box-shadow: inset 0px 8px 20px 8px rgba(0, 0, 0, 0.2);
  //border-radius: 0px 0px 15px 15px;

  .logoNavBar {
    transform: initiale;
  }

  .userSection {
    color: ${theme.colors.greyBlue};

    p {
      color: ${theme.colors.primary};
    }

    a {
      text-decoration: none;

      &:hover {
        text-decoration: underline;
        cursor: pointer;
      }
    }
  }
`;
