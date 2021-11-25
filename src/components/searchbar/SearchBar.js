import React, { useState } from "react";

const SearchBar = (props) => {
  const style = {
    searchbarContainer: {
      borderTop: "1px solid gray",
      borderBottom: "1px solid gray",
      width: "50%",
      margin: "0 auto",
      padding: "1rem",
    },
    searchInput: {
      padding: "1rem",
      fontSize: "1rem",
      width: "50%",
    },
    searchBtn: {
      padding: "1rem",
      fontSize: "1rem",
    },
  };

  const [keyword, setKeyword] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    props.searchInput(keyword);
  };

  const handleSearchInput = (e) => {
    e.preventDefault();
    setKeyword(e.target.value);
    props.searchInputOnChange(e.target.value);
  };

  return (
    <>
      <div id="searchbarContainer" style={style.searchbarContainer}>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            id="search-input"
            placeholder="Companies, Organisations, People or Places..."
            name="search-input"
            onChange={handleSearchInput}
            autoComplete="off"
            style={style.searchInput}
            autoFocus={true}
          />
          <button id="search-btn" name="search-btn" style={style.searchBtn}>
            Search
          </button>
        </form>
      </div>
    </>
  );
};

export default SearchBar;
