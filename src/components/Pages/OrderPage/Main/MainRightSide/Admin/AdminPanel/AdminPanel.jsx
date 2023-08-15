import React, { useContext } from "react";
import styled from "styled-components";
import { EMPTY_PRODUCT } from "../../../../../../../enums/product";
import { theme } from "../../../../../../../theme";
import { AdminContext } from "../../../../../../Context/AdminContext";
import { getTabSelected, getTabsConfig } from "../tabs.Config";

export default function AdminPanel() {
  const { currentTabSelected, productSelected } = useContext(AdminContext);

  const hasAlredyBeenClicked = productSelected !== EMPTY_PRODUCT;
  const tabs = getTabsConfig(hasAlredyBeenClicked);
  const tabSelected = getTabSelected(tabs, currentTabSelected);

  return (
    <AdminPanelStyled>{tabSelected && tabSelected.Content}</AdminPanelStyled>
  );
}

const AdminPanelStyled = styled.div`
  height: 250px;
  background: ${theme.colors.white};
  border: 1px solid ${theme.colors.greyLight};
  box-shadow: ${theme.shadows.subtle};
  box-sizing: border-box;
  padding: 30px 5%;
`;
