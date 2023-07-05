import React, { useContext } from "react";
import styled from "styled-components";
import { theme } from "../../../../../../../theme";
import { AdminContext } from "../../../../../../Context/AdminContext";
import { getTabSelected, tabsConfig as tabs } from "../tabs.Config";

export default function AdminPanel() {
  const { currentTabSelected } = useContext(AdminContext);
  const tabSelected = getTabSelected(tabs, currentTabSelected);

  return (
    <AdminPanelStyled>
      <p>{tabSelected && tabSelected.Content}</p>
    </AdminPanelStyled>
  );
}

const AdminPanelStyled = styled.div`
  height: 250px;
  background: ${theme.colors.greyLight};
  border: 1px solid ${theme.colors.greyLight};
  box-shadow: ${theme.shadows.subtle};
`;
