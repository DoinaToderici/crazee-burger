import React, { useContext } from "react";
import Tab from "../../../../../reusable-ui/Tab";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { AdminContext } from "../../../../../Context/AdminContext";
import { tabsConfig } from "./tabs.Config";
import styled from "styled-components";

export default function AdminTab() {
  const { collapsed, setCollapsed, currentTabSelected, setCurrentTabSelected } =
    useContext(AdminContext);

  const tabs = tabsConfig;

  const selectTab = (tabSelected) => {
    setCollapsed(false);
    setCurrentTabSelected(tabSelected);
  };

  return (
    <AdminTabStyled className="d-flex">
      <Tab
        icon={collapsed ? <FiChevronUp /> : <FiChevronDown />}
        onClick={() => setCollapsed(!collapsed)}
        className={collapsed ? "is-active" : ""}
      />
      {tabs.map(({ index, label, Icon }) => {
        return (
          <Tab
            key={index}
            index={index}
            label={label}
            icon={Icon}
            onClick={() => selectTab(index)}
            className={currentTabSelected === index ? "is-active" : ""}
          />
        );
      })}
    </AdminTabStyled>
  );
}

const AdminTabStyled = styled.div`
  padding: 0 70px;
`;
