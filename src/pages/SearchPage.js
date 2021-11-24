import React, { useState } from "react";

import { SearchBar, StoryList } from "../components/searchbar";

const SearchPage = (props) => {
  // const [input, setInput] = useState("");
  const [storyList, setStoryList] = useState();

  const searchInput = (input) => {
    console.log("input", input);
  };

  return (
    <>
      <SearchBar searchInput={searchInput} />
      <StoryList storyList={storyList} />
    </>
  );
};

export default SearchPage;
