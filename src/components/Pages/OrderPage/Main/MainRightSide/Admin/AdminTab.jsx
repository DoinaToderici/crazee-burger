import React, { useContext, useState } from "react";
import Tab from "../../../../../reusable-ui/Tab";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";
import { AdminContext } from "../../../../../Context/AdminContext";

export default function AdminTab() {
  const { collapsed, setCollapsed } = useContext(AdminContext);

  return (
    <div className="d-flex">
      <Tab
        icon={collapsed ? <FiChevronUp /> : <FiChevronDown />}
        className={!collapsed ? "is-actif" : ""}
        onClick={() => setCollapsed(!collapsed)}
      />
      <Tab icon={<AiOutlinePlus />} label="Ajouter un produit" />
      <Tab icon={<MdModeEditOutline />} label="Modifier un produit" />
    </div>
  );
}
