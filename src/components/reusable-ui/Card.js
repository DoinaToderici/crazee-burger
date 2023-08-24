import { useContext } from "react";
import styled, { css } from "styled-components";
import { theme } from "../../theme";
import { AdminContext } from "../Context/AdminContext";
import Button from "./Button";
import { TiDelete } from "react-icons/ti";

export default function Card({
  title,
  imageSource,
  leftDescription,
  onClick,
  isHoverable,
  isSelected,
  onDelete,
  onAdd,
}) {
  const { IMG_BY_DEFAULT, isModeAdmin } = useContext(AdminContext);

  return (
    <CardStyled
      className="produit"
      onClick={onClick}
      selected={isSelected}
      isHoverable={isHoverable}
    >
      <div className="card">
        {isModeAdmin && (
          <button
            className="delete-btn"
            aria-label="delete-button"
            onClick={onDelete}
          >
            <TiDelete className="icon" />
          </button>
        )}
        <div className="image">
          <img
            src={imageSource !== "" ? imageSource : IMG_BY_DEFAULT}
            alt={title}
          />
        </div>
        <div className="text-info">
          <div className="title">{title}</div>
          <div className="description">
            <div className="left-description">
              <b>{leftDescription}</b>
            </div>
            <div className="right-description">
              <Button
                label={"Ajouter"}
                version="primaryMin"
                className="primary-button"
                onClick={onAdd}
              />
            </div>
          </div>
        </div>
      </div>
    </CardStyled>
  );
}

const CardStyled = styled.div`
  ${({ isHoverable }) => isHoverable && hoverableStyled}
  border-radius: ${theme.borderRadius.extraRound};

  .card {
    background: ${theme.colors.white};
    box-sizing: border-box;
    width: 240px;
    height: 330px;
    display: grid;
    grid-template-rows: 65% 1fr;
    padding: 20px;
    padding-bottom: 10px;
    box-shadow: -8px 8px 20px 0px rgb(0 0 0 / 20%);
    position: relative;

    .delete-btn {
      border: 1px solid red;
      position: absolute;
      top: 15px;
      right: 15px;
      cursor: pointer;
      width: 30px;
      height: 30px;
      color: ${theme.colors.primary};
      padding: 0;
      border: none;
      background: none;

      .icon {
        /* border: 1px solid blue; */
        height: 100%;
        width: 100%;
      }

      :hover {
        color: ${theme.colors.red};
        /* background-color: red; */
      }

      :active {
        color: ${theme.colors.primary};
      }
    }

    .image {
      width: 100%;
      height: auto;
      margin-top: 30px;
      margin-bottom: 20px;

      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }

    .text-info {
      display: grid;
      grid-template-rows: 30% 70%;
      padding: 5px;

      .title {
        margin: auto 0;
        font-size: ${theme.fonts.size.P4};
        position: relative;
        bottom: 10px;
        font-weight: ${theme.fonts.weights.bold};
        color: ${theme.colors.dark};
        text-align: left;
        white-space: nowrap;
        overflow: hidden;
        width: 100%;
        text-overflow: ellipsis;
        font-family: "Amatic SC", cursive;
      }

      .description {
        display: grid;
        grid-template-columns: 1fr 1fr;

        .left-description {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          font-weight: ${theme.fonts.weights.medium};
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          font-weight: ${theme.fonts.weights.medium};
          color: ${theme.colors.primary};
          font-family: "Amatic SC", cursive;
        }

        .right-description {
          display: flex;
          justify-content: flex-end;
          align-items: center;
          font-size: ${theme.fonts.size.P1};
        }
      }
    }

    ${({ isHoverable, selected }) => isHoverable && selected && selectedStyle}
  }
`;

const hoverableStyled = css`
  :hover {
    transform: scale(1.05);
    transition: ease-out 0.4s;
    cursor: pointer;

    .card {
      box-shadow: ${theme.shadows.orangeHighlight};
    }
  }
`;

const selectedStyle = css`
  background: ${theme.colors.primary};

  .primary-button {
    color: ${theme.colors.primary};
    background-color: ${theme.colors.white};
    border: 1px solid ${theme.colors.white};
    transition: all 200ms ease-out;

    :hover {
      color: ${theme.colors.white};
      background-color: ${theme.colors.primary};
      border: 1px solid ${theme.colors.white};
      transition: all 200ms ease-out;
    }

    :active {
      background-color: ${theme.colors.white};
      color: ${theme.colors.primary};
    }

    &.is-disabled {
      opacity: 50%;
      cursor: not-allowed;
      z-index: 2;
    }

    &.with-focus {
      border: 1px solid white;
      background-color: ${theme.colors.white};
      color: ${theme.colors.primary};

      :hover {
        color: ${theme.colors.white};
        background-color: ${theme.colors.primary};
        border: 1px solid ${theme.colors.white};
      }

      :active {
        background-color: ${theme.colors.white};
        color: ${theme.colors.primary};
      }
    }
  }

  .delete-btn {
    color: ${theme.colors.white};

    :active {
      color: ${theme.colors.white};
    }
  }

  .text-info {
    .description {
      .left-description {
        color: ${theme.colors.white};
      }
    }
  }
`;
