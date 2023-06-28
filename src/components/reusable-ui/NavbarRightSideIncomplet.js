import React from "react";
import "react-toastify/dist/ReactToastify.css";
import { theme } from "../../theme/index";
import { ToastContainer } from "react-toastify";
import styled from "styled-components";
import Profile from "./Profile";
import ToggleButton from "./ToggleButton";

export default function NavbarRightSideIncomplet() {
  return (
    <NavbarRightSideIncompletStyled>
      <ToastContainer className="toaster" bodyClassName="body-toast" />
      <div className="d-flex align-items-center">
        <ToggleButton />
        <Profile />
      </div>
    </NavbarRightSideIncompletStyled>
  );
}

const NavbarRightSideIncompletStyled = styled.div`
  .toaster {
    max-width: 300px;
  }

  .Toastify__toast.Toastify__toast-theme--dark.Toastify__toast--info {
    background: ${theme.colors.background_dark};
  }

  .body-toast {
    .Toastify__toast-icon.Toastify--animate-icon.Toastify__zoom-enter {
      margin-right: 20px;
      margin-left: 5px;
    }
    div {
      line-height: 1.3em;
    }
  }
`;
