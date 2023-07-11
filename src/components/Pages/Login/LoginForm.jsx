import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { HiUserCircle } from "react-icons/hi";
import styled from "styled-components";
import { theme } from "../../../theme";
import { IoChevronForwardOutline } from "react-icons/io5";
import Button from "../../reusable-ui/Button";
import TextInput from "../../reusable-ui/TextInput";

export default function LoginForm() {
  //hooks
  const navigate = useNavigate();

  //state
  const [inputData, setInputData] = useState("");

  //comportement
  const handleSubmit = (e) => {
    e.preventDefault();
    setInputData("");
    navigate(`/order/${inputData}`);
  };

  const handleChange = (e) => setInputData(e.target.value);

  //affichage
  return (
    <>
      <LoginFormStyled action="submit" onSubmit={handleSubmit}>
        <div>
          <h1>Bienvenue chez nous </h1>
          <hr />
          <h2>Connectez-vous</h2>
        </div>
        <div>
          <TextInput
            value={inputData}
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
  min-width: 400px;
  margin: 0px auto;
  padding: 40px ${theme.spacing.lg};
  border-radius: ${theme.borderRadius.round};
  font-family: "Amatic SC", cursive;

  hr {
    border: 2px solid ${theme.colors.primary};
    margin-bottom: ${theme.gridUnit * 5}px;
  }

  h1 {
    color: ${theme.colors.white};
    font-size: ${theme.fonts.size.P5};
  }

  h2 {
    margin: 20px 10px 10px;
    color: ${theme.colors.white};
    font-size: ${theme.fonts.size.P4};
  }
`;
