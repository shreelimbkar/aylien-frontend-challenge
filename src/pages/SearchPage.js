import React, { useState } from "react";

import axios from "axios";
import { SearchBar, StoryList } from "../components/searchbar";

const { REACT_APP_API_ID, REACT_APP_API_KEY } = process.env;
const SearchPage = (props) => {
  // const [input, setInput] = useState("");
  const [storyList, setStoryList] = useState();
  const [autoCompleteList, setAutoCompleteList] = useState([]);

  const searchInputOnSubmit = (input) => {
    if (input?.length >= 2) {
    }
  };

  const searchInputOnChange = (input) => {
    if (input?.length >= 2) {
      console.log("on change input", input);
      axios
        .get("/autocompletes", {
          headers: {
            "Content-Type": "application/json",
            "X-AYLIEN-NewsAPI-Application-ID": REACT_APP_API_ID,
            "X-AYLIEN-NewsAPI-Application-Key": REACT_APP_API_KEY,
          },
          params: {
            type: "dbpedia_resources",
            term: input,
            language: "en",
            perPage: 100,
          },
        })
        .then(function (response) {
          console.log("response", response);
          response && setAutoCompleteList(response.data.autocompletes);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };

  return (
    <>
      <SearchBar
        searchInput={searchInputOnSubmit}
        searchInputOnChange={searchInputOnChange}
        autoCompleteList={autoCompleteList}
      />
      {/* {autoCompleteList && console.log("autoCompleteList", autoCompleteList)} */}
      <StoryList storyList={storyList} />
    </>
  );
};

export default SearchPage;
