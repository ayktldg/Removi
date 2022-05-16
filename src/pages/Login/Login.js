import { useContext, useState } from "react";
import UserContext from "../../context/UserContext";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import styles from "./Login.module.css";
import layout from "../../style/Layout.module.css";
import form from "../../style/Form.module.css";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const { users, setCurrentUser } = useContext(UserContext);
  let navigate = useNavigate();

  const checkUser = () => {
    return users.find(
      (user) => user.userName === userName && user.password === password
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isCorrectLogin = checkUser();
    if (isCorrectLogin) {
      setCurrentUser({ userName, password });
      navigate("/");
      setErrorMessage("");
    } else {
      setErrorMessage("User not found. check username and password");
    }
  };

  return (
    <div>
      <Navbar />
      <div className={form.page}>
        <div className={`${form.formWrapper} ${layout.container}`}>
          <h2>Please Sign In</h2>
          {errorMessage && (
            <p className={styles.errorMessage}>{errorMessage}</p>
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
