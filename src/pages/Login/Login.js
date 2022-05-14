import { useContext, useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import styles from "./Login.module.css";
import UserContext from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
import layout from "../../style/Layout.module.css";
import form from "../../style/Form.module.css";

const Login = () => {
  const navigate = useNavigate();
  const {
    currentUser,
    setCurrentUser,
    /*  setLoginErrorMessage, */
    loginErrorMessage,
  } = useContext(UserContext);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  /*   useEffect(() => {
    setLoginErrorMessage("");
  }, []); */

  const checkUser = useCallback(() => {
    console.log(currentUser);
    if (currentUser) {
      navigate("/");
    }
  }, [currentUser]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setCurrentUser({ userName, password });
    checkUser();
  };

  return (
    <div>
      <Navbar />
      <div className={form.page}>
        <div className={`${form.formWrapper} ${layout.container}`}>
          <h2>Please Sign In</h2>
          {loginErrorMessage && (
            <p className={styles.errorMessage}>{loginErrorMessage}</p>
          )}
          <form onSubmit={handleSubmit} className={form.form}>
            <div className={form.formGroup}>
              <label htmlFor="username">Username</label>
              <input
                type="text"
                name="username"
                id="username"
                required
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>
            <div className={form.formGroup}>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className={form.formGroup}>
              <input className={form.btn} type="submit" value="Login" />
            </div>
          </form>
          <p>
            Not an User?{" "}
            <Link to="/register" className={styles.registerLink}>
              <strong>Create account</strong>
            </Link>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
