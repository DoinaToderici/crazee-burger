import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ContextUserProvider from "./Context/ContextUser";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ContextUserProvider>
    <App />
  </ContextUserProvider>
);
