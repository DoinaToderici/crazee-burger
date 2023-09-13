import { useContext, useState } from "react";
import { BsBasketFill, BsPersonCircle } from "react-icons/bs";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../../../theme/index";
import AdminContext from "../../../Context/AdminContext";

export default function Profile() {
  const { setIsModeAdmin, username, handleToggleBasket, basket } =
    useContext(AdminContext);

  const allQuantitys = basket.map((item) => {
    return item.quantity;
  });

  const totalQuantity = allQuantitys.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );

  return (
    <ProfileStyled>
      <div className="info">
        <p>
          Hey, <b>{username}</b>
        </p>
        <Link to="/login">
          <div className="description" onClick={() => setIsModeAdmin(false)}>
            <small>Se déconnecter</small>
          </div>
        </Link>
      </div>
      <div className="picture">
        <BsPersonCircle />
      </div>

      <div className="button-basket-mobile">
        {totalQuantity > 0 && <span>{totalQuantity}</span>}
        <BsBasketFill className="icon" onClick={handleToggleBasket} />
      </div>
    </ProfileStyled>
  );
}

const ProfileStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 100px;
  padding-left: 50px;

  @media (max-width: ${theme.medias.sm}) {
    padding-left: 10px;
  }

  .info {
    text-align: right;
    margin-right: 10px;

    @media (max-width: ${theme.medias.sm}) {
      margin-right: 5px;
      line-height: 1;
    }

    p {
      margin: 0;
      color: ${theme.colors.greyBlue};

      @media (max-width: ${theme.medias.sm}) {
        font-size: 0.8rem;
      }

      b {
        color: ${theme.colors.primary};
      }
    }

    a {
      text-decoration: none;

      .description {
        &:hover {
          text-decoration: underline;
          color: ${theme.colors.greyDark};
        }

        small {
          font-size: ${theme.fonts.size.XXS};
          color: ${theme.colors.greyBlue};
          font-weight: ${theme.fonts.weights.medium};
          text-decoration: none;
          position: relative;
          bottom: 2px;
        }
      }
    }
  }

  .picture {
    height: auto;
    display: flex;
    height: 100%;
    font-size: ${theme.fonts.size.P4};
    color: ${theme.colors.greyBlue};

    @media (max-width: ${theme.medias.sm}) {
      font-size: 1.5rem;
    }
  }

  .button-basket-mobile {
    margin-left: 10px;
    display: none;
    position: relative;

    @media (max-width: ${theme.medias.sm}) {
      display: block;
    }

    .icon {
      font-size: ${theme.fonts.size.P2};
      color: ${theme.colors.primary};
    }

    span {
      position: absolute;
      padding: 2px;
      border-radius: 50px;
      color: ${theme.colors.white};
      background: ${theme.colors.green};
      width: 20px;
      height: 20px;
      font-size: 12px;
      text-align: center;
      right: -8px;
      top: -5px;
      line-height: 1.4;
    }
  }
`;
