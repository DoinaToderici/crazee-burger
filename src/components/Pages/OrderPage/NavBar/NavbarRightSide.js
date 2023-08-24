import React, { useContext } from "react";
import "react-toastify/dist/ReactToastify.css";
import Profile from "./Profile";
import ToggleButton from "../../../reusable-ui/ToggleButton";
import { toast } from "react-toastify";
import { FaUserSecret } from "react-icons/fa";
import "react-toastify/dist/ReactToastify.css";
import ToastAdmin from "./ToastAdmin";
import AdminContext from "../../../Context/AdminContext";

export default function NavbarRightSide() {
  const { isModeAdmin, setIsModeAdmin } = useContext(AdminContext);

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
      <div className="d-flex align-items-center">
        <ToggleButton
          isChecked={isModeAdmin}
          labelIfChecked="Désactiver le mode admin"
          labelIfUnchecked="Activer le mode admin"
          onToggle={displayToastNotif}
        />
        <Profile />
        <ToastAdmin />
      </div>
    </>
  );
}
