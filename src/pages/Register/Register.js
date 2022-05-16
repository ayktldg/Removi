import { useContext, useState } from "react";
import UserContext from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import styles from "./Register.module.css";
import layout from "../../style/Layout.module.css";
import form from "../../style/Form.module.css";

const Register = () => {
  const { addUser, users } = useContext(UserContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const checkEmail = () => {
    if (users.length > 0) {
      return users.find((user) => user.email === email);
    }
    return false;
  };

  const checkUserName = () => {
    if (users.length > 0) {
      return users.find((user) => user.userName === userName);
    }
    return false;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isEmailTaken = checkEmail();
    const isUserNameTaken = checkUserName();
    if (isEmailTaken) {
      setErrorMessage("This email has already been taken!");
    } else if (isUserNameTaken) {
      setErrorMessage("This username has already been taken!");
    } else {
      const id = uuidv4();
      addUser({ id, email, userName, password });
      navigate("/login");
      setErrorMessage("");
    }
  };
  return (
    <div>
      <Navbar />
      <div className={form.page}>
        <div className={`${form.formWrapper} ${layout.container}`}>
          <h2 className={styles.title}>Register for millions of movies.</h2>
          {errorMessage && <p>{errorMessage}</p>}
          <form onSubmit={handleSubmit} className={form.form}>
            <div className={form.formGroup}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
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
              <input className={form.btn} type="submit" value="Register" />
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Register;
