import React from "react";
import "./App.css";
import Home from "./Pages/Home/Home";
import LoginPage from "./Pages/Login/LoginPage";
import OrderPage from "./Pages/OrderPage/OrderPage";
import ErrorPage from "./Pages/ErrorPage/ErrorPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/order" element={<OrderPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
