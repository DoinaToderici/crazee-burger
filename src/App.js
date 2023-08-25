import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Pages/Home/Home.jsx";
import LoginPage from "./components/Pages/Login/LoginPage";
import OrderPage from "./components/Pages/OrderPage/OrderPage";
import ErrorPage from "./components/Pages/ErrorPage/ErrorPage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/order/:username" element={<OrderPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
