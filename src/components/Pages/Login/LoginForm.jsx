import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
      <h1>Bienvenue chez nous </h1>
      <br />
      <h2>Connectez-vous</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Entrez votre prénom..."
          required
          value={inputData}
          onChange={handleChange}
        />
        <button type="submit">Accéder à votre espace</button>
      </form>
    </>
  );
}
