import React from "react";
import styled from "styled-components";
import { theme } from "../../theme";

export default function Input({ onChange, Icon, ...extraProps }) {
  return (
    <>
      <InputStyled>
        {Icon && Icon}
        <input onChange={onChange} {...extraProps} />
      </InputStyled>
    </>
  );
}

const InputStyled = styled.div`
  font-family: "Arial";
  background-color: ${theme.colors.white};
  border-radius: ${theme.borderRadius.round};
  display: flex;
  align-items: center;
  padding: 18px 24px;
  margin: 18px 0;

  .icon {
    margin-right: 8px;
    color: ${theme.colors.greySemiDark};
  }

  input {
    border: none;
    outline: none;
    color: ${theme.colors.dark};
    width: 100%;

    background: ${theme.colors.white};
    color: ${theme.colors.greyMedium};
    font-size: ${theme.fonts.size.P0};
  }
`;
