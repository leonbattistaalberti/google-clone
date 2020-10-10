import React, { useState, useEffect } from "react";

const API_KEY = process.env.REACT_APP_API_KEY;
const CONTEXT_KEY = "05cd5cd79fdcb94b5";

const useGoogleSearch = ({ term }) => {
  const [data, setData] = useGoogleSearch(null);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
      );
      const result = await response.json();
      setData(result);
    };
    fetchData();
  }, [term]);

  return { data };
};

export default useGoogleSearch;
