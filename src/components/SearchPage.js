import React from "react";
import "./SearchPage.css";
import Search from "./Search";
import { useStateValue } from "../StateProvider";
import useGoogleSearch from "../hooks/useGoogleSearch";
import response from "../utils/response";
import { Link } from "react-router-dom";

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
        <Link to="/">
          <img
            className="searchPage__logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1024px-Google_2015_logo.svg.png"
            alt="google logo"
          />
        </Link>
        <div className="searchPage__headerBody">
          <Search hideButtons />
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
