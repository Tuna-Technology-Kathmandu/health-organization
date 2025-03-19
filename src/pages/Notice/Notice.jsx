import React from "react";

import { FiLink } from "react-icons/fi";

import { NoticeCarousel } from "../../components/NoticeCarousel";
import { Banner } from "../../components/Banner";

import notice from "../../utils/notice.json";

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
        {notice.map((item, index) => (
          <>
            <div class="d-flex flex-row mb-3">
              <div class="p-4">
                <FiLink />
              </div>
              <div class="p-2">
                <h6>{item.title}</h6>
                <p>Sun, 3rd March 2025</p>
              </div>
            </div>
            {index !== notice.length - 1 && <hr />}
          </>
        ))}
      </div>
    </div>
  );
};
