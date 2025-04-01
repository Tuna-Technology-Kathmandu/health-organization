import React from "react";
//import axios from "axios";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import { Home } from "./pages/Home/index";
import { Gallery } from "./pages/Gallery/Gallery";
import { Notice } from "./pages/Notice/Notice";
import { Services } from "./pages/Services/Services";
import Contactus from "./pages/ContactUs/Contact";

import "./App.css";
import Aboutus from "./pages/AboutUs/Aboutus";
import NoticeDetails from "../src/pages/Notice/NoticeDetails";

function App() {
  // axios.defaults.url = import.meta.env.base_url;
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />

        <Route path="/notice">
          <Route index element={<Notice />} />
          <Route path="details/:slug" element={<NoticeDetails />}/>
        </Route>
        <Route path="/service" element={<Services />} />
        <Route path="/contact-us" element={<Contactus />} />
        <Route path="about-us" element={<Aboutus />} />
      </Route>
    </Routes>
  );
}

export default App;
