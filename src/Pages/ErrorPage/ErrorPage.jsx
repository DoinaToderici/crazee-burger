import React from "react";
import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div>
      Error Page
      <button>
        <Link to="/">Retourner vers la page d'accueil</Link>
      </button>
    </div>
  );
}
