import React from "react";
import styled from "styled-components";
import { theme } from "../../../../../../../theme";

export default function ImgPreview({ imgPreview, imgPreviewAlt }) {
  return (
    <StyledImgPreview
      className={`img-preview ${!imgPreview && "prev-not-img"}`}
    >
      {imgPreview ? (
        <img src={imgPreview} alt={imgPreviewAlt} />
      ) : (
        <span>Aucune image</span>
      )}
    </StyledImgPreview>
  );
}

const StyledImgPreview = styled.div`
  grid-area: 1 / 1 / 4 / 2;
  text-align: center;

  display: flex;
  justify-content: center;
  align-items: center;

  &.prev-not-img {
    width: 100%;
    height: 100%;
    border-radius: ${theme.borderRadius.round};
    border: 1px solid ${theme.colors.greyLight};
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: top center;
  }
`;
