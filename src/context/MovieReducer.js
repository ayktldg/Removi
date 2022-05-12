const reducer = (state, action) => {
  switch (action.type) {
    case "GET_MOVIES":
      return {
        ...state,
        movies: action.payload,
      };
    case "GET_MOVIE_DETAIL":
      return {
        ...state,
        movieDetail: action.payload,
      };
    case "GET_CAST":
      return {
        ...state,
        cast: action.payload,
      };
    case "FETCH_ERROR":
      return {
        ...state,
        error: action.payload,
      };
    case "SET_PAGE_TITLE":
      return {
        ...state,
        pageTitle: action.payload,
      };
    case "SET_IS_TRAILER_PLAY":
      return {
        ...state,
        isTrailerPlay: action.payload,
      };
    case "CHANGE_LOADING_STATUS":
      return {
        ...state,
        isLoading: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
