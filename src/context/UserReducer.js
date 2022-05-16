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
        currentUser: state.users[action.payload],
        isLoggedIn: true,
      };
    case "HANDLE_BOOKMARKS":
      return {
        ...state,
        users: action.payload,
      };
    case "LOG_OUT":
      return {
        ...state,
        currentUser: null,
        isLoggedIn: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
