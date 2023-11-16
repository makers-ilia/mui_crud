import React from "react";
import { Route, Routes } from "react-router-dom";
import ProductsPage from "./pages/ProductsPage";
import AddPage from "./pages/AddPage";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<ProductsPage />} />
      <Route path="/add" element={<AddPage />} />
    </Routes>
  );
};

export default MainRoutes;
