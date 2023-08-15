import React from "react";
import styled from "styled-components";
import { theme } from "../../../../../../../theme";
import Button from "../../../../../../reusable-ui/Button";
import { FiCheck } from "react-icons/fi";

export default function SubmitSection({ isSubmited }) {
  return (
    <StyledSubmitSection>
      <Button label="Ajouter un nouveau produit au menu" version="success" />
      {isSubmited && (
        <div className="check-msg">
          <FiCheck />
          <p> Ajouté avec succès !</p>
        </div>
      )}
    </StyledSubmitSection>
  );
}

const StyledSubmitSection = styled.div`
  grid-area: 4 / 2 / 5 / 3;
  margin-top: 10px;
  display: flex;
  align-items: center;

  .check-msg {
    display: flex;
    align-items: center;
    color: ${theme.colors.success};
    margin: 0 0 0 10px;

    p {
      margin: 0 0 0 5px;
    }
  }
`;
