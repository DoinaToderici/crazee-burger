import React from "react";
import styled from "styled-components";
import { theme } from "../../../../../../theme";

export default function AdminPanel() {
  return (
    <AdminPanelStyled>
      <h1>Admin Panel</h1>
    </AdminPanelStyled>
  );
}

const AdminPanelStyled = styled.div`
  height: 250px;
  width: 100vw;
  background: ${theme.colors.white};
  border: 1px solid ${theme.colors.greyLight};
  box-shadow: ${theme.shadows.subtle};
`;
