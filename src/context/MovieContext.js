//import { createContext, useState } from "react";
import axios from "axios";
import API from "../utils/api";

import { createContext, useReducer } from "react";
import reducer from "./MovieReducer";

const initialState = {
  movies: [],
  movieDetail: {},
  cast: [],
  isTrailerPlay: false,
  isLoading: true,
  error: "",
  pageTitle: "",
};

const MovieContext = createContext(initialState);

export const MovieProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

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
      dispatch({
        type: "GET_MOVIES",
        payload: response.data.results,
      });
    } catch (err) {
      dispatch({
        type: "FETCH_ERROR",
        payload: err.message,
      });
    } finally {
      dispatch({
        type: "CHANGE_LOADING_STATUS",
        payload: false,
      });
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
      dispatch({
        type: "GET_MOVIES",
        payload: response.data.results,
      });
    } catch (err) {
      dispatch({
        type: "FETCH_ERROR",
        payload: err.message,
      });
    } finally {
      dispatch({
        type: "CHANGE_LOADING_STATUS",
        payload: false,
      });
    }
  };

  const getMovieDetail = async (endpoint) => {
    handlePageTitle(endpoint);
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
      dispatch({
        type: "GET_MOVIE_DETAIL",
        payload: response.data,
      });
    } catch (err) {
      dispatch({
        type: "FETCH_ERROR",
        payload: err.message,
      });
    } finally {
      dispatch({
        type: "CHANGE_LOADING_STATUS",
        payload: false,
      });
    }
  };

  const getCast = async (endpoint) => {
    try {
      const response = await axios.get(
        `${API.BASE_URL}${API.MOVIE}${endpoint}${API.CREDITS}`,
        {
          params: { api_key: API.API_KEY },
        }
      );
      dispatch({
        type: "GET_CAST",
        payload: response.data.cast,
      });
    } catch (err) {
      dispatch({
        type: "FETCH_ERROR",
        payload: err.message,
      });
    } finally {
      dispatch({
        type: "CHANGE_LOADING_STATUS",
        payload: false,
      });
    }
  };

  const handlePageTitle = (endpoint) => {
    if (endpoint === "/popular") {
      dispatch({ type: "SET_PAGE_TITLE", payload: "Popular Movies" });
    } else if (endpoint === "/top_rated") {
      dispatch({ type: "SET_PAGE_TITLE", payload: "Top Rated Movies" });
    } else if (endpoint === "/now_playing") {
      dispatch({ type: "SET_PAGE_TITLE", payload: "Now Playing" });
    } else if (endpoint === "/upcoming") {
      dispatch({ type: "SET_PAGE_TITLE", payload: "Upcoming Movies" });
    }
  };

  const handleTrailerPlay = (status) => {
    dispatch({ type: "SET_IS_TRAILER_PLAY", payload: status });
  };

  return (
    <MovieContext.Provider
      value={{
        movies: state.movies,
        movieDetail: state.movieDetail,
        cast: state.cast,
        isTrailerPlay: state.isTrailerPlay,
        isLoading: state.isLoading,
        error: state.error,
        pageTitle: state.pageTitle,
        getMovieByFeature,
        getMovieBySearch,
        getMovieDetail,
        getCast,
        handleTrailerPlay,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export default MovieContext;
