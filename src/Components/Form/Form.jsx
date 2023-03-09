import React, { useState } from "react";

const Form = () => {
  const [inputData, setInputData] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Bonjour ${inputData}`);
    setInputData("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Entrez votre prénom..."
        required
        value={inputData}
        onChange={(e) => setInputData(e.target.value)}
      />
      <button type="submit">Accéder à votre espace</button>
    </form>
  );
};

export default Form;
