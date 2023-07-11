import React, { useContext } from "react";
import styled from "styled-components";
import { theme } from "../../../../../../../theme";
import { AdminContext } from "../../../../../../Context/AdminContext";
import { getTabSelected, tabsConfig as tabs } from "../tabs.Config";

export default function AdminPanel() {
  const { currentTabSelected } = useContext(AdminContext);

  const tabSelected = getTabSelected(tabs, currentTabSelected);

  return (
    <AdminPanelStyled>{tabSelected && tabSelected.Content}</AdminPanelStyled>
  );
}

const AdminPanelStyled = styled.div`
  height: 265px;
  background: ${theme.colors.white};
  border: 1px solid ${theme.colors.greyLight};
  box-shadow: ${theme.shadows.subtle};
  box-sizing: border-box;
  padding: 30px 5%;
`;
