import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ContextUser } from "../../Context/ContextUser";

export default function OrderPage() {
  //hooks
  const navigate = useNavigate();

  //context
  const { userName } = useContext(ContextUser);

  return (
    <div>
      <h1>Bonjour {userName}</h1>
      <button
        onClick={() => {
          navigate("/login");
        }}
      >
        Déconnexion
      </button>
    </div>
  );
}
