import Logo from "../../reusable-ui/logo";
import LoginForm from "./LoginForm";
import styled from "styled-components";

export default function LoginPage() {
  return (
    <LoginPageStyled>
      <Logo className="logo" />
      <LoginForm />
    </LoginPageStyled>
  );
}

const LoginPageStyled = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: url("/images/burger-and-fries-background.jpg") rgba(0, 0, 0, 0.7);
  background-size: cover;
  background-position: center;
  background-blend-mode: darken;

  .logo {
    transform: scale(2.5);
  }
`;
