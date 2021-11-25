import React, { useState } from "react";

const SearchBar = (props) => {
  const style = {
    searchbarContainer: {
      borderTop: "1px solid gray",
      borderBottom: "1px solid gray",
      width: "50%",
      margin: "0 auto",
      padding: "1rem",
      position: "relative",
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
    autoCompleteContainer: {
      position: "absolute",
      top: "4.3rem",
      left: "8.3rem",
      border: "1px solid #edf9ff",
      width: "52%",
    },
    autoCompleteList: {
      listStyle: "none",
      textAlign: "left",
      zIndex: "1",
      margin: "0",
      padding: "0",
      backgroundColor: "#ddd",
    },
    list: {
      padding: "1rem",
    },
  };

  const [keyword, setKeyword] = useState();
  // const [inputVal, setInputVal] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    props.searchInput(keyword);
  };

  const handleSearchInput = (e) => {
    e.preventDefault();
    setKeyword(e.target.value);
    props.searchInputOnChange(e.target.value);
  };

  const handleListClick = (e) => {
    setKeyword(e.target.outerText);
    console.log(e.target.outerText);
  };

  const autoList = props.autoCompleteList.map((list, index) => {
    return (
      <li style={style.list} key={index} onClick={handleListClick}>
        {list.text}
      </li>
    );
  });

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
          {props.autoCompleteList.length > 0 && (
            <div style={style.autoCompleteContainer}>
              <ul style={style.autoCompleteList} className="autoCompleteList">
                {autoList}
              </ul>
            </div>
          )}
        </form>
      </div>
    </>
  );
};

export default SearchBar;
