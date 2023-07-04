import React from "react";
import styled from "styled-components";
import { theme } from "../../theme";

export default function Tab({ icon, label, ...otherProps }) {
  return (
    <div>
      <TabStyled className={otherProps.className} onClick={otherProps.onClick}>
        {icon && <div className="icon">{icon}</div>}
        {label && <span className="label">{label}</span>}
      </TabStyled>
    </div>
  );
}

const TabStyled = styled.div`
  height: 43px;
  width: fit-content;
  padding: 0 22px;

  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: relative;
  top: 1px;

  // fonts
  font-size: ${theme.fonts.size.P0};
  color: ${theme.colors.greySemiDark};

  background: ${theme.colors.white};
  box-shadow: ${theme.shadows.subtle};

  &.is-actif {
    background: ${theme.colors.background_dark};
    color: ${theme.colors.white};
    border-color: ${theme.colors.background_dark};
  }

  // border
  border-width: 1px 1px 2px 1px;
  border-style: solid;
  border-color: ${theme.colors.greyLight};

  // border-radius
  border-radius: ${theme.borderRadius.round};
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;

  &:hover {
    border-bottom: 2px solid ${theme.colors.white};
    text-decoration: underline;
  }

  .icon {
    display: flex;
  }

  .label {
    margin-left: 13px;
  }
`;
