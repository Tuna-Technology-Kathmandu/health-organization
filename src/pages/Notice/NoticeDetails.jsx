import React, { useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";
import html2pdf from "html2pdf.js";
import client from "../../utils/ApolloClient";
import { NoticeDetailShimmer } from "../../assets/css/skelton/NoticeDetailShimmer";

// GraphQL query to fetch notice details by slug
const GET_NOTICE_BY_SLUG = gql`
  query GetNoticeBySlug($slug: ID!) {
    # Changed to ID! to match schema expectation
    notice(id: $slug, idType: SLUG) {
      title
      date
      content
      slug
      featuredImage {
        node {
          sourceUrl
          altText
        }
      }
    }
  }
`;

export const NoticeDetails = () => {
  const { slug } = useParams();
  const pdfRef = useRef();

  const { loading, error, data } = useQuery(GET_NOTICE_BY_SLUG, {
    variables: { slug },
    client,
  });

  if (loading) return <NoticeDetailShimmer />;
  if (error) return <div className="text-danger">Error: {error.message}</div>;
  if (!data?.notice) return <div className="text-muted">Notice not found</div>;

  const { title, date, content, featuredImage } = data.notice;

  const handleDownloadPDF = () => {
      console.log("asjhjsdah", featuredImage)
    const opt = {
      margin: 0.5,
      filename: `${title.replace(/\s+/g, "_")}.pdf`,
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2},
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
    };

    html2pdf().from(pdfRef.current).set(opt).save();
  };

  return (
    <div className="container py-4">
      {/* Header Section */}
      <div className="d-flex justify-content-end align-items-start align-items-md-center mb-3 gap-3">
        <button
          onClick={handleDownloadPDF}
          className="btn btn-outline-primary"
        >
          Download as PDF
        </button>
      </div>

      {/* Scrollable Content Section */}
      <div
        ref={pdfRef}
        className="bg-white p-4 rounded-3 shadow-sm border"
        style={{ maxHeight: "80vh", overflowY: "auto" }}
      >
          <time className="text-muted d-block mb-lg-1 mb-2" dateTime={date}>
          {new Date(date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </time>
        <h5 className="fw-bold mb-4 d-flex justify-content-center">{title}</h5>
        {featuredImage?.node?.sourceUrl && (
          <img
            src={featuredImage.node.sourceUrl}
            alt={featuredImage.node.altText || title}
            className="img-fluid rounded mb-3"
            loading="lazy"
          />
        )}

        <div className="mt-2">
          <p className="notice-content d-flex justify-content-center"
          dangerouslySetInnerHTML={{ __html: content }}></p>
        </div>
      </div>

      {/* Back Link */}
      <div className="mt-4">
        <Link to="/notice" className="btn btn-primary">
          Back to All Notices
        </Link>
      </div>
    </div>
  );
};
