import React from "react";
import { useNavigate } from "react-router-dom";

export default function ErrorPage() {
  const navigate = useNavigate();
  return (
    <div>
      <h2>Error Page</h2>
      <button onClick={() => navigate("/")}>
        Retourner vers la page d'accueil
      </button>
    </div>
  );
}
