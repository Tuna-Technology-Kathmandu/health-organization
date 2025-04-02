import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/includes/Navbar";
import Footer from "./components/includes/Footer";
import { ScrollToTop } from "../src/components/ScrollToTop";
import { Topbar } from "./components/includes/Topbar";

const Layout = () => {
  return (
    <>
      <Topbar />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <ScrollToTop />

    </>
  );
};

export default Layout;
