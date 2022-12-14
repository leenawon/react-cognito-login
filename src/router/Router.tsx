// React
import React from "react";
import { Route, Routes } from "react-router-dom";

// Component
import Login from "../pages/Login/Login.tsx";
import MainPage from "../pages/Main/MainPage.tsx";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/main" element={<MainPage />} />
    </Routes>
  );
}

export default Router;
