import React from "react";
import Tab from "../../../../../reusable-ui/Tab";
import { FiChevronDown } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";

export default function AdminTab() {
  return (
    <div className="d-flex">
      <Tab icon={<FiChevronDown />} />
      <Tab icon={<AiOutlinePlus />} label="Ajouter un produit" />
      <Tab icon={<MdModeEditOutline />} label="Modifier un produit" />
    </div>
  );
}
