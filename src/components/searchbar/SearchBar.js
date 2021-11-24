import React, { useState } from "react";

const SearchBar = (props) => {
  const style = {
    searchbarContainer: {
      border: "1px solid gray",
    },
  };

  const [keyword, setKeyword] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    props.searchInput(keyword);
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
            onChange={(e) => setKeyword(e.target.value)}
          />
          <button id="search-btn" name="search-btn">
            Search
          </button>
        </form>
      </div>
    </>
  );
};

export default SearchBar;
