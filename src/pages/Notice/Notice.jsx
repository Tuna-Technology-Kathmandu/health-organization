import React from "react";


import { NoticeCarousel } from "../../components/Notice/NoticeCarousel";
import { Banner } from "../../components/Banner";

import { NoticeCard } from "../../components/Notice/NoticeCard";

export const Notice = () => {
  return (
    <div>
      <Banner pageTitle="Notice" />
      <div className="container my-5">
        <NoticeCarousel />
      </div>
      <div className="notice-section container my-5 py-5">
        <h3>News</h3>
        <hr />
        <NoticeCard />
      </div>
    </div>
  );
};
