import { useNavigate, useParams } from "react-router-dom";
import PrimaryButton from "../../reusable-ui/PrimaryButton";

export default function OrderPage() {
  //hooks
  const navigate = useNavigate();

  //params from url
  const { userName } = useParams();

  return (
    <div>
      <h1>Bonjour {userName}</h1>
      <PrimaryButton
        label="Déconnexion"
        onClick={() => {
          navigate("/login");
        }}
        className="w-auto"
      />
    </div>
  );
}
