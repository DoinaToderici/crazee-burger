import { useNavigate, useParams } from "react-router-dom";

export default function OrderPage() {
  //hooks
  const navigate = useNavigate();

  //params from url
  const { userName } = useParams();

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
