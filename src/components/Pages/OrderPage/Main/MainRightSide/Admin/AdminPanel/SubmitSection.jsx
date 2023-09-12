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
          <FiCheck width="20px" />
          <p> Ajouté avec succès !</p>
        </div>
      )}
    </StyledSubmitSection>
  );
}

const StyledSubmitSection = styled.div`
  grid-area: 4 / 1 / 5 / 3;
  margin-top: 10px;

  @media (max-width: ${theme.medias.sm}) {
    margin-top: 0;
  }

  .check-msg {
    text-align: center;
    position: absolute;
    display: flex;
    align-items: center;
    color: ${theme.colors.success};
    margin: 5px auto 0;

    p {
      margin: 0 0 0 5px;
    }
  }
`;
