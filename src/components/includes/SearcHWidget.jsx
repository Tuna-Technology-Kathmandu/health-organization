import { useQuery, gql } from "@apollo/client";
import debounce from "lodash.debounce";
import { IoSearchOutline } from "react-icons/io5";
import { useState, useEffect } from "react";

import "../../assets/css/ServiceCard.css";
import { Link } from "react-router-dom";

const SEARCH_QUERY = gql`
  query SearchNotices($search: String!) {
    notices(where: { search: $search }) {
      nodes {
        id
        title
        slug
        uri
      }
    }
  }
`;

const SearchWidget = ({ setSearch }) => {
  const [query, setQuery] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  
  const { data, loading, error } = useQuery(SEARCH_QUERY, {
    variables: { search: query },
    skip: query.length < 2, // Skip search if input is too short
  });

  useEffect(() => {
    const debouncedSearch = debounce((searchTerm) => {
      setSearch(searchTerm);
    }, 300);

    debouncedSearch(query);

    return () => {
      debouncedSearch.cancel();
    };
  }, [query, setSearch]);

  const results = data?.notices?.nodes || [];

  return (
    <div className="p-2 position-relative">
      <form className="w-100">
        <div className="row g-0 align-items-center">
          <div className="col-12 position-relative">
            <div className="search-icon-container" onClick={() => setSearch(query)}>
              <IoSearchOutline className="search-icon" />
            </div>
            <input
              type="text"
              placeholder="Search ..."
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setShowDropdown(true);
              }}
              className="search-input"
              autoComplete="off"
              onBlur={() => setTimeout(() => setShowDropdown(false), 200)}
            />
          </div>
        </div>
      </form>

      {showDropdown && loading && (
        <ul className="dropdown-menu show w-100 position-absolute">
          <li className="dropdown-item text-muted">Loading...</li>
        </ul>
      )}

      {showDropdown && results.length > 0 && (
        <ul className="dropdown-menu show w-100 position-absolute">
          {results.map((item) => (
            <li key={item.id} className="dropdown-item">
              <Link to={`/notice/details/${item.slug}`}  className="text-dark text-decoration-none">{item.title}</Link>
              
            </li>
          ))}
        </ul>
      )}

      {showDropdown && query.length > 0 && results.length === 0 && !loading && (
        <ul className="dropdown-menu show w-100 position-absolute">
          <li className="dropdown-item text-muted">No results found</li>
        </ul>
      )}
    </div>
  );
};

export default SearchWidget;
