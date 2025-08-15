import { createRoot } from "react-dom/client";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Home/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
