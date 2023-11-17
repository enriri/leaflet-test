import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App";

export const MainRoute = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="*" element={<>Not Found</>} />
        <Route path="/" element={<>Page</>} />
      </Routes>
    </BrowserRouter>
  );
};
