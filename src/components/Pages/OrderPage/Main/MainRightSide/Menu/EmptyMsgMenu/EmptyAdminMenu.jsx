import React from "react";
import Button from "../../../../../../reusable-ui/Button";
import EmptyMsgMenu from "./EmptyMsgMenu";

export default function EmptyAdminMenu({ onReset }) {
  return (
    <EmptyMsgMenu>
      <h2>Le menu est vide ?</h2>
      <h2>Cliquez ci-dessous pour le réinitialiser</h2>
      <Button
        version="primary"
        label="Générer de nouveaux produits"
        onClick={onReset}
      />
    </EmptyMsgMenu>
  );
}
