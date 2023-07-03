import React from "react";
import styled from "styled-components";
import AdminPanel from "./AdminPanel";
import AdminTab from "./AdminTab";

export default function Admin() {
  return (
    <AdminStyled>
      <AdminTab />
      <AdminPanel />
    </AdminStyled>
  );
}

const AdminStyled = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
`;
