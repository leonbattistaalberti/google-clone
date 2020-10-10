import React from "react";
import "./SearchPage.css";
import { useStateValue } from "../StateProvider";
import useGoogleSearch from "../hooks/useGoogleSearch";
import response from "../utils/response";

const API_KEY = process.env.REACT_APP_API_KEY;
// https://developers.google.com/custom-search/v1/using_rest
const SearchPage = () => {
  const [state, dispatch] = useStateValue();
  //   LIVE API CALL
  //  const { data } = useGoogleSearch(state.term);
  const data = response;
  console.log(data);
  return (
    <div className="searchPage">
      <div className="searchPage__header">
        <h1>{state.term}</h1>
      </div>
    </div>
  );
};

export default SearchPage;
