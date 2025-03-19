import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import { Home } from "./pages/Home/index";
import { Gallery } from "./pages/Gallery/Gallery";

import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
      </Route>
    </Routes>
  );
}

export default App;
