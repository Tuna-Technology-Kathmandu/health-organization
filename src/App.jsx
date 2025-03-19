import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import { Home } from "./pages/Home/index";
import { Gallery } from "./pages/Gallery/Gallery";
import {Notice} from "./pages/Notice/Notice";

import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/notice" element={<Notice />} />
      </Route>
    </Routes>
  );
}

export default App;
