import { useState, useEffect } from "react";
import paginate from "./utils";
// const url = "https://randomuser.me/api/?results=100";

export const useFetch = (url) => {
  const [loading, setLoading] = useState(true);
  const [people, setPeople] = useState([]);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(url);
      const data = await response.json();
      setPeople(paginate(data.results));
      setLoading(false);
    } catch (error) {
    }
  };
  useEffect(() => {
    fetchData();
  }, [url]);
  return { loading, people };
};

