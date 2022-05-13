const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_USER":
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    case "SET_CURRENT_USER":
      return {
        ...state,
        currentUser: action.payload,
        isLoggedIn: true,
      };
    case "ADD_BOOKMARK":
      return {
        ...state,
        cast: action.payload,
      };
    case "REMOVE_BOOKMARK":
      return {
        ...state,
        error: action.payload,
      };
    case "LOG_OUT":
      return {
        ...state,
        currentUser: {},
        isLoggedIn: action.payload,
      };
    case "SET_LOGIN_ERR_MSG":
      return {
        ...state,
        loginErrorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
