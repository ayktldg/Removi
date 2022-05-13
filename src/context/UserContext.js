import { createContext, useReducer } from "react";
import reducer from "./UserReducer";

const initialState = {
  users: [],
  currentUser: null,
  isLoggedIn: false,
  loginErrorMessage: "",
};

const UserContext = createContext(initialState);

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addUser = (user) => {
    user.favorites = [];
    dispatch({ type: "ADD_USER", payload: user });
  };

  const setCurrentUser = (user) => {
    const index = state.users.findIndex(
      (item) =>
        item.userName === user.userName && item.password === user.password
    );
    if (index !== -1) {
      dispatch({
        type: "SET_CURRENT_USER",
        payload: state.users[index],
      });
    } else {
      setLoginErrorMessage("User not found. check username and password");
    }
  };

  const addBookmark = (user) => {
    dispatch({ type: "ADD_BOOKMARK", payload: user });
  };

  const removeBookmark = (user) => {
    dispatch({ type: "REMOVE_BOOKMARK", payload: user });
  };

  const logout = (loginStatus) => {
    dispatch({ type: "LOG_OUT", payload: loginStatus });
  };

  const setLoginErrorMessage = (message) => {
    dispatch({ type: "SET_LOGIN_ERR_MSG", payload: message });
  };

  return (
    <UserContext.Provider
      value={{
        users: state.users,
        currentUser: state.currentUser,
        isLoggedIn: state.isLoggedIn,
        loginErrorMessage: state.loginErrorMessage,
        addUser,
        setCurrentUser,
        addBookmark,
        removeBookmark,
        logout,
        setLoginErrorMessage,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
