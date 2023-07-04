import React, { useContext } from "react";
import styled from "styled-components";
import { AdminContext } from "../../../../../Context/AdminContext";
import AdminPanel from "./AdminPanel";
import AdminTab from "./AdminTab";

export default function Admin() {
  const { collapsed } = useContext(AdminContext);

  return (
    <AdminStyled>
      <AdminTab />
      {!collapsed && <AdminPanel />}
    </AdminStyled>
  );
}

const AdminStyled = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
`;
