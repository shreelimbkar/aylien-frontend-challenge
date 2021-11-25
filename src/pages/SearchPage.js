import React, { useState } from "react";

import { SearchBar, StoryList } from "../components/searchbar";

const SearchPage = (props) => {
  // const [input, setInput] = useState("");
  const [storyList, setStoryList] = useState();

  const searchInputOnSubmit = (input) => {
    if (input?.length >= 2) {
      console.log("input", input);
    }
  };

  const searchInputOnChange = (input) => {
    if (input?.length >= 2) {
      console.log("on change input", input);
    }
  };

  return (
    <>
      <SearchBar
        searchInput={searchInputOnSubmit}
        searchInputOnChange={searchInputOnChange}
      />
      <StoryList storyList={storyList} />
    </>
  );
};

export default SearchPage;
