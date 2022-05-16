import { createContext, useReducer } from "react";
import reducer from "./UserReducer";

const initialState = {
  users: [],
  currentUser: null,
  isLoggedIn: false,
};

const UserContext = createContext(initialState);

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addUser = (user) => {
    user.favorites = [];
    dispatch({ type: "ADD_USER", payload: user });
  };

  const setCurrentUser = (user) => {
    dispatch({
      type: "SET_CURRENT_USER",
      payload: user,
    });
  };

  const logout = (loginStatus) => {
    dispatch({ type: "LOG_OUT", payload: loginStatus });
  };

  const handleBookmarks = (movie) => {
    const userIndex = findUserIndex();
    const movieIndex = findFavMovieIndex(userIndex, movie);
    if (movieIndex === -1) {
      const updatedUsers = addToWatchList(userIndex, movie);
      dispatch({ type: "HANDLE_BOOKMARKS", payload: updatedUsers });
    } else {
      const filteredUsers = removeFromWatchList(userIndex, movieIndex);
      dispatch({ type: "HANDLE_BOOKMARKS", payload: filteredUsers });
    }
  };

  const findUserIndex = () => {
    return state.users.findIndex((item) => item.id === state.currentUser.id);
  };

  const findFavMovieIndex = (userIndex, movie) => {
    return state.users[userIndex].favorites.findIndex(
      (favMovie) => favMovie.id === movie.id
    );
  };

  const addToWatchList = (userIndex, movie) => {
    return state.users.map((user, index) => {
      if (index === userIndex) {
        user.favorites.push(movie);
      }
      return user;
    });
  };

  const removeFromWatchList = (userIndex, movieIndex) => {
    return state.users.map((user, index) => {
      if (index === userIndex) {
        user.favorites.splice(movieIndex, 1);
      }
      return user;
    });
  };

  return (
    <UserContext.Provider
      value={{
        users: state.users,
        currentUser: state.currentUser,
        isLoggedIn: state.isLoggedIn,
        addUser,
        setCurrentUser,
        handleBookmarks,
        logout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
