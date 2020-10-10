import React, { useState, useEffect } from "react";

const API_KEY = process.env.REACT_APP_API_KEY;
const CONTEXT_KEY = "05cd5cd79fdcb94b5";

const useGoogleSearch = (term) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
      )
        .then((res) => res.json())
        .then((result) => setData(result));
    };
    fetchData();
  }, [term]);

  return { data };
};
export default useGoogleSearch;
