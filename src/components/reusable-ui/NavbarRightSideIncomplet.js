import React, { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { theme } from "../../theme/index";
import styled from "styled-components";
import Profile from "./Profile";
import ToggleButton from "./ToggleButton";
import { ToastContainer, toast } from "react-toastify";
import { FaUserSecret } from "react-icons/fa";
import "react-toastify/dist/ReactToastify.css";

export default function NavbarRightSideIncomplet() {
  const [isModeAdmin, setIsModeAdmin] = useState(false);
  const displayToastNotif = () => {
    if (!isModeAdmin) {
      toast.info("Mode admin activé", {
        icon: <FaUserSecret size={30} />,
        theme: "dark",
        position: "bottom-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }

    setIsModeAdmin(!isModeAdmin);
  };

  return (
    <NavbarRightSideIncompletStyled>
      <ToastContainer className="toaster" bodyClassName="body-toast" />
      <div className="d-flex align-items-center">
        <ToggleButton
          labelIfChecked="Désactiver le mode admin"
          labelIfUnchecked="Activer le mode admin"
          onToggle={displayToastNotif}
        />
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
