import React from "react";
import "./SearchPage.css";
import { useStateValue } from "../StateProvider";

// https://developers.google.com/custom-search/v1/using_rest

// search engine id: 05cd5cd79fdcb94b5

console.log(process.env);
const SearchPage = () => {
  const [state, dispatch] = useStateValue();

  return (
    <div className="searchPage">
      <div className="searchPage__header">
        <h1>{state.term}</h1>
      </div>
    </div>
  );
};

export default SearchPage;
