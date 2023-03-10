import { useNavigate } from "react-router-dom";

export default function OrderPage() {
  //hooks
  const navigate = useNavigate();

  return (
    <div>
      <h1>Bonjour [NAME]</h1>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Déconnexion
      </button>
    </div>
  );
}
