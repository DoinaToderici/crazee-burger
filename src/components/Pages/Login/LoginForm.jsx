import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { HiUserCircle } from "react-icons/hi";
import styled from "styled-components";
import { theme } from "../../../theme";
import { IoChevronForwardOutline } from "react-icons/io5";
import Button from "../../reusable-ui/Button";
import TextInput from "../../reusable-ui/TextInput";
import { authentificateUser } from "../../../api/user";
import WelcomeMsg from "./WelcomeMsg";

export default function LoginForm() {
  //hooks
  const navigate = useNavigate();

  //state
  const [user, setUser] = useState("");

  //comportement
  const handleSubmit = async (e) => {
    e.preventDefault();
    await authentificateUser(user);
    setUser("");
    navigate(`/order/${user}`);
  };

  const handleChange = (e) => setUser(e.target.value);

  //affichage
  return (
    <>
      <LoginFormStyled action="submit" onSubmit={handleSubmit}>
        <WelcomeMsg />
        <div>
          <TextInput
            value={user}
            onChange={handleChange}
            Icon={<HiUserCircle />}
            placeholder="Entrez votre prénom"
            type="text"
            required
            version="normal"
          />
          <Button
            label="Accéder à votre espace"
            type="submit"
            Icon={<IoChevronForwardOutline />}
            version="primary"
          />
        </div>
      </LoginFormStyled>
    </>
  );
}

const LoginFormStyled = styled.form`
  text-align: center;
  max-width: 500px;
  width: 400px;
  margin: 0px auto;
  padding: 40px ${theme.spacing.lg};
  border-radius: ${theme.borderRadius.round};
  font-family: "Amatic SC", cursive;

  @media (max-width: ${theme.medias.md}) {
    max-width: 100%;
  }
`;
