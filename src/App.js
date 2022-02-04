import React from "react";
import { Routes, Route } from "react-router-dom";

import Index from "./pages/index";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
    </Routes>
  );
}
