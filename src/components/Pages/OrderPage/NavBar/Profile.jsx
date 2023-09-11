import { useContext } from "react";
import { BsPersonCircle } from "react-icons/bs";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../../../theme/index";
import AdminContext from "../../../Context/AdminContext";

export default function Profile() {
  const { setIsModeAdmin, username } = useContext(AdminContext);
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
`;
