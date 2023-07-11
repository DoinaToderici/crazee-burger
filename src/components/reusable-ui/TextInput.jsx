import React from "react";
import styled, { css } from "styled-components";
import { theme } from "../../theme";

export default function TextInput({ onChange, Icon, version, ...extraProps }) {
  return (
    <>
      <TextInputStyled version={version}>
        {Icon && <span className="icon">{Icon}</span>}
        <input onChange={onChange} {...extraProps} />
      </TextInputStyled>
    </>
  );
}

const TextInputStyled = styled.div`
  ${(props) => props.version === "normal" && extraNormalStyle}
  ${(props) => props.version === "minimalist" && extraMinimalistlStyle}
  
  font-family: "Arial";
  border-radius: ${theme.borderRadius.round};
  display: flex;
  align-items: center;

  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 15px;
  }

  input {
    border: none;
    outline: none;
    width: 100%;
    font-size: ${theme.fonts.size.P0};
  }
`;

const extraNormalStyle = css`
  padding: 18px 24px;
  margin: 18px 0;
  background-color: ${theme.colors.white};

  .icon {
    margin-right: 8px;
    color: ${theme.colors.greySemiDark};
  }

  input {
    color: ${theme.colors.dark};
    background: ${theme.colors.white};
  }
`;

const extraMinimalistlStyle = css`
  padding: 8px 24px;
  background-color: ${theme.colors.background_white};

  .icon {
    margin-right: 15px;
    color: ${theme.colors.greyBlue};
  }

  input {
    background-color: ${theme.colors.background_white};
  }
`;
