import React, { useContext } from "react";
import "react-toastify/dist/ReactToastify.css";
import Profile from "./Profile";
import ToggleButton from "../../../reusable-ui/ToggleButton";
import { toast } from "react-toastify";
import { FaUserSecret } from "react-icons/fa";
import "react-toastify/dist/ReactToastify.css";
import ToastAdmin from "./ToastAdmin";
import AdminContext from "../../../Context/AdminContext";
import styled from "styled-components";
import { theme } from "../../../../theme";
import { BsBasketFill } from "react-icons/bs";

export default function NavbarRightSide() {
  const { isModeAdmin, setIsModeAdmin, visibleBasket, handleToggleBasket } =
    useContext(AdminContext);

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
    <>
      <NavbarRightSideStyled>
        <ToggleButton
          isChecked={isModeAdmin}
          labelIfChecked="Désactiver le mode admin"
          labelIfUnchecked="Activer le mode admin"
          onToggle={displayToastNotif}
        />
        <Profile />
        {/* {!visibleBasket && ( */}
        <BsBasketFill
          className="button-basket-mobile"
          onClick={handleToggleBasket}
        />
        {/* )} */}
        <ToastAdmin />
      </NavbarRightSideStyled>
    </>
  );
}

const NavbarRightSideStyled = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: ${theme.medias.md}) {
    width: 100%;
    margin-top: 0.5rem;
    justify-content: space-between;
  }

  .button-basket-mobile {
    color: red;
    display: none;

    @media (max-width: ${theme.medias.sm}) {
      display: block;
    }
  }
`;
