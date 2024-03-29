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
  justify-content: center;
  align-items: center;
  position: relative;
  text-decoration: none;
  max-width: 100%;
  line-height: 1;
  border-radius: 5px;
  font-size: ${theme.fonts.size.P0};
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

  ${(props) => extraStyle[props.version]}
`;

const extraPrimaryStyle = css`
  background-color: ${theme.colors.primary};
  border: 1px solid ${theme.colors.primary};
  font-weight: ${theme.fonts.weights.heavy};
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
  width: fit-content;
  margin-top: 6px;
  background-color: ${theme.colors.success};
  border: 1px solid ${theme.colors.success};
  font-weight: ${theme.fonts.weights.bold};
  padding: 10px 30px;

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

  &:hover:not(:disabled) {
    border: 1px solid ${theme.colors.primary};
    color: ${theme.colors.primary};
  }
`;

const extraStyle = {
  primary: extraPrimaryStyle,
  success: extraSuccessStyle,
  primaryMin: extraPrimaryMinStyle,
};
