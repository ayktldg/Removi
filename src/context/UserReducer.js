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
        users: state.users.map((user, index) => {
          index === action.payload.userIndex &&
            user.favorites.push(action.payload.movie);
          return user;
        }),
      };
    case "REMOVE_BOOKMARK":
      return {
        ...state,
        users: state.users.map((user, index) => {
          if (index === action.payload.userIndex) {
            user.favorites.splice(action.payload.movieIndex, 1);
          }
          return user;
        }),
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
