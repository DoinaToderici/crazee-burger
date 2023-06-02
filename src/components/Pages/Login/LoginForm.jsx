import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { HiUserCircle } from "react-icons/hi";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Button from "../../reusable-ui/button";
import Input from "../../reusable-ui/input";

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
        <Input
          value={inputData}
          onChange={handleChange}
          Icon={<HiUserCircle className="icon" />}
          placeholder="Entrez votre prénom"
          type="text"
          required
        />
        <Button
          label="Accéder à votre espace"
          type="submit"
          icon={<MdOutlineKeyboardArrowRight />}
        />
      </form>
    </>
  );
}
