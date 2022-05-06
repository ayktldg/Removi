import { useState, useEffect } from "react";
import axios from "axios";
import API from "../utils/api";

const useFetch = (endpoint) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [pageTitle, setPageTitle] = useState();

  useEffect(() => {
    handlePageTitle();
    getData();
  }, [endpoint]);

  const getData = async () => {
    try {
      const response = await axios.get(
        `${API.BASE_URL}${API.MOVIE}${endpoint}`,
        {
          params: { api_key: API.API_KEY, language: "en-US", page: 1 },
        }
      );
      setData(response.data.results);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handlePageTitle = () => {
    if (endpoint === "/popular") {
      setPageTitle("Popular Movies");
    } else if (endpoint === "/top_rated") {
      setPageTitle("Top Rated Movies");
    } else if (endpoint === "/now_playing") {
      setPageTitle("Now Playing Movies");
    } else if (endpoint === "/upcoming") {
      setPageTitle("Upcoming Movies");
    }
  };

  return { data, isLoading, error, pageTitle };
};

export default useFetch;
