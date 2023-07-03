import React, { useContext } from "react";
import Tab from "../../../../../reusable-ui/Tab";
import { FiChevronDown } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";
import { AdminContext } from "../../../../../Context/AdminContext";

export default function AdminTab() {
  const { isModeAdmin } = useContext(AdminContext);

  return (
    <div className="d-flex">
      <Tab icon={<FiChevronDown />} />
      <Tab
        icon={<AiOutlinePlus />}
        className={isModeAdmin && "bg-dark"}
        label="Ajouter un produit"
      />
      <Tab icon={<MdModeEditOutline />} label="Modifier un produit" />
    </div>
  );
}
