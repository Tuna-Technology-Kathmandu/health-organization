import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "./Layout";
import "./App.css";

const Home = lazy(() =>
  import("./pages/Home/index").then((m) => ({ default: m.Home }))
);
const Gallery = lazy(() =>
  import("./pages/Gallery/Gallery").then((m) => ({ default: m.Gallery }))
);
const Notice = lazy(() =>
  import("./pages/Notice/Notice").then((m) => ({ default: m.Notice }))
);
const NoticeDetails = lazy(() =>
  import("./pages/Notice/NoticeDetails").then((m) => ({
    default: m.NoticeDetails,
  }))
);
const Services = lazy(() =>
  import("./pages/Services/Services").then((m) => ({ default: m.Services }))
);
const Contactus = lazy(() =>
  import("./pages/ContactUs/Contact").then((m) => ({ default: m.Contactus }))
);
const Aboutus = lazy(() =>
  import("./pages/AboutUs/Aboutus").then((m) => ({ default: m.Aboutus }))
);

function App() {
  return (
    <Suspense
      fallback={
        <div className="d-flex justify-content-center align-items-center vh-100">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      }
    >
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />

          <Route path="/notice">
            <Route index element={<Notice />} />
            <Route path="details/:slug" element={<NoticeDetails />} />
          </Route>

          <Route path="/service" element={<Services />} />
          <Route path="/contact-us" element={<Contactus />} />
          <Route path="about-us" element={<Aboutus />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
