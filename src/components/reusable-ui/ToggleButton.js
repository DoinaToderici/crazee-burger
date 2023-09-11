import React from "react";
import styled from "styled-components/macro";
import { theme } from "../../theme";

export default function ToggleButton({
  isChecked,
  onToggle,
  labelIfChecked,
  labelIfUnchecked,
}) {
  return (
    <ToggleButtonStyled>
      <input
        type="checkbox"
        className="toggle"
        id="round"
        checked={isChecked}
        onChange={onToggle}
      />
      <label
        htmlFor="round"
        className="round"
        data-checked={labelIfChecked}
        data-unchecked={labelIfUnchecked}
      ></label>
    </ToggleButtonStyled>
  );
}

const ToggleButtonStyled = styled.div`
  display: flex;
  margin-right: 10px;

  input[type="checkbox"] {
    // Hides the square box but keeps the core "toggle functionality"
    &.toggle {
      display: none;
    }

    &.toggle + label {
      display: inline-block;
      height: 40px;
      width: 200px;
      position: relative;
      font-size: ${theme.fonts.size.XXS};
      letter-spacing: 0.5px;
      border: 2px solid ${theme.colors.background_dark};
      padding: 0;
      margin: 0;
      cursor: pointer;
      box-sizing: border-box;
      transition: all 500ms ease;

      @media (max-width: ${theme.medias.sm}) {
        width: 150px;
        height: 30px;
      }

      @media (max-width: ${theme.medias.xs}) {
        width: 60px;
        height: 25px;
      }
    }

    // the small round circle
    &.toggle + label:before {
      content: "";
      position: absolute;
      top: 3px;
      height: 30px;
      width: 30px;
      transition: all 500ms ease;
      z-index: 3;

      @media (max-width: ${theme.medias.sm}) {
        height: 20px;
        width: 20px;
      }

      @media (max-width: ${theme.medias.xs}) {
        height: 15px;
        width: 15px;
      }
    }

    // text inside the switch button (for checked and unchecked)
    &.toggle + label:after {
      /* border: 1px solid blue; */
      width: 150px;
      text-align: center;
      z-index: 2;
      text-transform: uppercase;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      text-overflow: ellipsis;
      overflow: hidden;

      @media (max-width: ${theme.medias.sm}) {
        font-size: 7px;
        left: -13px;
      }

      @media (max-width: ${theme.medias.xs}) {
        display: none;
      }
    }

    // outside box
    &.toggle + label.round {
      border-radius: 50px;
    }

    // small circle
    &.toggle + label.round:before {
      border-radius: 50%;
    }

    &.toggle:not(:checked) + label {
      background-color: ${theme.colors.background_dark};
      /* text-align: right; */
    }

    // text label when not checked
    &.toggle:not(:checked) + label:after {
      content: attr(data-unchecked);
      right: 8px;
      left: auto;
      opacity: 1;
      color: ${theme.colors.primary};
      font-weight: ${theme.fonts.weights.bold};

      @media (max-width: ${theme.medias.sm}) {
        right: -13px;
      }

      @media (max-width: ${theme.medias.xs}) {
        right: -2px;
      }
    }

    // small circle when not checked
    &.toggle:not(:checked) + label:before {
      left: 3px;
      background-color: ${theme.colors.primary};
    }

    // box container when checked
    &.toggle:checked + label {
      text-align: left;
      border-color: ${theme.colors.primary};
    }

    // label text when checked
    &.toggle:checked + label:after {
      content: attr(data-checked);
      left: 9px;
      right: auto;
      opacity: 1;
      color: ${theme.colors.dark};
      letter-spacing: 0px;

      @media (max-width: ${theme.medias.sm}) {
        left: -13px;
      }
    }

    // small circle when checked
    &.toggle:checked + label:before {
      left: 162px;
      background-color: ${theme.colors.primary};

      @media (max-width: ${theme.medias.sm}) {
        left: 122px;
      }

      @media (max-width: ${theme.medias.xs}) {
        left: 38px;
      }
    }
  }
`;
