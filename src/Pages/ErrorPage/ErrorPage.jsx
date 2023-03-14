import React from "react";
import { useNavigate } from "react-router-dom";

export default function ErrorPage() {
  const navigate = useNavigate();
  return (
    <div>
      Error Page
      <button onClick={() => navigate("/")}>
        Retourner vers la page d'accueil
      </button>
    </div>
  );
}
