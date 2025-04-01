import React, { useState, useEffect } from "react";
import debounce from "lodash.debounce";
import { IoSearchOutline } from "react-icons/io5";
import "../../assets/css/skelton/SearchWidget.css";

const SearchWidget = ({ setSearch }) => {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const debouncedSearch = debounce((searchTerm) => {
      setSearch(searchTerm);
    }, 500);

    debouncedSearch(query);

    return () => {
      debouncedSearch.cancel();
    };
  }, [query, setSearch]);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    setSearch(query);
  };

  const handleIconClick = () => {
    setSearch(query);
  };

  return (
    <div className=" p-2">
      <form onSubmit={handleSearch} className="w-100">
        <div className="row g-0 align-items-center">
          {/* Input Field with Icon */}
          <div className="col-12 position-relative">
          <div className="search-icon-container" onClick={handleIconClick}>
              <IoSearchOutline className="search-icon" />
            </div>
            <input
              type="search"
              placeholder=" Search"
              value={query}
              onChange={handleChange}
              name="text"
              className="search-input"
              autoComplete="off"
              //required
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchWidget;
