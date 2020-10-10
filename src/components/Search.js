import React, { useState } from "react";
import "./Search.css";
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import { Button } from "@material-ui/core";

const Search = () => {
  const [input, setInput] = useState("");

  const search = (evt) => {
    evt.preventDefault();
    console.log("Search Clicked", input);
  };

  return (
    <form className="search">
      <div className="search__input">
        <SearchIcon className="search__inputIcon" />
        <input value={input} onChange={(evt) => setInput(evt.target.value)} />
        <MicIcon />
      </div>
      <div className="search__buttons">
        <Button type="submit" variant="outlined" onClick={search}>
          {" "}
          Google Search{" "}
        </Button>
        <Button variant="outlined"> I am Feeling Lucky </Button>
      </div>
    </form>
  );
};

export default Search;
