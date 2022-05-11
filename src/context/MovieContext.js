import { createContext, useState } from "react";
import axios from "axios";
import API from "../utils/api";

const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [pageTitle, setPageTitle] = useState();

  const getMovieByFeature = async (endpoint) => {
    handlePageTitle(endpoint);
    try {
      const response = await axios.get(
        `${API.BASE_URL}${API.MOVIE}${endpoint}`,
        {
          params: {
            api_key: API.API_KEY,
            language: "en-US",
          },
        }
      );
      setData(response.data.results);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const getMovieDetail = async (endpoint) => {
    console.log(endpoint);
    try {
      const response = await axios.get(
        `${API.BASE_URL}${API.MOVIE}${endpoint}`,
        {
          params: {
            api_key: API.API_KEY,
            append_to_response: "videos",
          },
        }
      );
      setData(response.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const getMovieBySearch = async (query) => {
    try {
      const response = await axios.get(
        `${API.BASE_URL}${API.SEARCH}${API.MOVIE}`,
        {
          params: {
            api_key: API.API_KEY,
            language: "en-US",
            query,
          },
        }
      );
      setData(response.data.results);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handlePageTitle = (endpoint) => {
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

  return (
    <MovieContext.Provider
      value={{
        data,
        isLoading,
        error,
        pageTitle,
        getMovieByFeature,
        getMovieBySearch,
        getMovieDetail,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export default MovieContext;
