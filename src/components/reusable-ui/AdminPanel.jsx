import React from "react";
import styled from "styled-components";

export default function AdminPanel() {
  return (
    <AdminPanelStyled>
      <h1>Admin Panel</h1>
    </AdminPanelStyled>
  );
}

const AdminPanelStyled = styled.div`
  width: 100vw;
  position: fixed;
  bottom: 0;
  left: 0;
`;
