import React from "react";
import styled, { css } from "styled-components";
import { theme } from "../../theme";

export default function Button({ label, Icon, version, ...extraProps }) {
  return (
    <>
      <ButtonStyled version={version} {...extraProps}>
        <span>{label}</span>
        {Icon && <span className="icon">{Icon}</span>}
      </ButtonStyled>
    </>
  );
}

const ButtonStyled = styled.button`
  ${(props) => props.version === "primary" && extraPrimaryStyle}
  ${(props) => props.version === "primary-min" && extraPrimaryMinStyle}
  ${(props) => props.version === "success" && extraSuccessStyle}

  justify-content: center;
  align-items: center;
  position: relative;
  white-space: nowrap;
  text-decoration: none;
  line-height: 1;
  border-radius: 5px;
  font-size: ${theme.fonts.size.P0};
  font-weight: ${theme.fonts.weights.heavy};
  color: ${theme.colors.white};

  .icon {
    margin-left: 8px;
  }

  &:hover:not(:disabled) {
    background-color: ${theme.colors.white};
    transition: all 200ms ease-out;
  }

  &:active {
    color: ${theme.colors.white};
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const extraPrimaryStyle = css`
  background-color: ${theme.colors.primary};
  border: 1px solid ${theme.colors.primary};
  padding: 18px 24px;
  width: 100%;

  &:hover:not(:disabled) {
    border: 1px solid ${theme.colors.primary};
    color: ${theme.colors.primary};
  }

  &:active {
    background-color: ${theme.colors.primary};
    border: 1px solid ${theme.colors.primary};
  }
`;

const extraSuccessStyle = css`
  width: 60%;
  margin-top: 8px;
  background-color: ${theme.colors.success};
  border: 1px solid ${theme.colors.success};
  padding: 18px 24px;

  &:hover:not(:disabled) {
    border: 1px solid ${theme.colors.success};
    color: ${theme.colors.success};
  }

  &:active {
    background-color: ${theme.colors.success};
    border: 1px solid ${theme.colors.success};
  }
`;

const extraPrimaryMinStyle = css`
  font-size: ${theme.fonts.size.XS} !important;
  cursor: pointer;
  padding: 10px;

  background-color: ${theme.colors.primary};
  border: 1px solid ${theme.colors.primary};
`;
