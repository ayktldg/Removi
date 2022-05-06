import { useState, useEffect } from "react";
import axios from "axios";
import API from "../utils/api";

const useFetch = (endpoint, query = "") => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [pageTitle, setPageTitle] = useState();

  useEffect(() => {
    if (query !== "") {
      getSearchResult();
    } else {
      getData();
    }
    handlePageTitle();
  }, [endpoint, query]);

  const getData = async () => {
    try {
      const response = await axios.get(`${API.BASE_URL}${endpoint}`, {
        params: {
          api_key: API.API_KEY,
          language: "en-US",
        },
      });
      setData(response.data.results);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const getSearchResult = async () => {
    try {
      const response = await axios.get(`${API.BASE_URL}${endpoint}`, {
        params: {
          api_key: API.API_KEY,
          language: "en-US",
          query,
        },
      });
      setData(response.data.results);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handlePageTitle = () => {
    if (endpoint === "movie/popular") {
      setPageTitle("Popular Movies");
    } else if (endpoint === "movie/top_rated") {
      setPageTitle("Top Rated Movies");
    } else if (endpoint === "movie/now_playing") {
      setPageTitle("Now Playing Movies");
    } else if (endpoint === "movie/upcoming") {
      setPageTitle("Upcoming Movies");
    } else if (endpoint === "search/movie") {
      setPageTitle("Search Results");
    }
  };

  return { data, isLoading, error, pageTitle };
};

export default useFetch;
