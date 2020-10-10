import React, { useState } from "react";
import "./Search.css";
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { actionTypes } from "../reducer";

const Search = ({ hideButtons }) => {
  const [{}, dispatch] = useStateValue();
  const [input, setInput] = useState("");
  const history = useHistory();

  const search = (evt) => {
    evt.preventDefault();
    history.push("/search");

    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      term: input,
    });
  };

  return (
    <form className="search">
      <div className="search__input">
        <SearchIcon className="search__inputIcon" />
        <input value={input} onChange={(evt) => setInput(evt.target.value)} />
        <MicIcon />
      </div>

      {!hideButtons ? (
        <div className="search__buttons">
          <Button type="submit" variant="outlined" onClick={search}>
            {" "}
            Google Search{" "}
          </Button>
          <Button variant="outlined"> I am Feeling Lucky </Button>
        </div>
      ) : (
        <div className="search__buttonsHidden">
          <Button type="submit" variant="outlined" onClick={search}>
            {" "}
            Google Search{" "}
          </Button>
          <Button variant="outlined"> I am Feeling Lucky </Button>
        </div>
      )}
    </form>
  );
};

export default Search;
