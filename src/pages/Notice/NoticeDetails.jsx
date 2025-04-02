import React from "react";
import { useParams, Link } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";
import client from "../../utils/ApolloClient";
import "../../assets/css/NoticeDetail.css"

// GraphQL query to get notice details by slug
const GET_NOTICE_BY_SLUG = gql`
  query GetNoticeBySlug($slug: ID!) {  # Changed to ID! to match schema expectation
    notice(id: $slug, idType: SLUG) {   # Added idType parameter for WordPress/WPGraphQL
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

const NoticeDetails = () => {
  const { slug } = useParams();

  const { loading, error, data } = useQuery(GET_NOTICE_BY_SLUG, {
    variables: { slug },
    client,
  });

  if (loading) return <div className="loading">Loading notice details...</div>;
  if (error) return <div className="error">Error: {error.message}</div>;
  if (!data?.notice) return <div className="not-found">Notice not found</div>;

  const { title, date, content, featuredImage } = data.notice;

  return (
    <div className="notice-detail-container">
      <div className="notice-detail-content">
        {featuredImage?.node?.sourceUrl && (
          <img
            src={featuredImage.node.sourceUrl}
            alt={featuredImage.node.altText || title}
            className="notice-detail-image img-fluid rounded-4"
            loading="lazy"
          />
        )}
        
        <div className="notice-detail-text">
          <h1 className="m-3">{title}</h1>
          <time dateTime={date} className="notice-date m-3">
            {new Date(date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </time>
          
          <div
            className="notice-content m-3"
            dangerouslySetInnerHTML={{ __html: content }}
          />
          
          <Link to="/notice" className="btn btn-primary m-3">
            Back to All Notices
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NoticeDetails;