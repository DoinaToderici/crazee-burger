import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Pages/Home/Home.jsx";
import LoginPage from "./components/Pages/Login/LoginPage";
import OrderPage from "./components/Pages/OrderPage/OrderPage";
import ErrorPage from "./components/Pages/ErrorPage/ErrorPage";
import { Routes, Route } from "react-router-dom";
import { AdminContextProvider } from "./components/Context/AdminContext.jsx";

function App() {
  return (
    <AdminContextProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/order/:userName" element={<OrderPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </AdminContextProvider>
  );
}

export default App;
